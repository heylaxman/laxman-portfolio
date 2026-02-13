// Simple JS for fade-in scroll effect
window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const windowBottom = window.innerHeight + window.scrollY;

    fadeElements.forEach(el => {
        const elementTop = el.offsetTop + el.offsetHeight / 4;
        if (windowBottom > elementTop) {
            el.style.opacity = 1;
        }
    });
});

console.log("Laxman Portfolio Loaded");
