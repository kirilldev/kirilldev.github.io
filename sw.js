const CACHE_NAME = 'resources_cache';
const waitTime = 5000;

const criticalResources = [
    '/dist/bundle.js',
    '/db/tags.json',
    '/db/problems.json',
    '/'
];

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
            console.log(event.request.url);

            if (!event.request.url.startsWith('/db/')) {
                return cachedResponse || fetch(event.request);
            }

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
