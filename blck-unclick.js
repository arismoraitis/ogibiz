        // Define the event listener function
        function onMouseOver() {
            console.log('Mouse is over the element!');
        }

        // Select the element
        const element = document.querySelector('#slider-home-0.carousel.bs-slider.slide.control-round.indicators-line');

        // Check if the element exists before adding/removing an event listener
        if (element) {
            // Add the mouseover event listener
            element.addEventListener('mouseover', onMouseOver, true);

            // Remove the mouseover event listener
            element.removeEventListener('mouseover', onMouseOver, true);
        } else {
            console.log('Element not found');
        }
