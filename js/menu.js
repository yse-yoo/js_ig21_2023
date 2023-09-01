console.log(this)

const messageElement = document.getElementById('message')
this.name = "Bob"

function sayFunction(element) {
    console.log(element)
    messageElement.innerHTML = element.name
}