const submenuOpenBtn = document.querySelector(".mobile-menu__submenu-icon");
const submenu = document.querySelector(".mobile-menu__submenu");
const navOpenBtn = document.querySelector(".mobile-menu__open-icon");
const navCloseBtn = document.querySelector(".mobile-menu__close-icon");
const nav = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const cartOpenBtn = document.querySelector(".nav-mobile__left-shopping-cart");
const cartCloseBtn = document.querySelector(".mobile-cart__close");
const cart = document.querySelector(".mobile-cart");
const openCartBtn = document.querySelector(".open-cart__btn");


submenuOpenBtn.addEventListener("click", (e) => {
    submenu.classList.toggle('submenu-active')
})


function closeNav() {
    nav.classList.remove('active-menu')
    submenu.classList.remove('submenu-active')
}
function closeCart() {
    cart.classList.remove("active-cart");
}
openCartBtn.addEventListener('click' , ()=> {
    cart.classList.add("active-cart");
    nav.classList.remove('active-menu')
})


navOpenBtn.addEventListener("click", () => {
    nav.classList.add('active-menu')
    cart.classList.remove("active-cart");
})
cartOpenBtn.addEventListener("click", () => {
    cart.classList.add("active-cart");
    nav.classList.remove('active-menu')
})

navCloseBtn.addEventListener("click", closeNav);
cartCloseBtn.addEventListener("click", closeCart);




// ================ Slider ===================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});