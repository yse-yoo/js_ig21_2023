function inputUserName() {
    console.log("Change!!!")
    // console.log(userNameElement)
    var userName = userNameElement.value
    console.log(userName)
    var message = userName + "さん、ようこそ"
    messageElement.innerHTML = message
}

function order() {
    console.log("Order!!!")
    var itemName = itemNameElement.innerHTML
    var price = priceElement.innerHTML
    var quantity = quantityElement.value
    console.log(itemName, price, quantity)

    // ' = シングルクォート
    // " = ダブルクォート
    // ` = バッククォート
    // var message = `${itemName}を${quantity}つでよいですか？`
    var message = itemName + "を" + quantity + "つでよいですか？"
    messageElement.innerHTML = message
}

var userNameElement = document.getElementById("user_name")
var messageElement = document.getElementById("message")

var itemNameElement = document.getElementById("item_name")
var priceElement = document.getElementById("price")
var quantityElement = document.getElementById("quantity")