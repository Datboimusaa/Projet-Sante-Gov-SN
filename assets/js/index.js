// Carousel active states 
const carousel = document.querySelector('#carouselExampleCaptions');
const dots = document.querySelectorAll('.carousel-dot');

carousel.addEventListener('slid.bs.carousel', e => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[e.to].classList.add('active');
});
