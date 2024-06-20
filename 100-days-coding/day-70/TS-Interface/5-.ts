// INTERFACE VS. TYPE ALIASES

// declaration Syntax:

// Interface 
interface PersonExInterface {
    name: string;
    age: number;
}

// type
type PersonExType = {
    name: string;
    age: number;
};

// Extending and implementing 

// interface
interface AnimalExInterface {
    type: string;
}

interface Dog extends AnimalExInterface {
    bark(): void;
}

class Labrador implements Dog {
    type: string = "dog";
    bark() {
        console.log("Woof!");
        
    }
}

// type

type AnimalExType = {
    type: string;
};

type Monkey = AnimalExType & {
    bark(): void;
};

const Labrador1: Monkey = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};

// compatibility
interface Car {
    brand: string;
}

interface Car {
    model: string;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
};