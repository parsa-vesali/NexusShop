// Selecting elements
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

// Event listener for submenu toggle
submenuOpenBtn.addEventListener("click", (e) => {
    submenu.classList.toggle('submenu-active')
});

// Function to close navigation and submenu
function closeNav() {
    nav.classList.remove('active-menu');
    submenu.classList.remove('submenu-active');
    overlay.classList.remove('overlay-active');
}

// Function to close the cart
function closeCart() {
    cart.classList.remove("active-cart");
    overlay.classList.remove('overlay-active');
}

// Event listener for opening the cart
openCartBtn.addEventListener('click', () => {
    cart.classList.add("active-cart");
    nav.classList.remove('active-menu');
});

// Event listener for opening the navigation
navOpenBtn.addEventListener("click", () => {
    nav.classList.add('active-menu');
    cart.classList.remove("active-cart");
    overlay.classList.add('overlay-active');
});

// Event listener for opening the cart
cartOpenBtn.addEventListener("click", () => {
    cart.classList.add("active-cart");
    nav.classList.remove('active-menu');
    overlay.classList.add('overlay-active');
});

// Event listener for closing the navigation
navCloseBtn.addEventListener("click", closeNav);

// Event listener for closing the cart
cartCloseBtn.addEventListener("click", closeCart);

// Event listener for overlay click to close navigation and cart
overlay.addEventListener('click', overlayClose);

// Function to close navigation and cart on overlay click
function overlayClose() {
    closeNav();
    closeCart();
}





// ================ Slider ===================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// ================ AOS ===================
AOS.init();