//!  TYPESCRIPT QUIZ PREPERATION
//! sir ubaid topics
export {};
// let message = "Hello, World"; // type interence
// console.log(message);
//! json syntax 
// let json = {
//     "name" : "john",
//     "age" : 30,
//     "city" : "karachi",
// }
// TYPE ERROR
//lett name1 = "john";
//?! FUNCTION
// function helloworld(){
//     console.log("Hello, world!");
// }
// helloworld()  //? invoke function
//! return function
// function helloworld(){
//     let val1: number = 10;
//     let val2: number = 20;
//     let sum: number = val1 + val2;
//     return sum;
// }
// let output: number = addTwoValue(10, 20)
// console.log(output);
//! arrays
// let arrays = [21,45,76,94]
// console.log(arrays[2]);
//! mathods of arrays 
//let arrays: number[] = [21,45,76,94]
//console.log(arrays);
//arrays.push(65);
//arrays.pop();
// arrays.shift();
// arrays.unshift(0)
// console.log(arrays);
//! object syntax
//  let person = {
//     name: "aqsa",
//     age : 20,
//     isMarried : false,
//  }
//  console.log(person);
//! nested objects
//  let person: {
//    name : string,
//    age : number,
//    isMarried : boolean,
//    address: {
//       city : string,
//       stretNo : number,
//       floorNo : string,
//    }
//  } = {
//    name: "aqsu",
//    age: 20,
//    isMarried: false,
//    address: {
//       city : "karachi",
//       stretNo: 33,
//       floorNo: "D-94",
//    }
//  }
//  console.log(person.address.city);
//! type Alias  
//? yaha hm ek bar types de kr bar bar use kr sakte 
// type Person = {
//     name : string,
//     age : number, 
//     isMarried : boolean,
//     address: {
//       city: string,
//       stretNo : number,
//       floorNo : string,
//     }
// }
// let person1 : Person = {
//    name : "aqsa",
//     age : 20, 
//     isMarried : false,
//     address: {
//       city: "karachi",
//       stretNo : 33,
//       floorNo : "D-94",
//    }
// }
//! loops 
// let table: number = 2
//  for(let i = 1; i <= 10; i++){
//      console.log(`${table} * ${i} = ${table * i}`);
//  }
//! function overloading
//  function add(a: number, b: number): number;
//  function add(a: string, b: string): string;
//  function add(a: any, b: any): any {
//    return a + b
//  }
//  add(6,7)
//  console.log(add("7","hey"));
//! union literals & type intersection
// let name1: string | number = "hello";
// name1 = 10; 
// type student = {
//    name: string,
//    fatherName: string,
//    rollNo: number
// }
// type teacher = {
//    name: string, 
//    age: number,
//    experience: number,
// }
// let student1 : student = {
//    name: "aqsa",
//    fatherName: "Mahdi",
//    rollNo: 2
// }
// let teacher1 : teacher = {
//    name: "fasih",
//    age: 18,
//    experience: 3
// }
// type specialTeacher =  student & teacher 
// let specialTeacher1 : specialTeacher = {
//    name: "hello",
//    fatherName: "Mahdi",
//    experience: 1,
//    rollNo: 2,
//    age: 18
// }
// console.log(specialTeacher1)
//! Tuples
// type arrayType =readonly [string, number, boolean];
// let array: arrayType = ["aqsa", 20, true];
//! Enums 
//? jab ap kpass set of values ho or ap ko us m se ek set of values chose krni ho
// enum Hey {
//    admin = "admin",
//    user = "user",
// }
// type loginInfo = {
//    username: string,
//    password: string,
//    role: Hey, // Correct enum type
// }
// let user1: loginInfo = {
//    username: "aqsa",
//    password: "123",
//    role: Hey.user // Correct enum reference
// }
// let user2: loginInfo = {
//    username: "Ubaid",
//    password: "123",
//    role: Hey.admin // Correct enum reference
// }
// console.log(user1);
// console.log(user2);
//! Any & unknown 
// let name: any = "john"
// name = 10
// name = true
// name.map((x) => console.log(x))
// name.forEach((x) => console.log(x))
//? unknown
//let name2 : unknown= "john"
// name2 = 10
// name2 = true
// name.map((x) => console.log(x))
// name.forEach((x) => console.log(x))
//! Narrowing & Explicit Casting
//? type narrowing
// if(typeof(name) == "string"){
//    let result = name.toUpperCase()
// }else if(typeof(name) == "number") {
//    let result = name.tofixed(2)
// }
// //? explicit casting
// console.log((name2 as string).toLocaleUpperCase());
//!  STRUCTURAL TYPING
//? its perticularly useful when dealing with objects that may not be share a common ancestor but have similar shapes and behavior.
// type salary = {
//    name: string,
//    salary: number,
// }
// type bonisandsalary = {
//    name:string,
//    salary: number,
//    bonus: number,
// }
// let Employee1: bonisandsalary = {
//    name: "aqsa",
//    salary: 50000,
//    bonus: 1000
// }
// let Employee2: salary = {
//    name: "fasih",
//    salary: 80000
// }
// let Employee3 : salary = {
//    name: "ali",
//    salary:10000
// }
// //? stale object 
// Employee2 = Employee3
// Employee3= Employee2
// Employee2 = Employee1
//! modules
// import inquirer from "inquirer";
// const userPrompt = async () => {
//   const answers = await inquirer.prompt(
//     {
//       type: "input",
//       name: "name",
//       message: "what is your name?"
//     }
//   )
// }
// userPrompt()
//! synchronous
// console.log("Hello World");
// let a : number = 10;
// let b : number = 20;
// console.log(a-b);
//! Asynchronous
// let a: number = 10;
// let b: number = 20;
// setTimeout(
//   function(){
//     console.log(a);
//     console.log(b);
//   }, 10000
// )
// let a:number = 10;
// let b:number = 20;
// a = 30;
// a = 40;
// setTimeout(
//   function(){
//     console.log(a);
//     console.log(b);
//   }
// )
// a = 50; 
// b = 60
//! callback functions
// function sayHi() {
//   console.log("hi...");
// }
// function callMe(callback:()=> void) {
//   callback();
// }
// callMe(sayHi)
//! promises
// let dostkawada =new Promise(function(resolve, reject){
//   let dostkipocket = 5000;
//   if(dostkipocket >=500){
//      resolve("pese waps")
//   }
//   else{
//     reject("pese nhi hn")
//   }
// })
// dostkawada.then(function(message){
//   console.log(message);
// })
