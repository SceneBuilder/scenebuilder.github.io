import { dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

const assetHost = 'https://omnispace.assets.yunhocho.com';

export const handle: Handle = async ({ event, resolve }) => {
  if (!dev && event.url.pathname.endsWith('.glb')) {
    const redirectTarget = new URL(event.url.pathname + event.url.search, assetHost);
    return Response.redirect(redirectTarget, 307);
  }

  return resolve(event);
};
