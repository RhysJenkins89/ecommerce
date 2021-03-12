// Variables
const cartBtn = document.querySelector(".fa-shopping-cart");
const cartIcon = document.querySelector(".cartIcon");
const cartMenu = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const addToCartButtons = document.getElementsByClassName("card__button");
const menuBtn = document.querySelector(".square");
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