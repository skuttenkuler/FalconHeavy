"use strict";
// This optional code is used to register a service worker.
// register() is not called by default.
Object.defineProperty(exports, "__esModule", { value: true });
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = process.env.PUBLIC_URL + "/service-worker.js";
            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://bit.ly/CRA-PWA');
                });
            }
            else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.register = register;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' }
    })
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        var contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(function (registration) {
            registration.unregister();
        })
            .catch(function (error) {
            console.error(error.message);
        });
    }
}
exports.unregister = unregister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVdvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIuL2NsaWVudC8iLCJzb3VyY2VzIjpbImNsaWVudC9zcmMvc2VydmljZVdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkRBQTJEO0FBQzNELHVDQUF1Qzs7QUFFdkMsOEVBQThFO0FBQzlFLDhFQUE4RTtBQUM5RSwrRUFBK0U7QUFDL0UsMkVBQTJFO0FBQzNFLDJDQUEyQztBQUUzQyw0RUFBNEU7QUFDNUUsc0NBQXNDO0FBRXRDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssV0FBVztJQUN0Qyx1Q0FBdUM7SUFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssT0FBTztJQUNwQyxpREFBaUQ7SUFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUM1Qix3REFBd0QsQ0FDekQsQ0FDSixDQUFDO0FBT0YsU0FBZ0IsUUFBUSxDQUFDLE1BQWU7SUFDdEMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTtRQUN6RSxvRUFBb0U7UUFDcEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckIsQ0FBQztRQUNGLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMvQyx1RUFBdUU7WUFDdkUseUVBQXlFO1lBQ3pFLDZFQUE2RTtZQUM3RSxPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQU0sS0FBSyxHQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSx1QkFBb0IsQ0FBQztZQUU1RCxJQUFJLFdBQVcsRUFBRTtnQkFD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