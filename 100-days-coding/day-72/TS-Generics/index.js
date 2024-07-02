// GENERICS INTRO 
// agneric function that returs the input  value as is 
function returnType(val) {
    return val;
}
// usage of the generic function with different types
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));
