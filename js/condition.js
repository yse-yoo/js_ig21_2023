var message = ""
var price = 200
var money = 500

if (price <= 0) {
   message = "価格が間違っています" 
} else if (money >= price) {
   message = "購入できます" 
} else {
   message = "お金がたりません" 
}
console.log(message)