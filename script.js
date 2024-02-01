document.addEventListener('DOMContentLoaded', function() {
    const images = ['Bild1.png', 'Bild2.png', 'Bild3.png', 'Bild4.png'];
    let currentIndex = 0;

    const heroImage = document.getElementById('heroImage');
    if (!heroImage) return; // Exit if the image isn't found

    setInterval(() => {
        // Start fade out
        heroImage.style.opacity = 0;

        // Wait for the fade-out to complete
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Cycle through the array
            heroImage.src = images[currentIndex]; // Update the image source

            // Fade in after changing the source
            heroImage.style.opacity = 1;
        }, 700); // This should match the CSS transition time
    }, 4500); // Includes time for the image to be visible plus fade time
});
