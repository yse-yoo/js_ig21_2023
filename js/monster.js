//parent（親要素）
var stage = document.getElementById("stage")

//child（子要素）
var monsterElement1 = document.createElement("p")
monsterElement1.innerHTML = "スライム"

//parent に追加
stage.appendChild(monsterElement1)

var monsterElement2 = document.createElement("p")
monsterElement2.innerHTML = "キメラ"
stage.appendChild(monsterElement2)

//childの削除
stage.removeChild(monsterElement1)