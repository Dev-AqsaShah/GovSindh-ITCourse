console.log("Start");
setTimeout(function () {
    console.log("Callback executed"); // this gets queued to be executed by the event loop
}, 0);
console.log("End");
//although the timeout is 0, "callback executed" is logged after "End" due to the event loop.
