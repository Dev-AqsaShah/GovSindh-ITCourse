// Enums

enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const today: Days = Days.Wednesday;
console.log(`today is ${Days[today]}`);