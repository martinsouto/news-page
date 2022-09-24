document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-main__menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newscards', {delay: 300});
ScrollReveal().reveal('.banner-one', {delay: 300});
ScrollReveal().reveal('.banner-two', {delay: 300});