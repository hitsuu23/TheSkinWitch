// Initialize and control the first slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    Array.from(slides).forEach((slide) => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex-1].style.display = "block";
    Array.from(dots).forEach((dot) => dot.className = dot.className.replace(" active", ""));
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Initialize and control the second slideshow
let slideIndex2 = 0;
function showSlides2() {
    let slides = document.getElementsByClassName("mySlides2");
    Array.from(slides).forEach((slide) => slide.style.display = "none");
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1; }
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    showSlides2();
});

// Enable smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
