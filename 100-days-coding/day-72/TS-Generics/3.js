// generics classes 
// generic class 'user'
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    // Method that takes a message of type 'T' and displays it along with the value property 
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
// creating an instance of user with a  spesific type parameter (string)
var userOne = new User("Elzero");
console.log(userOne.value); // output: "Elzero"
userOne.show("Message"); // output: "message - Elzero"
// creating an intstance of user with a type parameter that can be a number or a string
var userTwo = new User(100);
console.log(userTwo.value); // output: 100
userTwo.show("Message"); // output: 'message - 100'
