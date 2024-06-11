var username = "Glicher"; // the variablle can hold string or null
var ageEx = null; // the variable can hold or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
greetUser("Glitcher"); // output: hello glitcher
greetUser(null); //output: hello guest
