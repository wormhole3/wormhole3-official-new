export default {
    async fetch(request: Request, env: any) {
      const url = new URL(request.url);
  
      // 先尝试返回真实静态资源
      let res = await env.ASSETS.fetch(request);
  
      // 如果没找到，则返回 SPA 入口 index.html
      if (res.status === 404) {
        const indexReq = new Request(
          new URL('/index.html', url).toString(),
          request
        );
        res = await env.ASSETS.fetch(indexReq);
      }
  
      return res;
    },
  };
  