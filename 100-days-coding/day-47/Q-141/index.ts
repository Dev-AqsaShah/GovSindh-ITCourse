//example use of the 'await' reserved word in asynchronous JavaScript.
async function fetchData() {
    // assumig fetchSomethig return a promise.
    const data = await fetchSomething();
    console.log(data);
    // the 'await' keyword  pauses the execution until the promise settles, and then resumes with the resolved value.
    } 
console.log(
    "the 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
//this demonstrates how 'await'improves readability and flow in asynchronouse code.