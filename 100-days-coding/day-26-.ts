// question num- 76 function parameters and return values

function addNumbers(num1: number, num2: number) : number {
    return num1 + num2;
}

console.log(addNumbers(5, 7)); 


//question number- 77 default parameters 

function greetUser (name: string = "anonymous") {
    console.log(`Hello, ${name}!`);
}

greetUser("alice")

greetUser();


// question num- 78 function expressions vs. function declaration

function squareDeclaration(number: number): number {
    return number * number;
} 

const squareExpression = function(number: number): number {
   return number * number ;
};
console.log(squareExpression(4));