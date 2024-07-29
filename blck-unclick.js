function removeMouseOverListener() {
    // Select the element with the ID 'slider-home-0'
    var element = document.getElementById("slider-home-0");
    
    // Check if the element exists
    if (element) {
        // Remove the 'mouseover' event listener from the element
        element.removeEventListener("mouseover", removeMouseOver, false);
    }
}
