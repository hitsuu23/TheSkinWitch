// Initialize and control the slideshow
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
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}
document.addEventListener("DOMContentLoaded", showSlides);

// Enable smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
