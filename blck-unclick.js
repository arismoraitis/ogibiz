<script>
document.addEventListener('DOMContentLoaded', (event) => {
    // Disable all click event listeners on the specified elements
    const buttons = document.querySelectorAll('.button-heroimage2');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        }, true);
    });
});
</script>
