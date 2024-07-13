document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('grid-container');
    const imageSources = [
        '361193906_17957656778625680_9013875367255516314_n.jpg',
        '361592645_17957656766625680_34783557026039711_n.jpg',
        '361935063_17957656769625680_1041997548789609066_n.jpg',
        '362222439_17957656787625680_5148413918633484777_n.jpg',
        '364061071_17960702834625680_8134428159021552754_n.jpg',
        '365997779_17960123450625680_6796418122314361373_n.jpg',
        '418995874_1717356192086076_9105599282527051100_n.jpg',
        '418997278_199518556582474_2514905692831125752_n.jpg',
        '419033080_933903574833988_1432935005120033798_n.jpg',
        '419308101_3682199198735455_5782245381695379653_n.jpg',
        '419557717_884799369813320_8581302738088613425_n.jpg',
        '429836740_313369595050411_9162163585109167888_n.jpg',
        '432371666_2249970802001650_2412728384470481442_n.jpg',
        'IMG_1200.jpg',
        'IMG_1201.jpg',
        'IMG_1209.jpg',
        'IMG_1208.jpg',
        'IMG_5535.jpg',
        'IMG_5286.jpg',
        'IMG_5285.jpg',
        'IMG_0611.jpg',
        'IMG_1124.jpg',
        'IMG_0613.jpg',
        'IMG_0615.jpg',
        'IMG_1026.jpg',
        'IMG_1027.jpg',
        'IMG_1030.jpg'
    ];

    function createImageElement(src) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        const img = document.createElement('img');
        img.classList.add('grid-image');
        img.src = src;
        div.appendChild(img);
        return div;
    }

    function loadInitialImages() {
        console.log("Loading initial images");
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            console.log(`Selected initial image index: ${randomIndex}`);
            const imageElement = createImageElement(imageSources[randomIndex]);
            gridContainer.appendChild(imageElement);
        }
    }

    function changeImage() {
        console.log("Changing images");
        const images = document.querySelectorAll('.grid-image');
        images.forEach((image, index) => {
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            console.log(`Changing image at index ${index} to image index: ${randomIndex}`);
            image.src = imageSources[randomIndex];
        });
    }

    loadInitialImages();
    setInterval(changeImage, 6500); // Change images every 6.5 seconds
});
