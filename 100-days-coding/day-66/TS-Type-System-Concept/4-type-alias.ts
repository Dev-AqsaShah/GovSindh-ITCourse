type MyStrig = string;

let myName: MyStrig = "Glitcher";

type MyStrigOrNumber = string | number;

let myValue: MyStrigOrNumber = 10;

// another example 
type Employee = {
    name: string;
    age: number;
    email?: string;
};

const aqsa: Employee = {
    name: "aqsa",
    age: 20,
    email: "aqsashah000000@gmail.com",
};

const aqsa2: Employee = {
    name: "aqsa2",
    age: 23,
};

console.log(aqsa);
console.log(aqsa2);