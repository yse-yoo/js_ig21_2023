//Array
var users = []

function regist() {
    console.log("Regist!!!")
    //Object
    var user = {}
    user.id = users.length + 1
    user.name = document.getElementById('user_name').value
    user.email = document.getElementById('email').value
    user.password = document.getElementById('password').value
    // console.log(user)

    users.push(user)
    // console.log(users)

    //繰り返し処理
    for (const user of users) {
        console.log(user)
    }
}

