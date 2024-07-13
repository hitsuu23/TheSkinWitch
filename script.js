// script.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        'https://example.com/images/image1.jpg',
        'https://example.com/images/image2.jpg',
        // Add more image URLs
    ];

    const container = document.querySelector('.slideshow');
    let currentSlide = 0;

    function nextSlide() {
        if (currentSlide >= slides.length) currentSlide = 0;
        container.style.backgroundImage = `url('${slides[currentSlide]}')`;
        currentSlide++;
        setTimeout(nextSlide, 3000); // Change slide every 3 seconds
    }

    nextSlide();
});
