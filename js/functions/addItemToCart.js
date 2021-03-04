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

    // Removing the hover styles once the item is added
    event.target.classList.remove("card__text--button");
    event.target.classList.add("card__text--buttonNoHover");

    for(let i = 0; i < cartItemNames.length; i++){
        let itemTitle = cartItemNames[i].innerText;
        if(itemTitle === title){
            return;
        }
    }; 
    let cartRowContents = `     
            <li class="cart__list--item">
                <p class="cart__list--itemName">${title}</p>
                <p class="cart__list--itemQuantity">1</p>
                <button class="cart__list--upButton">Up</button>
                <button class="cart__list--downButton">Down</button>
                <span class="cart__list--itemPrice">${price}</span>
                <button class="remove cart__list--itemButton">Remove</button> 
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
        let clickedRemove = buttonClicked.parentNode.firstElementChild.innerText;
        const itemTitle = document.getElementsByClassName("card__text--header");
        for (var i = 0; i < itemTitle.length; i++) {
            const itemHeader = itemTitle[i];
            let itemTop = itemHeader.innerText;
            if (itemTop == clickedRemove) {
                itemHeader.parentElement.lastElementChild.innerText = "Add to cart"
                console.log(itemHeader.parentElement.lastElementChild)
                itemHeader.parentElement.lastElementChild.classList.remove("card__text--buttonNoHover"); 
                itemHeader.parentElement.lastElementChild.classList.add("card__text--button"); 
            } 
        }
        updateCartTotal(); 
    })

    // event.target.classList.add("card__text--button");
    // event.target.classList.remove("card__text--buttonNoHover");

    // Adding listeners to the up buttons
    const upButton = cartRow.getElementsByClassName("cart__list--upButton")[0];
    upButton.addEventListener("click", (event) => {
        let newButton = event.target;
        let num = parseInt(newButton.parentElement.children.item(1).innerText);
        if (num == 10) {
            return;
        }
        num++;
        newButton.parentElement.children.item(1).innerText = num;
    })

    // Adding listeners to the down buttons 
    const downButton = cartRow.getElementsByClassName("cart__list--downButton")[0];
    downButton.addEventListener("click", (event) => {
        let newButton = event.target;
        let num = parseInt(newButton.parentElement.children.item(1).innerText);
        if (num == 1) {
            return;
        } 
        num--;
        newButton.parentElement.children.item(1).innerText = num;
    })
    
    updateCartTotal();  
}

export default addItemToCart;