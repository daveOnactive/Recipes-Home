module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{png,json,xml,ico,html,js,txt,svg,webmanifest,css}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};