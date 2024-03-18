//define a function that accepts multiple hobbies as arguments 
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    //loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        //logs a statement for each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
//call the function with three hobbies 
logHobbies("reading", "coding", "cycling");
