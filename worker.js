// Cloudflare Worker script to handle client-side routing
// This ensures all routes return index.html for React Router

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Check if the request is for a static asset
    const staticExtensions = ['.js', '.css', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
    const isStaticAsset = staticExtensions.some(ext => url.pathname.endsWith(ext));
    
    // If it's a static asset, try to serve it from the assets
    if (isStaticAsset) {
      try {
        return await env.ASSETS.fetch(request);
      } catch (e) {
        // If asset not found, continue to index.html
      }
    }
    
    // For all other routes, serve index.html
    // This allows React Router to handle client-side routing
    const indexRequest = new Request(new URL('/index.html', request.url), request);
    try {
      return await env.ASSETS.fetch(indexRequest);
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  }
};

