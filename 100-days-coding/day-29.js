//Question num-85 finding the position of a substring.
function findCodePosition(str) {
    return str.indexOf("code");
}
console.log(findCodePosition("Learn to code with JavaScript"));
//question num-86 checking for text presence
function hasJavaScript(str) {
    str.includes("JavaScript");
}
console.log(hasJavaScript("I lo ve coding i JavaScript"));
// question num-87 extracting a substring
function extractFirstTenChars(str) {
    return str.substring(0, 10);
}
console.log(extractFirstTenChars("Hello, JavaScript world!"));
