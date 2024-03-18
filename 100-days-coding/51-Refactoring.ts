//original function for calculting the area of a rectangle

function calculateArea(width:number, height: number): number {
    return width * height;
}

// refactored into an arrow function

let calculateAreaArrow = (width:number, height: number): number => width * height;

//example usage o the arrow function

 console.log(calculateAreaArrow(5,7)); //logs the area of the rectangle