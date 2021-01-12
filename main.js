// Hamburger styles

const menuBtn = document.querySelector(".nav__square");

let menuOpen = false; 

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

// Cart menu

const cartBtn = document.querySelector(".fa-shopping-cart");

const cartIcon = document.querySelector(".cartIcon");

const cartMenu = document.querySelector(".cart");

const remove = document.getElementsByClassName("remove");

const overlay = document.querySelector(".overlay");

const update = document.querySelector(".update");

const addToCartButtons = document.getElementsByClassName("card__text--button");

cartBtn.addEventListener("click", () => {
    cartMenu.classList.add("cart--open");
    overlay.classList.add("overlay--open");
    cartIcon.classList.add("cartIcon--open");  
})

overlay.addEventListener("click", () => {
    cartMenu.classList.remove("cart--open");
    overlay.classList.remove("overlay--open");
    cartIcon.classList.remove("cartIcon--open");
})

// Looping over the remove buttons and adding a click event to each
for (var i = 0; i < remove.length; i++) {
    var buttonOne = remove[i];
    buttonOne.addEventListener("click", function(event) {
        console.log("Clicked.");
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    })
}

// Update cart total function
function updateCartTotal() {
    var cartItemsContainer = document.getElementsByClassName("cart__list")[0];
    var cartRows = cartItemsContainer.getElementsByClassName("cart__list--row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart__list--itemPrice")[0];
        var quantityElement = cartRow.getElementsByClassName("cart__list--itemQuantity")[0];

        var originalPriceElement = cartRow.getElementsByClassName("ogPrice")[0];
        var originalPrice = parseFloat( originalPriceElement.innerText.replace("£", "") )

        var price = parseFloat( priceElement.innerText.replace("£", "") );
        var quantity = quantityElement.value;
        var newPrice = originalPrice * quantity;
        priceElement.innerHTML = "£" + newPrice.toFixed(2);
        total = total + (originalPrice * quantity);
    }
    document.querySelector(".cart__list--total").innerText = "Total: £" + total.toFixed(2);
}

update.addEventListener("click", function(){
    var cartItemsContainer = document.getElementsByClassName("cart__list")[0];
    var cartRows = cartItemsContainer.getElementsByClassName("cart__list--row");
    var total = 0;
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart__list--itemPrice")[0];
        var quantityElement = cartRow.getElementsByClassName("cart__list--itemQuantity")[0];

        var originalPriceElement = cartRow.getElementsByClassName("ogPrice")[0];
        var originalPrice = parseFloat( originalPriceElement.innerText.replace("£", "") )

        var price = parseFloat( priceElement.innerText.replace("£", "") );
        var quantity = quantityElement.value;
        var newPrice = originalPrice * quantity;
        priceElement.innerHTML = "£" + newPrice.toFixed(2);
        total = total + (originalPrice * quantity);
    }
    document.querySelector(".cart__list--total").innerText = "Total: £" + total.toFixed(2);
})

// Looping over the add to cart buttons and adding a click event to each
for(var i = 0; i < addToCartButtons.length; i++){  
    var button = addToCartButtons[i];
    button.addEventListener("click", function(event){
        var buttonTwo = event.target;
        var shopItem = buttonTwo.parentElement;
        var title = shopItem.getElementsByClassName("card__text--header")[0].innerText;
        var price = shopItem.getElementsByClassName("card__text--item")[0].innerText;
        console.log(title);
        console.log(price);
        addItemToCart(title, price);
    })        
}

// Function to add items to the cart
function addItemToCart(title, price){
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart__list--row");
    var cartItems = document.getElementsByClassName("cart__list")[0];
    var cartItemNames = document.getElementsByClassName("cart__list--itemName");
    for(var i = 0; i < cartItemNames.length; i++){
        var itemTitle = cartItemNames[i].innerText.slice(0, -2);
        if(itemTitle === title){
            return; // The return keyword exits the function entirely.
        }
    }; 
    var cartRowContents = `     
            <li class="cart__list--item">
                <p class="cart__list--itemName">${title} |</p>
                <input class="cart__list--itemQuantity" type="number" value="1" min="1" max="10">
                <span class="cart__list--itemPrice">${price}</span>
                <button class="remove">Remove</button> 
                <span class="ogPrice">${price}</span>
            </li>
        `; 
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    // console.log(cartRow);
    var cartRowOne = cartRow.getElementsByClassName("remove")[0];
    console.log(cartRowOne);
    cartRowOne.addEventListener("click", function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    })
    updateCartTotal();
    // Add an animation to the cart logo. 
}


// for (var i = 0; i < remove.length; i++) {
//     var buttonOne = remove[i];
//     console.log(buttonOne); // Something isn't working here. 
//     buttonOne.addEventListener("click", function(event) {
//         console.log("Clicked."); // Return to this issue in a mo.
//         var buttonClicked = event.target;
//         buttonClicked.parentElement.parentElement.remove();
//         // Replace this code later.
//         // Why does this run only on the second click and not the first?
//     })
// }





















// Form validation

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

// const button = document.getElementById("button");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     checkInputs();
// });

function checkInputs() {
    // Get the values from the inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim(); 

    if (emailValue === "") {
        // Show error message
        // Add error class
        setErrorFor(email, "Insert a valid email");      
    } else {
        // Add success class
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Add error message inside small
    small.innerText = message;

    // Add error class
    formControl.className = "form__group error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form__group success"
};
