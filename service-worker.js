// service-worker.js
const CACHE_NAME = 'checklist-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './generarPDF.js',
  './guardarProyecto.js',
  './abrirProyecto.js',
  './nuevoChecklist.js',
  './assets/icon-192x192.png',
  './assets/icon-512x512.png',
  './assets/plantilla_formulario.jpg'
];

// Instala el service worker y cachea archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activa el SW y limpia caches antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Intercepta las peticiones y responde con caché o red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      // Podrías retornar una página offline aquí si deseas
    })
  );
});
