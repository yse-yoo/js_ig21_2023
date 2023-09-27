// APIのURL生成
function getApiURL() {
    const currentURL = location.href;
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL + 'data/prefectures.json';
}
const API_URL = getApiURL();
console.log(API_URL);

// 都道府県データ取得（非同期）
const loadPrefectures = async () => {
    // Fetch API
    // サーバーにアクセスして、レスポンス取得（非同期）
    const response = await fetch(API_URL)
    console.log(response)
    // JSON -> Array & Object
    const prefectures = await response.json()
    console.log(prefectures)

    //プルダウン作成
    prefectures.forEach((prefecture) => {
        var option = document.createElement('option')
        option.value = prefecture.code
        option.innerHTML = prefecture.name
        document.getElementById('prefecture').appendChild(option)
    })
}

// 都道府県プルダウン生成メイン処理
loadPrefectures();