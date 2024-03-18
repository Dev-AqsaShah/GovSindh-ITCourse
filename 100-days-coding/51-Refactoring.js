//original function for calculting the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
// refactored into an arrow function
var calculateAreaArrow = function (width, height) { return width * height; };
//example usage o the arrow function
console.log(calculateAreaArrow(5, 7)); //logs the area of the rectangle
