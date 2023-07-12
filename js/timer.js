var counterElement = document.getElementById("counter")
var interval = 1000
var timer
var count = 0

reset()

function reset() {
    count = 0
    counterElement.innerHTML = count
}

function start() {
    clearInterval(timer)
    timer = setInterval(() => {
        count++
        counterElement.innerHTML = count
    }, interval);
}