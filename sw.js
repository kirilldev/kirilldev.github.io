const CACHE_NAME = 'app_core_cache_v' + version;

const criticalResources = [
    '/dist/bundle.js',
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
            return cachedResponse || fetch(event.request);
        })
    }

    event.respondWith(proxy());
});
