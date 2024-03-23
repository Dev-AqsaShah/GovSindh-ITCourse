//this program calculates the average of all scores given 
function averageScore(...scores: number[]) : number {
//adds all scores together and divides by the number of scors 
let total = scores.reduce((sum,score ) => sum + score, 0);
    return total / scores.length;
}


//example: finding the average of four scores 
console.log(averageScore(80, 90, 100, 70)); //shows the average score

//we add up all the scores, then divide by how many there are.