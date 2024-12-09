// Original values
const originalText = "Hover over an image below to display here.";
const originalBackground = "url('default-image.jpg')";

// Function to update the image and text
function upDate(thumbnail) {
    console.log("Event triggered for:", thumbnail);

    // Get the image and alt attributes from the thumbnail
    const previewPic = {
        src: thumbnail.getAttribute('data-image'),
        alt: thumbnail.getAttribute('data-alt')
    };

    console.log("Preview Pic:", previewPic);

    // Change the text of the element with id of image
    document.getElementById('image').innerText = previewPic.alt;

    // Change the background image of the element with id of image
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to undo changes
function undo() {
    // Reset the text and background image to original values
    const imageDiv = document.getElementById('image');
    imageDiv.innerText = originalText;
    imageDiv.style.backgroundImage = originalBackground;
}

// Add event listeners to thumbnails
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', () => upDate(thumbnail));
    thumbnail.addEventListener('mouseout', undo);
});
