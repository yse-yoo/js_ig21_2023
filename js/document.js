const outputP = function (message) {
    var tag = "<p>" + message + "</p>"
    document.write(tag)
}

document.write("<h1>プロフィール</h1>")
document.write("<h2>名前</h2>")
document.write("<p>YSE</p>")
document.write("<h2>趣味</h2>")

outputP("旅行")
outputP("ゲーム")
outputP("スポーツ観戦")