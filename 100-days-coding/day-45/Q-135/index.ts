const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};

const jsonString = JSON.stringify(person, null, 2);

console.log(jsonString);