console.log(this)

const messageElement = document.getElementById('message')
this.name = "John"

function sayFunction(element) {
    messageElement.innerHTML = element.name
}