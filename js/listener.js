var calculateBtn = document.getElementById('calculate-btn')
// click event 登録
calculateBtn.addEventListener('click', function(event) {
    var price = document.getElementById('price').value   
    var quantity = document.getElementById('quantity').value   
    console.log(price, quantity)

    var totalPrice = price * quantity

    var message = totalPrice + "円"
    document.getElementById('result').innerHTML = message

    // JSをストップ
    event.preventDefault()
})