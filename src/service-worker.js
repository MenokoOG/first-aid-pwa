self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("first-aid-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/src/styles.css"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
