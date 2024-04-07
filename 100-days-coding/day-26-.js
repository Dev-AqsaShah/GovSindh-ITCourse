// question num- 76 function parameters and return values
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 7));
//question number- 77 default parameters 
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("alice");
greetUser();
// question num- 78 function expressions vs. function declaration
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareExpression(4));
