// define an interface "person" with a method "great" 
// create an object that adheres to the "person" interface
var Sarah = {
    name: "Sarah",
    age: 35,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Sarah.greet("Hello, TypeScript");
