// script.js
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.3 });

    ScrollReveal().reveal('.card', { duration: 1000, origin: 'bottom', distance: '50px' });
});
