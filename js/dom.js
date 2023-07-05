//コンテンツ取得
var priceElement = document.getElementById("price")
var price = priceElement.innerText
console.log(price)

//コンテンツ更新
var messageElement = document.getElementById("message")
// messageElement.innerText = "<p>いらっしゃい</p>"
messageElement.innerHTML = "<p>いらっしゃい</p>"