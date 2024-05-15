// create a promise that either resolves or rejects based on a condition 
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5; // randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); }) // handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); //handles a rejection 
//this code will randomly log either "Success!" or "failure" based on the outcome of the promise.
