import updateCartTotal from "./updateCartTotal.js";

function addItemToCart(event){

    // Showing the total amount
    const cartTotal = document.querySelector(".cart__total");
    cartTotal.classList.add("visible");
    
    // Updating the card button text and removing hover styles  
    const originalClick = event.target;
    originalClick.innerText = "Added!";
    originalClick.classList.remove("card__button");
    originalClick.classList.add("card__button--no-hover");

    // Getting the item name and price
    const gridItem = originalClick.parentElement;
    const title = gridItem.querySelector(".card__header").innerText;
    const price = gridItem.querySelector(".card__price").innerText;

    // Adding the item to the cart
    const cartRow = document.createElement("div");
    cartRow.classList.add("cart__row");
    const cartItems = document.getElementsByClassName("cart__top")[0];
    const cartItemNames = document.getElementsByClassName("cart__item-name");

    for (let i = 0; i < cartItemNames.length; i++) {
        let itemTitle = cartItemNames[i].innerText;
        if (itemTitle === title) return;
    }; 

    let cartRowContents = `     
            <li class="cart__item">
                <div class="row-container">
                    <p class="cart__item-name">${title}</p>
                    <button class="btn btn--quantity cart__up-button">+</button>
                    <button class="btn btn--quantity cart__down-button">-</button>
                    <p class="cart__item-quantity">1</p>
                </div>
                <div class="row-container row-container--bottom">
                    <span class="cart__item-price">${price}</span>
                    <button class="btn remove cart__item-button">Remove</button> 
                    <span class="original-price">${price}</span>
                </div>
            </li>
        `; 

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);

    // Adding listeners to the remove buttons
    const cartRowRemove = cartRow.getElementsByClassName("remove")[0];
    cartRowRemove.addEventListener("click", function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        let clickedRemove = buttonClicked.parentNode.parentNode.firstElementChild.firstElementChild.innerText;
        const itemTitle = document.getElementsByClassName("card__header");
        for (var i = 0; i < itemTitle.length; i++) {
            const itemHeader = itemTitle[i];
            let itemTop = itemHeader.innerText;
            if (itemTop == clickedRemove) {
                itemHeader.parentElement.lastElementChild.innerText = "Add to cart"
                itemHeader.parentElement.lastElementChild.classList.remove("card__button-no-hover"); 
                itemHeader.parentElement.lastElementChild.classList.add("card__button"); 
            } 
        }

        // Removing the total if nothing in cart
        const rowCheck = document.getElementsByClassName("cart__row");
        if (rowCheck.length == 0) cartTotal.classList.remove("visible"); 

        updateCartTotal(); 
    })

    // Adding listeners to the up buttons
    const upButton = cartRow.getElementsByClassName("cart__up-button")[0];
    upButton.addEventListener("click", (event) => {
        let newButton = event.target;
        let num = parseInt(newButton.parentElement.lastElementChild.innerText);
        if (num == 10) {
            return;
        }
        num++;
        newButton.parentElement.lastElementChild.innerText = num;
        updateCartTotal();
    })

    // Adding listeners to the down buttons 
    const downButton = cartRow.getElementsByClassName("cart__down-button")[0];
    downButton.addEventListener("click", (event) => {
        let newButton = event.target;
        let num = parseInt(newButton.parentElement.lastElementChild.innerText);
        if (num == 1) {
            return;
        } 
        num--;
        newButton.parentElement.lastElementChild.innerText = num;
        updateCartTotal();
    })
    
    updateCartTotal();  
}

export default addItemToCart;