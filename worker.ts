export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    let res = await env.ASSETS.fetch(request);

    if (
      res.status === 404 &&
      !url.pathname.startsWith('/assets/')
    ) {
      const indexUrl = new URL('/index.html', url);
      const indexReq = new Request(indexUrl.toString(), request);
      res = await env.ASSETS.fetch(indexReq);
    }

    return res;
  },
};
