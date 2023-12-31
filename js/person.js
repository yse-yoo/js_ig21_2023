// JavaScriptのオブジェクト
var person = {
    name: "John",
    age: 30,
    city: "NY"
}
console.log(person)

// Object -> JSON（テキストフォーマット）
var jsonString = JSON.stringify(person)
console.log(jsonString)
document.body.innerHTML = jsonString

// JSON -> Object
var newPerson = JSON.parse(jsonString)
console.log(newPerson.name)
console.log(newPerson.age)
console.log(newPerson.city)