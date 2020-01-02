importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Custom adjustment
workbox.routing.registerRoute(
  new RegExp('http://localhost:4000/api/receipe'),
  workbox.strategies.cacheFirst()
)

workbox.precaching.precacheAndRoute([]);