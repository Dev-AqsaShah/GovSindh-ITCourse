// Creates a promise that resolves with "Hello, World" after 2 seconds
var HelloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
HelloPromise.then(function (message) { return console.log(message); });
// After 2 seconds, "Hello, World!" will be logged to the console.
