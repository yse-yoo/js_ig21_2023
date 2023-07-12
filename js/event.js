function inputUserName() {
    console.log("Change!!!")
    // console.log(userNameElement)
    var userName = userNameElement.value
    console.log(userName)
    var message = userName + "さん、ようこそ"
    messageElement.innerHTML = message
}

var userNameElement = document.getElementById("user_name")
var messageElement = document.getElementById("message")


var itemNameElement = document.getElementById("item_name")
var priceElement = document.getElementById("price")
var quantityElement = document.getElementById("quantity")