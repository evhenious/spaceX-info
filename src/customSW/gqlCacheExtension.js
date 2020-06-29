import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute, NavigationRoute } from 'workbox-routing';
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
  const cachedResponse = await storage.getCache(event.request.clone());

  const fetchPromise = fetch(event.request.clone())
    .then((response) => {
      storage.saveCache(event.request.clone(), response.clone());
      return response;
    })
    .catch((err) => {
      console.warn(err.message);
      return undefined;
    });

  return cachedResponse ? cachedResponse : fetchPromise;
}
