document.addEventListener('DOMContentLoaded', function() {
    const images = ['Bild1.png', 'Bild2.png', 'Bild3.png', 'Bild4.png'];
    let currentIndex = 0;

    const heroImage = document.getElementById('heroImage');
    if (!heroImage) return; // Exit if the image isn't found

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through the array
        heroImage.src = images[currentIndex]; // Update the image source
    }, 3000); // Change image every 3000 milliseconds
});
