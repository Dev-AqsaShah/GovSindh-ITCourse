/*************
 *UNION TYPES*
 *************/
var myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
// Uncommenting the line below would result in a typescript error
// myVar = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
