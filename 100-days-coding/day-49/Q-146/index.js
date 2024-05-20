// this array of numbers will be filtered 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// uses .filter() with a callback function to filter out numbers greater than 5
var filteredNunbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNunbers); // Outputs: [6, 7, 8, 9, 10]
//the callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
