function divideAndRemainder(dividend: number, divisor: number): {quotient: number; reminder: number} {
    let quotient = Math.floor(dividend / divisor);
    let reminder = dividend % divisor;
    return { quotient, reminder};
} 

console.log(divideAndRemainder(10,3)); 