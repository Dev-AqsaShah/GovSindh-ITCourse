//this  program makes a function that adds a specific number
function makeAdder (valueToAdd: number) {
    //this is the magic box, it takes a number and adds your special number to it
    return function (number: number): number {
        return number + valueToAdd;
    };
}

// making a magic box that adds 5
 let addfive = makeAdder(5);
console.log (addfive(10)); 
 
// if we put 10 in the box, it gives us 15
//we made a function (magic box) that adds 5 to any number.