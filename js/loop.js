const person = {
    name: "Alice",
    age: 30,
    occupation: "Enginner",
}

// for-in
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log(value)
    }
}