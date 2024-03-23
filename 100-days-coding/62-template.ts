// creating a blueprint (interface) for student information

interface student {
    name : string;
    age : number;
    courses : string[];
}

// filling in the blueprint with an example student
let student: student = {
    name : "Alice",
    age : 22,
    courses : ["Math", "science", "History"]
};

//showing the student's information
console.log(student);

//we are using the blueprint to make sure our student has a name, age, and list of courses.
