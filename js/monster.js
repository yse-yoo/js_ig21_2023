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

// aリンク追加
var a = document.createElement("a")
a.href = "https://www.google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerHTML = monsterElement1.innerHTML
stage.appendChild(a)

// モンスターリスト
function createMonsterElement(name, imageName) {
    var div = document.createElement("div")    
    var p = document.createElement("p")    
    var img = document.createElement("img")    
}

var monsterList = document.getElementById("monster-list")