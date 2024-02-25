let name_1 : string = "aqsa"
let name_2 : string = "aqsa shah"
let name_3 : string = "syed aqsa shah"

if (name_1 == name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

if (name_1 != name_2){
} else {
    console.log("names are  equal")
}
if (name_1 != name_3){
} else {
    console.log("names are  equal")
}
let age_1 : number = 18
let age_2 : number = 22

if (age_1 == 18){
    console.log("eligible for vote") 
}
if (age_1 !=22){
    console.log("eligible for vote in order category")
}
if(age_1 <= age_2){
    console.log("younger")
}

if(age_2 >= age_1){
    console.log("older")
}
 if(age_1 == 18 && age_2 ==22){
    console.log("person is eligible for vote")
}
if (age_1 == 18 && age_2 != 22) {
    console.log("person is eligible not for vote")
}

if (age_1 == 18 || age_2 != 22) {
    console.log("person is not eligible  for vote")
}

let fruit : string [] = ["banana", "apple", "orange"]
if (fruit.includes("banana")){
    console.log("banana is in fruit list")
}

if (!fruit.includes ("mango")){
    console.log("mango is not include in an array")
}