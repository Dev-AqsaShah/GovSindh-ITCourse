//define a function that accepts multiple hobbies as arguments 
function logHobbies (...hobbies:string[]) {
    //loops through each hobby in the array
    hobbies.forEach(hobby => {
        //logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    });
}
//call the function with three hobbies 
logHobbies("reading", "coding", "cycling"); 