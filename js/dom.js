function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//コンテンツ取得
var priceElement = document.getElementById("price")
var price = priceElement.innerText
console.log(price)

//コンテンツ更新
var messageElement = document.getElementById("message")
// messageElement.innerText = "<p>いらっしゃい</p>"
messageElement.innerHTML = "<p>いらっしゃい</p>"

//タイトル「サイコロ」を表示
var titleElement = document.getElementById("title")
titleElement.innerHTML = "サイコロ"

//サイコロの目をランダムで表示
var number = getRandomInt(1, 6)
console.log(number)
var resultElement = document.getElementById("result")
resultElement.innerHTML = number
