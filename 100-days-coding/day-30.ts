// question num-88 rounding to the nearest integer

function roundToNearestInteger(num: number): number {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.7));
console.log(roundToNearestInteger(4.4));


// question num-89 converting strings to numbers.

function convertStringToNumber(str: string): number {
    return parseFloat(str);
}

console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("98"));

//question num-90 checking if a value is nan.

function isValueNaN(value: any): boolean {
    return isNaN(value);
}

console.log(isValueNaN("hello"));

console.log(isValueNaN(123));
