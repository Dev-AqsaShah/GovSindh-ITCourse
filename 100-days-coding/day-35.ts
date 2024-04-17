//question num-103

function getRandomBoolean():
boolean {
    return Math.random() > 0.5; 
}

console.log(getRandomBoolean());

//question num-104

function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
} 
 
console.log(getRandomHexColor());

//question num-105 

function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;

}

console.log(rollDice());