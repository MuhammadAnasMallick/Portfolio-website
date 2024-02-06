ScrollReveal({
    // reset: true,
    distance: '100px',
    duration: 2000,
    delay: 300
});
ScrollReveal().reveal('.firstsection', { origin: 'top' });
ScrollReveal().reveal('.secondsection', { origin: 'left' });
ScrollReveal().reveal('.thirdsection', { origin: 'right' });
ScrollReveal().reveal('.portfolio', { origin: 'left' });
ScrollReveal().reveal('.contant', { origin: 'bottom' });

// mix it up portfolio section //

var mixer = mixitup('.portfolio-gallery');

// scroll to top //
const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 150) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
};
refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});