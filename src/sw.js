importScripts("workbox-v4.3.1/workbox-sw.js");

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1'})

const precacheManifest = [];

workbox.routing.registerRoute(
  new RegExp('https://recipes-homes-api.herokuapp.com/api/recipe'),
  workbox.strategies.cacheFirst({
    cacheName: 'data-cache'
  })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com\/css\?family=Montserrat&display=swap/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

self.addEventListener('install', () => {
  const channel = new BroadcastChannel('service-worker-channel');
  channel.postMessage({ promptToReload: true });
  channel.onmessage = (message) => {
    if(message.data.skipWaiting) {
      self.skipWaiting();
    }
  }
})

workbox.precaching.precacheAndRoute(precacheManifest);

//Cool