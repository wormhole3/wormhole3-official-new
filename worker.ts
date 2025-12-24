export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    // 先尝试直接返回静态资源
    let res = await env.ASSETS.fetch(request);

    // 如果 404 且不是静态资源路径
    if (res.status === 404 && !url.pathname.startsWith('/assets/')) {
      // ⚠️ 返回 index.html 内容，而不是 redirect
      const indexReq = new Request(
        new URL('/index.html', url).toString(),
        request
      );
      res = await env.ASSETS.fetch(indexReq);
    }

    return res; // 直接返回内容
  },
};
