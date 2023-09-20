var h2 = document.querySelector('h2')
console.log(h2)

// var h2 = document.getElementsByTagName('h2')
var h2 = document.querySelectorAll('h2')
console.log(h2[0])
console.log(h2[1])

// var cityTitle = document.getElementById('city-title')
var cityTitle = document.querySelector('#city-title')
console.log(cityTitle)

var cities = document.getElementsByClassName('city')
console.log(cities)
var cities = document.querySelectorAll('.city')
console.log(cities)

for (const city of cities) {
   console.log(city.innerHTML) 
}

var items = document.querySelectorAll('ul.menus > li')
console.log(items)