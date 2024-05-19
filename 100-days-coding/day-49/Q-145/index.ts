// this function accepts a callback function and invokes 
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
): void {
    callback(arg1, arg2); // Invoke the callback with the arguments
}

// example callback function that adds two numbers
const add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b 
};

executeCallback(add, 5, 3); // Outputs: 8
// Demonsstrates invoking a callback function with arguments to perform an addition. 