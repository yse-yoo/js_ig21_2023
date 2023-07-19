//Array
var users = []

function regist() {
    console.log("Regist!!!")
    //Object
    var user = {}
    user.name = document.getElementById('user_name').value
    user.email = document.getElementById('email').value
    user.password = document.getElementById('password').value
    console.log(user)

    users.push(user)
    console.log(users)
}

