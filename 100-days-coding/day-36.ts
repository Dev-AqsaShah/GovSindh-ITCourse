//question num-106

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(1900))


//question num-107
function isDivisibleByTwoAndThree(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
}

console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));

//question num-108
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}

console.log(areStringsEqualIgnoreCase("hello", "Hello"));
console.log(areStringsEqualIgnoreCase("world", "World"));