// Variables
const cartBtn = document.querySelector(".fa-shopping-cart");
const cartIcon = document.querySelector(".cartIcon");
const cartMenu = document.querySelector(".cart");
const remove = document.getElementsByClassName("remove");
const overlay = document.querySelector(".overlay");
const update = document.querySelector(".update");
const addToCartButtons = document.getElementsByClassName("card__text--button");
const menuBtn = document.querySelector(".nav__square");
let menuOpen = false; 

// Imports
import updateCartTotal from "./functions/updateCartTotal.js";
import addItemToCart from "./functions/addItemToCart.js";

// Cart icon
cartBtn.addEventListener("click", () => {
    cartMenu.classList.add("cart--open");
    overlay.classList.add("overlay--open");
    cartIcon.classList.add("cartIcon--open");  
})

// Overlay
overlay.addEventListener("click", () => {
    cartMenu.classList.remove("cart--open");
    overlay.classList.remove("overlay--open");
    cartIcon.classList.remove("cartIcon--open");
})

// Update button
update.addEventListener("click", updateCartTotal);

// Add to cart buttons
for(let i = 0; i < addToCartButtons.length; i++){  
    const button = addToCartButtons[i];
    button.addEventListener("click", addItemToCart)        
}

// Hamburger
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});