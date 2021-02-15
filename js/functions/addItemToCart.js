import updateCartTotal from "./updateCartTotal.js";

function addItemToCart(event){
    const addToCartButtons = document.getElementsByClassName("card__text--button");
    
    // Updating the button text 
    const buttonTwo = event.target;
    buttonTwo.innerText = "Added!";

    // Getting the item name and price
    const shopItem = buttonTwo.parentElement;
    const title = shopItem.getElementsByClassName("card__text--header")[0].innerText;
    const price = shopItem.getElementsByClassName("card__text--item")[0].innerText;

    // Adding the item to the cart
    const cartRow = document.createElement("div");
    cartRow.classList.add("cart__list--row");
    const cartItems = document.getElementsByClassName("cart__list")[0];
    const cartItemNames = document.getElementsByClassName("cart__list--itemName");
    for(let i = 0; i < cartItemNames.length; i++){
        let itemTitle = cartItemNames[i].innerText.slice(0, -2);
        if(itemTitle === title){
            return; // todo Before we exit the function, could we remove styles from the button?
        }
    }; 
    let cartRowContents = `     
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

    // Adding listeners to the remove buttons
    const cartRowRemove = cartRow.getElementsByClassName("remove")[0];
    cartRowRemove.addEventListener("click", function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        for (var i = 0; i < addToCartButtons.length; i++) {
            let clickedRemove = buttonClicked.parentNode.innerText;
            let removeTitle = clickedRemove.substr(0, clickedRemove.indexOf(" |"));
            let cleanTitle = removeTitle.trim();
            const itemTitle = document.getElementsByClassName("card__text--header");
            for (var i = 0; i < itemTitle.length; i++) {
                const itemHeader = itemTitle[i];
                let itemTop = itemHeader.innerText;
                if (itemTop == cleanTitle) {
                    itemHeader.parentElement.lastElementChild.innerText = "Add to cart"
                    // The above line will break if the button is no longer the last child. 
                } 
            }
        }
        updateCartTotal(); 
    })
    updateCartTotal();  
}

export default addItemToCart;