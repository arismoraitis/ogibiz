const MIN_H2_FONT_SIZE = 15; // Ελάχιστο μέγεθος γραμματοσειράς για τα h2 σε pixels
const MIN_P_FONT_SIZE = 12; // Ελάχιστο μέγεθος γραμματοσειράς για τα h2 σε pixels

function adjustTextHeight() {
    if (window.innerWidth > 769) {
        var imageContainers = document.querySelectorAll('.content-block-new img');
        var textContainers = document.querySelectorAll('.content-block .textfitimg');

        var minFontSize = Infinity;

        // Step 1: Calculate the minimum font-size for all text containers
        imageContainers.forEach((img, index) => {
            if (index < textContainers.length) {
                if (img.complete) {
                    minFontSize = Math.min(minFontSize, calculateFontSize(textContainers[index], img.clientHeight));
                } else {
                    img.onload = () => {
                        minFontSize = Math.min(minFontSize, calculateFontSize(textContainers[index], img.clientHeight));
                    };
                }
            }
        });

        // Step 2: Apply the minimum font-size to all text containers and set their height to match image containers
        Promise.all(
            Array.from(imageContainers).map((img, index) => 
                new Promise(resolve => {
                    if (index < textContainers.length) {
                        if (img.complete) {
                            resolve();
                        } else {
                            img.onload = resolve;
                        }
                    } else {
                        resolve();
                    }
                })
            )
        ).then(() => {
            textContainers.forEach((container, index) => {
                const img = imageContainers[index];
                if (img) {
                    container.style.height = img.clientHeight + 'px';
                    applyFontSize(container, minFontSize);
                    applyFlexboxStyling(container);
                }
            });
        });
    }
}

function calculateFontSize(container, targetHeight) {
    // Temporarily set the container height to auto to calculate its natural height
    container.style.height = 'auto';

    var originalHeight = container.clientHeight;
    var scaleFactor = targetHeight / originalHeight;

    // Get the font sizes for the current container
    var pElements = container.querySelectorAll('p');
    var h2Elements = container.querySelectorAll('h2');

    let minFontSize = Infinity;

    function adjustFontSize(elements) {
        elements.forEach(element => {
            var style = window.getComputedStyle(element);
            var fontSize = parseFloat(style.fontSize);
            var lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;

            var newFontSize = fontSize * scaleFactor;
            var newLineHeight = lineHeight * scaleFactor;

            element.style.fontSize = newFontSize + 'px';
            element.style.lineHeight = newLineHeight + 'px';

            minFontSize = Math.min(minFontSize, newFontSize);
        });
    }

    adjustFontSize(pElements);
    adjustFontSize(h2Elements);

    return minFontSize;
}

function applyFontSize(container, minFontSize) {
    var pElements = container.querySelectorAll('p');
    var h2Elements = container.querySelectorAll('h2');

    function setFontSize(elements, minFontSize) {
        elements.forEach(element => {
            let newFontSize = minFontSize;
            // Check if the element is h2 and apply the min font size restriction
            if (element.tagName.toLowerCase() === 'h2') {
                newFontSize = Math.max(minFontSize, MIN_H2_FONT_SIZE);
            }
            element.style.fontSize = newFontSize + 'px';
            var style = window.getComputedStyle(element);
            var lineHeight = parseFloat(style.lineHeight) || newFontSize * 1.2;
            element.style.lineHeight = lineHeight + 'px';
        });
    }

    setFontSize(pElements, minFontSize);
    setFontSize(h2Elements, minFontSize);
}

function applyFlexboxStyling(container) {
    container.style.display = 'flex';
    container.style.flexDirection = 'column'; // Για κάθετη στοίχιση
    container.style.justifyContent = 'center'; // Κεντράρισμα στον άξονα Y
}

// Initial adjustment when DOM is fully loaded
document.addEventListener("DOMContentLoaded", adjustTextHeight);

// Adjust on window resize
window.addEventListener("resize", adjustTextHeight);
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function() {
    $('.content-block-new img').addClass('reveal fade-left');
  });
