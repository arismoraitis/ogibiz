(function() {
    // Get the element
    var element = document.getElementById('slider-home-0.carousel.bs-slider.slide.control-round.indicators-line');

    // Store the existing event handler
    var oldHandler;

    // Function to find and remove old event listener
    function findAndRemoveOldListener() {
        var listeners = getEventListeners(element);
        if (listeners && listeners.mouseover) {
            for (var i = 0; i < listeners.mouseover.length; i++) {
                var listener = listeners.mouseover[i];
                if (listener.passive === false) {
                    oldHandler = listener.listener;
                    element.removeEventListener('mouseover', oldHandler, { passive: false });
                    break;
                }
            }
        }
    }

    // Polyfill for getEventListeners (for older browsers)
    function getEventListeners(el) {
        if (typeof getEventListeners !== 'function') {
            return; // If the browser does not support this function
        }
        return getEventListeners(el);
    }

    // Remove old event listener
    findAndRemoveOldListener();

    // Add the new event listener
    if (oldHandler) {
        element.addEventListener('mouseover', oldHandler, { passive: true });
    }
})();
