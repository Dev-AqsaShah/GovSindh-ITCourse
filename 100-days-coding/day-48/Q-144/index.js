//example using promise.all to wait for multiple promises to resolve 
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // output [3, 42, "foo"]
});
//this demonstrates  how Promise.all waits for all promises to resolve and then logs the aarray of thier resulttt
