var cities = document.getElementsByClassName("city")
// HTML Collection
console.log(cities)

// HTML Collection では for-in は使わない
console.log('--- for in ---')
for (const index in cities) {
    console.log(cities[index].innerHTML)
}

console.log('--- for of ---')
for (const city of cities) {
    console.log(city.innerHTML)
}