//question num-91 
var favoriteFruits = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango");
console.log(favoriteFruits);
//Question num-92 
function removeLastElement(arr) {
    return arr.pop();
}
var fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits));
console.log(fruits);
//question num-93 
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Cherry"];
replacementBananaWithMango(fruits);
console.log(fruits);
