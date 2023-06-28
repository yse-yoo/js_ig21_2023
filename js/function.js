function calculateTotalPrice(price, amount) {
    var result = price * amount;
    return result;
}

var totalPrice = calculateTotalPrice(200, 5);
console.log(totalPrice);