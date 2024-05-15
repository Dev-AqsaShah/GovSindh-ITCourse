// create a promise that either resolves or rejects based on a condition 
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5; // randomly choose success or failure
    if (success) {
        resolve("Success!");
    }else {
        reject(new Error("Failure"));
    }
});

conditionalPromise
.then((result) => console.log(result)) // handles a successful resolution
.catch((error) => console.log(error.message)) //handles a rejection 
//this code will randomly log either "Success!" or "failure" based on the outcome of the promise.