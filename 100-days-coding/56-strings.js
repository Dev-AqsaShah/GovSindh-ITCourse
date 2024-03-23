// A mixed bag of items 
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// picks out only the words 
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
//shows the list of just words 
console.log(stringArray);
Output: ["apple", "banana", "carrot"];
//this line checks each item: if its a word, it goes into the new list
