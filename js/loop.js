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
processArray(numbers, function (value) {
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
drinks.forEach(function (drink) {
    console.log(drink)
});

var items = [
    { id: 1, name: "コーヒー", price: 300 },
    { id: 2, name: "紅茶", price: 350 },
    { id: 3, name: "ほうじ茶", price: 300 },
]

items.forEach(item => {
    //リテラル式： `（バッククォート）で囲む
    var message = `${item.name}の価格は${item.price}円です`
    console.log(message)
});

// ` :バッククォート
// ' :シングルクォート
// " :ダブルクォート

// map （配列を繰り返して新しい配列を作成）
console.log("--- map ---")
var newItems = items.map(function (item) {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        withoutTaxPrice: Math.floor(item.price / 1.1),
    }
})
console.log(newItems)

// filter
console.log("--- filter ---")
var newItems = items.filter((item) => item.price > 300)
console.log(newItems)

console.log("--- for-of ---")
var newItems = []
for (var item of items) {
    if (item.price > 300) {
        newItems.push(item)
    }
}
console.log(newItems)


// reduce
console.log("--- reduce ---")
var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];
var totalProbability = rarities.reduce(function (sum, item) {
    return sum + item.probability;
}, 0);
console.log(totalProbability)