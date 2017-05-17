importScripts('./js/sw-toolbox/sw-toolbox.js');

const cacheFiles = [
    './',
    './index.html',
    './choose.html',

    './js/hn.js',
    './js/app.js',
    './js/score.js',
    './js/toast.js',
    './js/index.js',
    './js/globals.js',
    './js/offline.js',
    './js/jquery.min.js',
    './js/idb-keyval.js',
    './js/bootstrap.min.js',

    './css/style.css',
    './css/quiz.css',
    './css/bootstrap.min.css',

    './images/refresh.svg',
    './images/push-off.png',
    './images/push-on.png',

    'https://fonts.googleapis.com/css?family=Archivo+Black|Droid+Serif|Hammersmith+One|Indie+Flower|Lobster|Open+Sans|Orbitron|Pacifico|Poiret+One|Roboto'
];

// implements all the service worker functions
toolbox.precache(cacheFiles);

// Install and Activate events
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Fetch events
self.addEventListener('fetch', (event) => { event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request))); });