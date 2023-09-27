const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const getCharacter = async (key) => {
    if (!key) return;
    var uri = API_BASE_URL + key
    const response = await fetch(uri)
    const data = await response.json()
    console.log(data)
    return data;
}

const characterHandler = async () => {
    const name = document.getElementById('name').value;
    var character = await getCharacter(name);
    console.log(character)
    // document.getElementById('city').value = results.address2 + results.address3
}