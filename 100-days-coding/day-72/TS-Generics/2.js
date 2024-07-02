// GENERICS MULTIPLE TYPES
// generic function 'returnTypeEx'
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
console.log(returnTypeEx("Elzero")); // Returns: "Elzero" (string)
// arrow function with Generics `returnTypeArrowSyntax`
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100)); // returns 100 (number)
console.log(returnTypeArrowSyntax("Elzero")); // returns: "Elzero" (string)
// generic function testType
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
// returns: "The value is 100 and type in number "
console.log(testType('Elzero'));
// returns: " the value is Elzero and type  is string"
// generic function 'multipleTypes'
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second value ").concat(valueTwo);
}
console.log(multipleTypes("Osman", 100));
// returns: the first value in osman and second value 100
console.log(multipleTypes("Elzero", true));
// returns the first value is elzero and second value true
