var users = [
    { id: 1, name: 'User1', email: 'user1@example.com', password: 'xxxxxx' },
    { id: 2, name: 'User2', email: 'user2@example.com', password: 'xxxxxx' },
    { id: 3, name: 'User3', email: 'user3@example.com', password: 'xxxxxx' },
];

function createTableRow(user) {
    const row = document.createElement("tr");
    const userData = { ...user }; // 元のオブジェクトを変更しないようにコピーを作成

    // パスワードを削除
    delete userData.password;

    //配列を繰り返す
    for (var key in user) {
        const cell = document.createElement("td");
        cell.textContent = user[key];
        row.appendChild(cell);
    }
    // Object.values(userData).forEach(value => {
    //     const cell = document.createElement("td");
    //     cell.textContent = value;
    //     row.appendChild(cell);
    // });
    return row;
}

function createTable() {
    const tableBody = document.getElementById("user_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // テーブルの内容を一度クリア

    // 初期データの表示
    users.forEach(user => {
        tableBody.appendChild(createTableRow(user));
    });
}

function regist() {
    // フォームの値を取得
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // 入力された値を連想配列（オブジェクト）として追加
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password
    };
    users.push(newUser);

    // フォームをリセット
    document.getElementById("user_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // テーブルを更新
    createTable();
}

// 初期テーブルを表示
createTable();