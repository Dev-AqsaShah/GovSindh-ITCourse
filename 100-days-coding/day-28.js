// question num-82: find the length of a string. 
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Alice"));
// question num-83: converting o upper and lower case: 
function convertCase(str) {
    var upperStr = str.toUpperCase();
    var lowerStr = str.toLocaleLowerCase();
    console.log("Uppercase:", upperStr, "Lowercase", lowerStr);
}
convertCase("Hello World");
// question num-84 replacing text in a string:
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
