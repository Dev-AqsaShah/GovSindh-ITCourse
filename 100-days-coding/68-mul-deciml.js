//this function multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    //multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
//trying it with 0.1 and 0.2 
console.log(multiplyDecimals(0.1, 0.2)); // shows 0.2
//after multiplying, we round to make the result easier to read.
