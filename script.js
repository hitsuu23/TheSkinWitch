// script.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        'https://example.com/images/361193906_17957656778625680_9013875367255516314_n.jpg',
        'https://example.com/images/361592645_17957656766625680_34783557026039711_n.jpg',
        // Add all URLs using the same pattern
        'https://example.com/images/418995874_1717356192086076_9105599282527051100_n.jpg'
    ];

    const container = document.querySelector('.slideshow');
    let currentSlide = 0;

    function nextSlide() {
        container.style.backgroundImage = `url('${slides[currentSlide]}')`;
        currentSlide = (currentSlide + 1) % slides.length;
        setTimeout(nextSlide, 3000); // Change slide every 3 seconds
    }

    nextSlide();
});
