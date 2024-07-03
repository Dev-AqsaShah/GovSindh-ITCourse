// generics classes 

// generic class 'user'

class User<T = string> {
    constructor(public value: T) {}

    // Method that takes a message of type 'T' and displays it along with the value property 
    show(msg: T): void {
        console.log(`${msg} - ${this.value}`);
    }
}

// creating an instance of user with a  spesific type parameter (string)
let userOne = new User<string>("Elzero");
console.log(userOne.value); // output: "Elzero"
userOne.show("Message"); // output: "message - Elzero"

// creating an intstance of user with a type parameter that can be a number or a string
let userTwo = new User<number | string>(100);
console.log(userTwo.value); // output: 100
userTwo.show("Message"); // output: 'message - 100'