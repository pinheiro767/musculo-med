
const CACHE = "roteiro-miologia-v5";
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      "./","./index.html","./css/style.css","./js/data.js","./js/app.js","./manifest.json",
      "./assets/icons/icon192.png","./assets/icons/icon512.png"
    ]))
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
