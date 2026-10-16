const PREFIX = 'dogo-pages-';
const CACHE = PREFIX + 'v2';
const base = self.registration.scope;
const local = path => new URL(path, base).href;
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll([
    local('./'), local('icon-192.png'), local('icon-512.png'),
    local('manifest.webmanifest'), local('login-reference.png')
  ])));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith(PREFIX) && key !== CACHE)
    .map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(base)) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy)));
    }
    return response;
  }).catch(async () => (await caches.match(event.request)) ||
    (event.request.mode === 'navigate' ? await caches.match(local('./')) : Response.error())));
});
