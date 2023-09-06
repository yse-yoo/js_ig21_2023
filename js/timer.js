var counterElement = document.getElementById("counter")
var interval = 1000 //1sec
var timer
var count = 0

reset()

function reset() {
    count = 0
    counterElement.innerHTML = count
}

function start() {
    clearInterval(timer)
    timer = setInterval(function() {
        count++
        counterElement.innerHTML = count
    }, interval);
}

function stop() {
    clearInterval(timer)
}