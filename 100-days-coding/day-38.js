//question-num-112
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "paris");
countries.set("Japan", "Tokyo");
console.log(countries);
//question-num-113
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("canada")));
    }
    else {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countries);
//question-num-114
var students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
