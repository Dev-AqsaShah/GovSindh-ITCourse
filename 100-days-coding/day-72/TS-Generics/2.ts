// GENERICS MULTIPLE TYPES

// generic function 'returnTypeEx'

function returnTypeEx<T>(val: T): T {
    return val;
}

console.log(returnTypeEx<number>(100)); // Returns: 100 (number)
console.log(returnTypeEx<string>("Elzero")); // Returns: "Elzero" (string)

// arrow function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100)); // returns 100 (number)
console.log(returnTypeArrowSyntax<string>("Elzero")); // returns: "Elzero" (string)

// generic function testType

function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
// returns: "The value is 100 and type in number "

console.log(testType<string>('Elzero'));
// returns: " the value is Elzero and type  is string"

// generic function 'multipleTypes'
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osman", 100));
// returns: the first value in osman and second value 100

console.log(multipleTypes<string, boolean>("Elzero", true));
// returns the first value is elzero and second value true