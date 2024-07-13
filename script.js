// script.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        'https://example.com/images/361193906_17957656778625680_9013875367255516314_n.jpg',
        'https://example.com/images/361592645_17957656766625680_34783557026039711_n.jpg',
        'https://example.com/images/361935063_17957656769625680_1041997548789609066_n.jpg',
        'https://example.com/images/362222439_17957656787625680_5148413918633484777_n.jpg',
        'https://example.com/images/418995874_1717356192086076_9105599282527051100_n.jpg',
        'https://example.com/images/364061071_17960702834625680_8134428159021552754_n.jpg',
        'https://example.com/images/365997779_17960123450625680_6796418122314361373_n.jpg',
        'https://example.com/images/429836740_313369595050411_9162163585109167888_n.jpg',
        'https://example.com/images/432371666_2249970802001650_2412728384470481442_n.jpg',
        'https://example.com/images/419557717_884799369813320_8581302738088613425_n.jpg'
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
