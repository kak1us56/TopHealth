// Go-to
$('.go-to').click(function(e) {
    e.preventDefault();
    const link = this;
    $([document.documentElement, document.body]).animate({
        scrollTop: $(link.hash).offset().top
    }, 1200);
});


// Burger
const headerLogo = document.querySelector('#headerLogo')
const body = document.querySelector('body');
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');
const item3 = document.querySelector('#item3');

function burgerClose() {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('active');
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
})

headerLogo.addEventListener('click', burgerClose);
item1.addEventListener('click', burgerClose);
item2.addEventListener('click', burgerClose);
item3.addEventListener('click', burgerClose);