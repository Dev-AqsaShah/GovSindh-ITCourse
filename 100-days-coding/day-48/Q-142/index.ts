// Creates a promise that resolves with "Hello, World" after 2 seconds
const HelloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

HelloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console.
