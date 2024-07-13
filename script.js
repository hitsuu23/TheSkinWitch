let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    slideInterval = setTimeout(showSlides, 10000); // Change image every 2 seconds
}

function currentSlide(n) {
    clearTimeout(slideInterval);
    slideIndex = n - 1;
    showSlides();
}

function plusSlides(n) {
    clearTimeout(slideInterval);
    slideIndex += n - 1;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
