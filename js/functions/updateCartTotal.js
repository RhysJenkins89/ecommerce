import updateCartIconNum from "./updateCartIconNum.js";

function updateCartTotal() {
    const cartItemsContainer = document.getElementsByClassName("cart__list")[0];
    const cartRows = cartItemsContainer.getElementsByClassName("cart__list--row");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName("cart__list--itemPrice")[0];
        const quantityElement = cartRow.getElementsByClassName("cart__list--itemQuantity")[0];
        const originalPriceElement = cartRow.getElementsByClassName("ogPrice")[0];
        const originalPrice = parseFloat( originalPriceElement.innerText.replace("£", "") );
        const quantity = parseInt(quantityElement.innerHTML);
        const newPrice = originalPrice * quantity;
        priceElement.innerHTML = "£" + newPrice.toFixed(2);
        total = total + (originalPrice * quantity);
    }
    document.querySelector(".cart__list--total").innerText = "Total: £" + total.toFixed(2);

    updateCartIconNum();
}

export default updateCartTotal;