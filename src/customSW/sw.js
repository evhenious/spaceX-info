import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing';
import Storage from './storage';

/* eslint-disable */
precacheAndRoute(self.__WB_MANIFEST);
/* eslint-enable */

const storage = new Storage();

registerRoute(
  new RegExp('.*graphql'),
  async (event) => staleWhileRevalidate(event),
  'POST'
);

async function staleWhileRevalidate(event) {
  let cachedResponse = await storage.getCache(event.request.clone());

  let fetchPromise = fetch(event.request.clone())
    .then((response) => {
      storage.saveCache(event.request.clone(), response.clone());
      return response;
    })
    .catch((err) => {
      console.warn(err.message);
    });

  return cachedResponse ? Promise.resolve(cachedResponse) : fetchPromise;
}
