var calculateBtn = document.getElementById('calculate-btn')
// click event 登録
calculateBtn.addEventListener('click', function(event) {
    var price = document.getElementById('price').value   
    var quantity = document.getElementById('quantity').value   
    console.log(price, quantity)

    var message = "入力が間違ってます"
    //両方とも数値計算
    if (!isNaN(price) && !isNaN(quantity)) {
        var totalPrice = price * quantity
        message = totalPrice + "円"
    }
    document.getElementById('result').innerHTML = message

    // JSをストップ
    event.preventDefault()
})

// count up
var countBtn = document.getElementById('count-btn')
var count = 0
var countHandeler = function(event) {
    count++
    document.getElementById('count').innerHTML = count
}
countBtn.addEventListener('click', countHandeler)

// remove event
var removeBtn = document.getElementById('remove-btn')
removeBtn.addEventListener('click', function() {
    countBtn.removeEventListener('click', countHandeler)
})