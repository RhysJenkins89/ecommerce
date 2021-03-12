import updateCartIconNum from "./updateCartIconNum.js";

function updateCartTotal() {
    const cartRows = document.getElementsByClassName("cart__row");

    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName("cart__item-price")[0];
        const quantityElement = cartRow.getElementsByClassName("cart__item-quantity")[0];
        const originalPriceElement = cartRow.querySelector(".original-price");
        const originalPrice = parseFloat( originalPriceElement.innerText.replace("£", "") );
        const quantity = parseInt(quantityElement.innerHTML);
        const newPrice = originalPrice * quantity;
        priceElement.innerHTML = "£" + newPrice.toFixed(2);
        total = total + (originalPrice * quantity);
    }
    document.querySelector(".cart__total").innerText = "Total: £" + total.toFixed(2);

    // updateCartIconNum();
}

export default updateCartTotal;