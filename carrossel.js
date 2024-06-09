const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

document.getElementById('seguinte').addEventListener('click', () => {
    index = (index + 1) % slide.length;
    updateSlide();
});

document.getElementById('anterior').addEventListener('click', () => {
    index = (index - 1 + slide.length) % slide.length;
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}