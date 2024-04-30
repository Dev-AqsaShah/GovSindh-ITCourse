//question-num-124

const person = {
    name: "Alice",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());

//question num-125

const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function ( ) {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());

//question-num-126

const myObject = {
    property: "Value",
    outerMethod: function ( ) {
        console.log(this.property);

        const innerMethod = () => {
          console.log(this.property);
        };
        innerMethod();
    },
};

myObject.outerMethod();