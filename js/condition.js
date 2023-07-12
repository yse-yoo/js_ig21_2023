// If
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

// Switch
var weekday = "水"
var garbage = ""

switch (weekday) {
    case "月":
    case "金":
        garbage = "燃えるゴミ"
        break;
    case "水":
        garbage = "燃えないゴミ"
        break;
    default:
        garbage = "回収なし"
        break;
}
document.getElementById("garbage").innerHTML = garbage