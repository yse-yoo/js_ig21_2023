var calculateBtn = document.getElementById('calculate-btn')
// click event 登録
calculateBtn.addEventListener('click', function(event) {
    var price = document.getElementById('price').value   
    var quantity = document.getElementById('quantity').value   
    console.log(price, quantity)

    // JSをストップ
    event.preventDefault()
})