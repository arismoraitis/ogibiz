document.addEventListener('DOMContentLoaded', () => {
    // Function to remove all event listeners from an element
    function removeAllEventListeners(element) {
        let newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
        return newElement;
    }

    // Ensure pointer events are enabled
    function ensurePointerEvents(element) {
        element.style.pointerEvents = 'auto';
        let children = element.querySelectorAll('*');
        children.forEach(child => {
            child.style.pointerEvents = 'auto';
        });
    }

    // Select the banner element
    let banner = document.querySelector('.banner');
    if (banner) {
        // Remove all event listeners
        banner = removeAllEventListeners(banner);
        // Ensure pointer events
        ensurePointerEvents(banner);
    }

    // Additionally, handle specific buttons if needed
    let buttons = document.querySelectorAll('.button-heroimage2');
    buttons.forEach(button => {
        button = removeAllEventListeners(button);
        ensurePointerEvents(button);
    });
});
