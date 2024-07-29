document.addEventListener('DOMContentLoaded', (event) => {
    // Disable all click event listeners on the specified elements
    const buttons = document.querySelectorAll('.banner');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        }, true);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Remove existing click event listeners on .button-heroimage2 elements
    const buttons = document.querySelectorAll('.banner');
    buttons.forEach(button => {
        // Clone the button to remove event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });

    // Ensure buttons are clickable
    const buttonStyles = document.createElement('style');
    buttonStyles.innerHTML = `
        .banner {
            pointer-events: auto !important;
            z-index: 9999 !important;
        }
    `;
    document.head.appendChild(buttonStyles);
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Disable all click event listeners on the specified elements
    const buttons = document.querySelectorAll('.hero-content');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        }, true);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Remove existing click event listeners on .button-heroimage2 elements
    const buttons = document.querySelectorAll('.hero-content');
    buttons.forEach(button => {
        // Clone the button to remove event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });

    // Ensure buttons are clickable
    const buttonStyles = document.createElement('style');
    buttonStyles.innerHTML = `
        .hero-content {
            pointer-events: auto !important;
            z-index: 9999 !important;
        }
    `;
    document.head.appendChild(buttonStyles);
});
