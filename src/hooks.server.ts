import { dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

const assetHost = 'https://omnispace.assets.yunhocho.com';

export const handle: Handle = async ({ event, resolve }) => {
  if (!dev && event.url.pathname.endsWith('.glb')) {
    const assetUrl = new URL(event.url.pathname + event.url.search, assetHost);

    // Fetch from R2
    const ogResponse = await fetch(assetUrl);

    // Create a new response, copying headers from R2 response
    const response = new Response(ogResponse.body, {
      status: ogResponse.status,
      statusText: ogResponse.statusText,
      headers: new Headers(ogResponse.headers)
    });

    // Add the CORS header
    response.headers.set('Access-Control-Allow-Origin', '*');

    return response;
  }

  return resolve(event);
};
