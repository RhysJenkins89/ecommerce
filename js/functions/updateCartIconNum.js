function updateCartIconNum() {
    let numArray = document.getElementsByClassName("cart__list--itemQuantity");
    let totalItems = 0;
    for (let i = 0; i < numArray.length; i++) {
        let item = numArray[i];
        let itemNum = parseInt(item.innerText);
        totalItems += itemNum; // this is the same as totalItems = totalItems + itemNum
    }
    document.getElementsByClassName("nav__list--num")[0].innerText = totalItems;
    
    // Displaying the number on the icon
    const newCon = document.getElementsByClassName("nav__list--num")[0];
    newCon.classList.add("nav__list--numVisible");
}

export default updateCartIconNum;