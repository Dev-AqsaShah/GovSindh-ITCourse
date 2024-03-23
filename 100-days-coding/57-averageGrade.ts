// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

//Calculates the average grade 
let averageGrade = grades.reduce((total, grade) => total + grade, 0 ) / grades.length;

//shows the average Grade
console.log(averageGrade);

//first, we add up all the grades. then, we divide by how many grades there are to get the average