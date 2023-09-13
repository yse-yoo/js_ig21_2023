var cities = document.getElementsByClassName("city")
// HTML Collection
console.log(cities)

// HTML Collection では for-in は使わない
console.log('--- for in ---')
for (const index in cities) {
    console.log(cities[index].innerHTML)
}

// Array.from() で配列に変換
for (const index in Array.from(cities)) {
    console.log(cities[index].innerHTML)
}

console.log('--- for of ---')
for (const city of cities) {
    console.log(city.innerHTML)
}

console.log('--- forEach ---')
Array.from(cities).forEach(city => {
    console.log(city.innerHTML)
});
