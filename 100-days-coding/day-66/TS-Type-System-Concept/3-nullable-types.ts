let username: string | null = "Glicher";  // the variablle can hold string or null
let ageEx: number | null = null; // the variable can hold or null

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // output: hello glitcher
greetUser(null); //output: hello guest