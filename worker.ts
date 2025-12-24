import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';
// 这里的 manifest 是由 Wrangler 在构建时自动注入的虚拟模块
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const ASSET_MANIFEST = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const options = {
      ASSET_NAMESPACE: env.__STATIC_CONTENT, // Wrangler 自动绑定的 KV 命名空间
      ASSET_MANIFEST: ASSET_MANIFEST,
    };

    try {
      // 1. 尝试从 KV 中获取资源
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        options
      );
    } catch (e) {
      // 2. 如果报错 (通常是 404)，则尝试返回 index.html
      try {
        let notFoundResponse = await getAssetFromKV(
          {
            // 构造一个指向 index.html 的新请求
            request: new Request(`${url.origin}/index.html`, request),
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          options
        );

        // 返回 index.html，但状态码设为 200，让前端路由接管
        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 200,
        });
      } catch (e) {
        return new Response(`Not Found: ${e.message}`, { status: 404 });
      }
    }
  },
};