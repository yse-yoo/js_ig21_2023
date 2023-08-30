const person = {
    name: "Alice",
    age: 30,
    occupation: "Enginner",
}

// for-in
console.log("--- for-in ---")
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value)
    }
}

const drinks = ["コーヒー", "紅茶", "ほうじ茶"]

// for-of
console.log("--- for-of ---")
for (const value of drinks) {
   console.log(value) 
}

// fori
console.log("--- for ---")
for (var index = 0; index < drinks.length; index++) {
    const drink = drinks[index];
    console.log(drink);
}

//コールバック関数

function processArray(values, callback) {
    //イテレータブルなデータを繰り返し
    for (const value of values) {
        //コールバック関数に引数を渡して実行
        callback(value)
    }
}

const numbers = [1, 2, 3, 4, 5]

console.log("--- function ---")
function calculate(value) {
    var answer = value * 2 
    console.log(answer)
}
processArray(numbers, calculate)

// anonymous function
console.log("--- anonymous function ---")
processArray(numbers, function(value) {
    var answer = value * 3 
    console.log(answer)
})

// arrow function
console.log("--- arrow function ---")
processArray(numbers, (value) => {
    var answer = (value - 3) * 2 
    console.log(answer)
})

//forEach
console.log("--- forEach ---")
drinks.forEach((drink) => {
    console.log(drink) 
});