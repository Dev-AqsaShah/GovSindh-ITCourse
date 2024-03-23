//this program calculates the average of all scores given 
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    //adds all scores together and divides by the number of scors 
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
//example: finding the average of four scores 
console.log(averageScore(80, 90, 100, 70)); //shows the average score
//we add up all the scores, then divide by how many there are.
