//question num 121
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
//question num 122 
var counter = 10;
while (counter > 0) {
    if (counter === 5) {
        break;
    }
    console.log(counter);
    counter--;
}
//question num 123
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found : ".concat(char));
            break;
        }
        console.log(char);
    }
}
logUntilVowel("syzygy");
