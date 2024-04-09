var name_1 = "aqsa";
var name_2 = "aqsa shah";
var name_3 = "syed aqsa shah";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
}
else {
    console.log("names are  equal");
}
if (name_1 != name_3) {
}
else {
    console.log("names are  equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in order category");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 && age_2 != 22) {
    console.log("person is eligible not for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is eligible not for vote");
}
var fruit = ["banana", "apple", "orange"];
if (fruit.includes("banana")) {
    console.log("baana is in fruit list");
}
if (!fruit.includes("mango")) {
    console.log("mango is not include in an array");
}
