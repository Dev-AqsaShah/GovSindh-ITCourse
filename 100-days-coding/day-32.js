// question num- 94
var words = ["Hello", "World", "TypeScript", "JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
// question num- 95
function filterGreaterThanTan(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTan);
//question num- 96
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
