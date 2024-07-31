/*
Για να λειτουργήσει σωστά το js πρέπει να μπει στο css ο παρακάτω κώδικας
@media (min-width: 769px) {
 .textfitimg {
    height: -webkit-fill-available;
}
}
.content-block .textfitimg {
 background-color: #f6f2e8 !important;
padding: 50px;
display: flex !important;
flex-direction: column !important;
justify-content: center !important;
box-sizing: border-box !important; Για να συμπεριληφθούν τα padding και το border στο ύψος
  margin: 0 !important; Εξάλειψη των περιθωρίων για πιο ακριβή μέτρηση
}
*/
// Temporarily set the container height to auto to calculate its natural height
function adjustTextHeight() {
    if (window.innerWidth > 769) {
        var imageContainers = document.querySelectorAll('.content-block-new img');
        var textContainers = document.querySelectorAll('.content-block');

        imageContainers.forEach(function(img, index) {
            if (index < textContainers.length) {
                if (img.complete) {
                    adjustTextContainer(textContainers[index], img.clientHeight);
                } else {
                    img.onload = function() {
                        adjustTextContainer(textContainers[index], img.clientHeight);
                    };
                }
            }
        });
    }
}

function adjustTextContainer(container, targetHeight) {
    // Temporarily set the container height to auto to calculate its natural height
    container.style.height = 'auto';

    // Get the height of the container before adjustment
    var originalHeight = container.clientHeight;
    var scaleFactor = targetHeight / originalHeight;

    // Set the container height to the target height
    container.style.height = targetHeight + 'px';

    // Adjust font size based on the scale factor
    var pElements = container.querySelectorAll('p');
    var h2Elements = container.querySelectorAll('h2');

    function adjustFontSize(elements) {
        elements.forEach(element => {
            var style = window.getComputedStyle(element);
            var fontSize = parseFloat(style.fontSize);
            var lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;

            // Calculate new font size and line height
            var newFontSize = fontSize * scaleFactor;
            var newLineHeight = lineHeight * scaleFactor;

            element.style.fontSize = newFontSize + 'px';
            element.style.lineHeight = newLineHeight + 'px';
        });
    }

    adjustFontSize(pElements);
    adjustFontSize(h2Elements);

    // Check if the text fits exactly within the container height
    var containerHeightAfterAdjustment = container.clientHeight;
    var textContentHeight = Array.from(pElements).reduce((acc, p) => acc + p.scrollHeight, 0) +
                            Array.from(h2Elements).reduce((acc, h2) => acc + h2.scrollHeight, 0);

    // Adjust container height to exactly fit the text if necessary
    if (textContentHeight > targetHeight) {
        container.style.height = (targetHeight - (textContentHeight - targetHeight)) + 'px';
    }
}

// Initial adjustment when DOM is fully loaded
document.addEventListener("DOMContentLoaded", adjustTextHeight);

// Adjust on window resize
window.addEventListener("resize", adjustTextHeight);
