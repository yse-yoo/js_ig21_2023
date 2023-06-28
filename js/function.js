function calculateTotalPrice(price, amount) {
    var result = price * amount;
    return result;
}

var totalPrice = calculateTotalPrice(200, 5);
console.log(totalPrice);

// 無名関数（anonymous function）
const hello = function(name) {
    var message = name + "さん、こんにちは！";
    return message;
}

var message = hello("YSE");
console.log(message);