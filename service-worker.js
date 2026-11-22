const CACHE_NAME = "redmax-tech-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json"
];

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys()
            .then((keys) => {

                return Promise.all(
                    keys.map((key) => {

                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }
                    })
                );
            })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)
            .then((cached) => {

                return (
                    cached ||
                    fetch(event.request)
                        .then((response) => {

                            const copy =
                                response.clone();

                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(
                                        event.request,
                                        copy
                                    );
                                });

                            return response;
                        })
                        .catch(() => {
                            return cached;
                        })
                );
            })
    );
});