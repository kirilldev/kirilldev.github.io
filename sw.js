const CACHE_NAME = 'resources_cache';
const waitTime = 5000;
const problemsJson = '/db/problems.json';
const tagsJson = '/db/tags.json';
const criticalResources = ['/dist/bundle.js', tagsJson, problemsJson, '/'];

cacheCriticals = () => {
    return caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(criticalResources);
    });
};

self.addEventListener('install', function (event) {
    event.waitUntil(cacheCriticals().then(() => self.skipWaiting()));
});

self.addEventListener('fetch', function (event) {
    function proxy() {
        return caches.match(event.request).then(function (cachedResponse) {
            if (!event.request.url.endsWith(problemsJson) &&
                !event.request.url.endsWith(tagsJson)) {
                return cachedResponse || fetch(event.request);
            }

            console.log(event.request.url);

            return new Promise(resolve => {
                fetch(event.request)
                    .then(response => {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, response.clone());
                            resolve(response);
                        });
                    })
                    .catch(e => resolve(cachedResponse));

                setTimeout(() => resolve(cachedResponse), waitTime);
            });
        })
    }

    event.respondWith(proxy());
});
