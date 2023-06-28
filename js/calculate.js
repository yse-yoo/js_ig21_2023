console.log("--- 二項演算 ---");

var hp = 5;
hp = hp + 3;
console.log(hp);

hp = hp - 2;
console.log(hp);

hp = hp * 2;
console.log(hp);

hp = hp / 3;
console.log(hp);

console.log("--- 単項演算 ---");
hp = 5;
hp++;
console.log(hp);

hp = 5;
hp--;
console.log(hp);

console.log("--- 複合演算 ---");
hp = 5;
hp += 3;
hp -= 2;
hp *= 3;
hp /= 5;
console.log(hp);

console.log("--- 文字の連結 ---");
hp = 10;
var monsterName = "スライム";
var message = monsterName + "のHPは" + hp;
console.log(message);