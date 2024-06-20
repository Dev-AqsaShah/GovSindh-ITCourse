// define an interface "person" with a method "great" 

interface PersonEx2 {
    name: string; 
    age: number;
    greet(message: string): void;
}

// create an object that adheres to the "person" interface

const Sarah: PersonEx2 = {
    name: "Sarah",
    age: 35,
    greet(message: string) {
        console.log(`${this.name} says: ${message}`);
    },
};

Sarah.greet("Hello, TypeScript");