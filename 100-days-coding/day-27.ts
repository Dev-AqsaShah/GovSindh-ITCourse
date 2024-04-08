//Question num-79 Creating and accessing object properties.

let car = {
    make: "Toyota",
    model: "corolla",
    year: 2020
};

console.log(car.model);

// question num-80 updating object properties 

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
    

};

car.color = "blue"; 

car.year = 2021

console.log(car)

// question num-81 iterating over object properties.

function logObjectProperties(obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

logObjectProperties({make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
