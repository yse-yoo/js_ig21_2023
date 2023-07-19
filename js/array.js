var drinks = ["コーヒー", "紅茶", "ほうじ茶"]
console.log(drinks)

var selectDrink = drinks[1]
console.log(selectDrink)

// 個数
var count = drinks.length
console.log(count)

console.log("--- push() ---")
drinks.push("炭酸水")
console.log(drinks)

console.log("--- pop() ---")
drinks.pop()
console.log(drinks)

console.log("--- shift() ---")
drinks.shift()
console.log(drinks)

console.log("--- unshift() ---")
drinks.unshift("アイスコーヒー")
console.log(drinks)

console.log("--- splice() ---")
drinks.splice(1, 0, "オレンジジュース")
console.log(drinks)

console.log("--- splice() ---")
drinks.splice(2, 1)
console.log(drinks)