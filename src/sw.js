importScripts("workbox-v4.3.1/workbox-sw.js");

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1'})

const precacheManifest = [];

workbox.routing.registerRoute(
  new RegExp('http://localhost:4000/api/receipe'),
  workbox.strategies.cacheFirst()
)

workbox.precaching.precacheAndRoute(precacheManifest);