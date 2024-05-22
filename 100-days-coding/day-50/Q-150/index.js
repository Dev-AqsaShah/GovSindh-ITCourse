//Synchronous example
console.log("Before synchronous operation");
//Simulate a synchronous blocking operation 
for (var i = 0; i < 1e9; i++) { } //a long loop 
console.log("After synchronous operation");
//asynchronous example
console.log("Before asynchronous operation ");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation operation setup");
//Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
