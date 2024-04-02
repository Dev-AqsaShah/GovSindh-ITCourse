//this function adds a number and string that represents a number
function addNumberAndString(number1, numberString) {
    // converts the string to a number and adds to the first number
    return number1 + Number(numberString);
}
// trying it with 10 and "5" 
console.log(addNumberAndString(10, "5")); // shows 15
// the string "5" is turned into number and han added to 10.
