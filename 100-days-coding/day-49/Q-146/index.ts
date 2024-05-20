// this array of numbers will be filtered 
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// uses .filter() with a callback function to filter out numbers greater than 5
const filteredNunbers: number[] = numbers.filter((number) => number > 5);

console.log(filteredNunbers); // Outputs: [6, 7, 8, 9, 10]
//the callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.