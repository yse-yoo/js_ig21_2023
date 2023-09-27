// APIのURL生成
function getApiURL() {
    const currentURL = location.href;
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL + 'data/persons.json';
}
const API_URL = getApiURL();
console.log(API_URL);

// インスタンス生成
const xhr = new XMLHttpRequest();
//　APIに非同期通信(GET)
xhr.open("GET", API_URL, true)
// リクエスト後の処理
xhr.onload = function () {

}



