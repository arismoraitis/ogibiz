document.addEventListener('DOMContentLoaded', (event) => {
    // Disable all click event listeners on the specified elements
    const buttons = document.querySelectorAll('.button-heroimage2');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        }, true);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Remove existing click event listeners on .button-heroimage2 elements
    const buttons = document.querySelectorAll('.button-heroimage2');
    buttons.forEach(button => {
        // Clone the button to remove event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });

    // Ensure buttons are clickable
    const buttonStyles = document.createElement('style');
    buttonStyles.innerHTML = `
        .button-heroimage2 {
            pointer-events: auto !important;
        }
    `;
    document.head.appendChild(buttonStyles);
});
