let age: number = 25;
age = 26;
console.log(age);

const name = "Alice"; // No need to specify type for primitive values
try {
    // This will throw a TypeError
    name = "Bob";
} catch (error) {
    console.log("error: can't reassign a 'const'-declared variable.");
}

