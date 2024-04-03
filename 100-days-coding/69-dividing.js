function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var reminder = dividend % divisor;
    return { quotient: quotient, reminder: reminder };
}
console.log(divideAndRemainder(10, 3));
