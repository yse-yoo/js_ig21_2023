var rarities = [
    { type: "N", name: "Normal", probability: 70 },
    { type: "R", name: "Rare", probability: 20 },
    { type: "SR", name: "Super Rare", probability: 6 },
    { type: "SSR", name: "Super Special Rare", probability: 3 },
    { type: "LR", name: "Legend", probability: 1 },
];

function getLotteryResult() {
    //0-1の小数をランダムで作成し、100をかける
    var randomNumber = Math.random() * 100; // 0から100の範囲のランダムな数値を生成
    var cumulativeProbability = 0;

    for (const rarity of rarities) {
        // 0 -> 70 -> 90 -> 96 -> 99 -> 100
        cumulativeProbability += rarity.probability;
        if (randomNumber < cumulativeProbability) {
            return rarity;
        }
    }
}

function displayLotteryResult() {
    var lotteryResultElement = document.getElementById("lotteryResult");

    // くじびき結果を取得
    var result = getLotteryResult();

    // くじびき結果を表示
    var html = "<p>Type: " + result.type + "</p>";
    html += "<p>Name: " + result.name + "</p>";
    lotteryResultElement.innerHTML = html;
}

// ページが読み込まれた時にくじびき結果を表示
window.onload = displayLotteryResult;