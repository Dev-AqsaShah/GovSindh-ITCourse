// question num- 94

const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];

const lengths: number[] =  words.map(word => word.length);

console.log(lengths); 


// question num- 95

function filterGreaterThanTan(numbers: number[]): number[]{
    return numbers.filter(number => number > 10 );
}

const numbers : number [] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTan)

//question num- 96

function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers: number[] = [1,2,3,4,5];
console.log (calculateSum(numbers))