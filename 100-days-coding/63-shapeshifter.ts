// creating a custom type (type alias) for shapes that could be circles or rectangles
type shape = {
    kind : "circle" | "rectangle";
    radius?: number; //only for circles
    width?: number; //only for rectangles
    height?: number; //only for rectangles
};

//describing a circle using our shape type 
let circle: shape = {
    kind : "circle",
    radius : 5
};

// Describing a rectangle using our shape type 
let rectangle: shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described 
console.log(circle); //here's the  circle
console.log(rectangle); //And here's the rectangle

//we made a flexible program  that can describe different shape in details.