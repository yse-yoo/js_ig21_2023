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
    // JSONデータ取得
    const json = xhr.responseText;
    console.log(json);
    // JSON -> Array & Object
    const persons = JSON.parse(json)
    console.log(persons)
    for (const person of persons) {
       console.log(person.name) 
    }
}
// 実行
xhr.send();


