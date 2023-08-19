let totalPrice = 0;
let discount = 0;
let total = 0;


// Purchasing Product and Adding to Cart
function handleClick(data) {

    // Item Name added to cart
    const selectedItemCard = document.getElementById("selected-items")
    const productName = data.parentNode.parentNode.children[0].innerText;
    const listItem = document.createElement("li");
    listItem.textContent = productName;
    selectedItemCard.appendChild(listItem);

    // Cart Total Price 
    const productPriceString = data.children[1].children[2].children[0].innerText;
    const productPrice = parseFloat(productPriceString);
    totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
    const newTotalPrice = document.getElementById("cart-total-price");
    newTotalPrice.innerText = totalPrice.toFixed(2);

    // Card Discount
    const cartDiscountString = document.getElementById("cart-discount");
    const cartBaseDiscount = parseFloat(cartDiscountString.innerText);

    // Cart Total 
    const cartTotalString = document.getElementById("cart-total");
    const cartTotal = parseFloat(totalPrice - cartBaseDiscount);
    cartTotalString.innerText = cartTotal.toFixed(2);

    // Button Enable Condition
    const purchaseButton = document.getElementById("purchaseButton")
    if (totalPrice > 0) {
        purchaseButton.disabled = false;
    }
    const couponButton = document.getElementById("couponButton")
    if (totalPrice > 200) {
        couponButton.disabled = false;
    }
}

// Coupon Apply and Calculation
function couponClick(apply) {
    const couponCode = document.getElementById("coupon-input");
    const code = couponCode.value;
    couponCode.value = "";

    if (code === "SELL200") {
        const cartDiscountString = document.getElementById("cart-discount");
        const cartDiscount = parseFloat((totalPrice * 20) / 100);
        cartDiscountString.innerText = cartDiscount.toFixed(2);
        const cartTotalString = document.getElementById("cart-total");
        const cartTotal = parseFloat(totalPrice - cartDiscount);
        cartTotalString.innerText = cartTotal.toFixed(2);
        return;
    }
    else {
        alert("Invalid Coupon Code!!")
    }
}

// Resetting 
function resetButton(reset) {
    totalPrice = 0;
    document.getElementById("cart-total").innerText = totalPrice.toFixed(2);
    document.getElementById("cart-discount").innerText = totalPrice.toFixed(2);
    document.getElementById("cart-total-price").innerText = totalPrice.toFixed(2);
    document.getElementById("selected-items").innerText = " ";
    // Button Disable Condition
    document.getElementById("purchaseButton").disabled = true;
    document.getElementById("couponButton").disabled = true;

}