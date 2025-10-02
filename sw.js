// ==========================================
// SERVICE WORKER PARA FUNCIONALIDAD OFFLINE
// Permite que la PWA funcione sin conexión
// ==========================================

const CACHE_NAME = 'rutina-gym-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png'
];

// Instalación del Service Worker - cachea los archivos necesarios
self.addEventListener('install', event => {
    console.log('Service Worker: Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Archivos en caché');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Service Worker: Error al cachear', err))
    );
});

// Activación del Service Worker - limpia cachés antiguos
self.addEventListener('activate', event => {
    console.log('Service Worker: Activado');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Limpiando caché antiguo');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Estrategia: Cache First, falling back to Network
// Ideal para PWA que deben funcionar offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si está en caché, devolver la respuesta cacheada
                if (response) {
                    return response;
                }
                
                // Si no está en caché, hacer petición a la red
                return fetch(event.request)
                    .then(response => {
                        // Verificar si recibimos una respuesta válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clonar la respuesta para cachearla
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Si falla la red, mostrar página offline personalizada (opcional)
                        return caches.match('./index.html');
                    });
            })
    );
});
