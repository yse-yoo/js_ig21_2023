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

    //モンスター名設定
    p.innerHTML = name
    //画像ファイル設定
    img.src = "images/" + imageName

    //divに追加
    div.appendChild(p)
    div.appendChild(img)
    //class=col-4
    // div.setAttribute("class", "col-4")
    div.className = "col-3"
    // div.classList.add("col-4")
    // div.classList.add("monster")

    //id=monster-listに追加
    monsterList.appendChild(div)
}

var monsterList = document.getElementById("monster-list")
createMonsterElement("モンスタ1", "monster_006.png")
createMonsterElement("モンスタ2", "monster_022.png")
createMonsterElement("モンスタ3", "monster_040.png")

createMonsterElement("モンスタ1", "monster_006.png")
createMonsterElement("モンスタ2", "monster_022.png")
createMonsterElement("モンスタ3", "monster_040.png")

createMonsterElement("モンスタ1", "monster_006.png")
createMonsterElement("モンスタ2", "monster_022.png")
createMonsterElement("モンスタ3", "monster_040.png")