
let personName: string = "aqsa";

// lowercase
console.log("lowercase:", personName.toLowerCase());

// uppercase
console.log("uppercase:", personName.toUpperCase());

// title case
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
