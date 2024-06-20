// INTERFACE VS. TYPE ALIASES
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var Labrador1 = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
var myCar = {
    brand: "Toyota",
    model: "Camry",
};
