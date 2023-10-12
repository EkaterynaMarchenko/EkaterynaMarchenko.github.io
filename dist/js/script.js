const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    scrollToPortfolioBtn = document.querySelector('.scrltoport'),
    scrollToPriceBtn = document.querySelector('.scrltoprice'),
    portfolio = document.querySelector('.title__section-subtitle'),
    price = document.querySelector('.price__img');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

scrollToPortfolioBtn.addEventListener('click', () => {
    portfolio.scrollIntoView({
        block: "start", 
        inline: "center",
        behavior: "smooth"
    });
});

scrollToPriceBtn.addEventListener('click', () => {
    price.scrollIntoView({
        block: "start", 
        inline: "center",
        behavior: "smooth"
    });
});


