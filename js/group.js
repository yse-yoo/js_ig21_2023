var cities = document.getElementsByClassName("city")
console.log(cities)

for (const index in cities) {
    console.log(cities[index].innerHTML)
}