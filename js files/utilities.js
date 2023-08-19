let totalPrice = 0;
let discount = 0;
let total = 0;

function handleClick(data) {

    // Cart Total Price Calculation
    const productPriceString = data.parentNode.children[0].children[1].children[2].children[0].innerText;
    const productPrice = parseFloat(productPriceString);
    totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
    const newTotalPrice = document.getElementById("cart-total-price");
    newTotalPrice.innerText = totalPrice.toFixed(2);


    // Item Name added to cart
    const selectedItemCard = document.getElementById("selected-items")
    const productName = data.parentNode.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = productName;
    selectedItemCard.appendChild(li);




    // cart total 
    const cartTotalString = document.getElementById("cart-total");
    const cartTotal = parseFloat(totalPrice - cartDiscount);
    cartTotalString.innerText = cartTotal.toFixed(2);

}

function couponClick(apply) {
    const couponCode = document.getElementById("coupon-input");
    const code = couponCode.value;
    couponCode.value = "";

    if (code === "SELL200") {
        const cartDiscountString = document.getElementById("cart-discount");
        const cartDiscount = parseFloat((totalPrice * 20) / 100);
        cartDiscountString.innerText = cartDiscount.toFixed(2);
    }
    else {
        alert("Invalid Coupon Code!!")
    }
    if (totalPrice < 200) {
        const inputElement = document.getElementById("couponPart");
        inputElement.disabled = true;

    }
}