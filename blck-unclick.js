$('#slider-home-0').on('click', 'a', function(event) {
    // Check if the target is a link
    if ($(event.target).is('a')) {
        return true; // Allow the link to be followed
    }

    // Other conditions where you want to prevent the default action
    event.preventDefault();
});
