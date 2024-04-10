 // question num-82: find the length of a string. 
  
 function stringLength(str: string): number {
    return str.length; 
 }

 console.log(stringLength("Alice")
);

// question num-83: converting o upper and lower case: 
 function convertCase(str: string) {
    let upperStr = str.toUpperCase();

    let lowerStr =
    str.toLocaleLowerCase();

    console.log("Uppercase:", upperStr, "Lowercase", lowerStr);
 }

 convertCase("Hello World"); 

 // question num-84 replacing text in a string:
 function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
 }

 console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));