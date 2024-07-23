//! STEP-00
// let message = "Hello World";
// console.log(message)
//! STEP-00a
//? JSON ( Javascript Object Notation )
//! step-0b 
//lett message = "Hello World"; //? SYNTAX_ERROR
//console.log(message);
//! step-0c 
// let message = "Hello World";
// console.loger(message); //? type_error
//! step-0d  
// let message = "Hello World";
// message = 6;         //? assignability_error
// console.log(message);
//! step-01 
//? strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 0;
// let c : boolean = true;
//? type inference
// let e = "USA";
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;
//! step-02
//? use const where variable values do not change
// const a = 5;
// const b : number = 33;
// const c = "best";
//? use let instead of var everywhere, because let has blocked scope
// if (true) {
//     let z = 4; 
//? use z
// }
// else {
//     let z = "string";
//? use z
// }
// console.log("let: + z"); //? error: z not defined in this scope
//! step-03a
// let a = 5;
// export default a;
//! step-03b
// let a = 5;
// export default a;
//! step-03c
//? inquirer
// import inquirer from "inquirer";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your age: "
// }]);
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
//! step-03d
//? chalk
// import inquirer from "inquirer";
// import chalk from "chalk";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
//! step-04 
//? union-literals
// let myname: string | null; 
// myname = null; 
// console.log(myname);
// myname = "zia";
// console.log(myname);
// myname = undefined; //? error
// myname = 12; //? error
// let myAge: string | number; 
// myAge = 16; //? narrowing
// console.log(myAge);
// console.log(myAge.toLowerCase()); //? error
// myAge = "Dont Know"; //?narrowing
// console.log(myAge);
// console.log(myAge.toString()); //? common to both types, can be called even without narrowing
// console.log(myAge.toString()); //? can be called on string //because of narrowing
// let newAge = Math.random() > 0.6 ? "Khan": 60;
// //? newAge.toLowerCase(); // error: transpiler cannot narrow
// if (newAge === "khan") {
//     // Type of newAge: string
//     newAge.toUpperCase(); //? can be called
// }
// let age: number | "died" | "unknown";
// age = 90; //?ok
// age = "died";
// age = "unknown";
// age = "living"; //? error
// let zia: "zia";
// zia = "zia";
// //? zia = "khan";//Error
// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;
// if (yourName) {
//     yourName.toUpperCase(); //? Ok: string
// }
// yourName.toUpperCase(); //? Error: Object is possibly 'undefined'.
// yourName?.toUpperCase(); //? OK
// //? You can also define a type alias
// type RawData = boolean | number | string | null | undefined;
// let data: RawData;
// //? You can even combine them
// type Id = number | string;
// type IdMaybe = Id | undefined | null;
//! step-05a  OBJECTS
// let teacher = {
//      name: "Zeeshan",
//      experience: "10"
//  }
//  console.log(teacher.name);
//  console.log(teacher["experience"]);
//? Type Declaration
//  let student : {
//      name: string,
//      age: number
//  }
//  student = {
//      name: "Hira",
//      age: 30
//  }
//  console.log(student["name"]);
//  console.log(student.age);
//! step05b_object_aliased
//? anonymous
// let teacher : {name: string, exp: number} = {
//      name: "Zeeshan",
//      exp: 10
//  }
//? Aliased Object Type
//  type Student = {
//      name: string,
//      age?: number
//  }
//  let student: Student = {
//      name: "Hira",
//      age: 30
//  }
//  console.log(student["name"]);
//  console.log(student.age);
//? Interfaces
//  interface Manager {
//      name: string,
//      subordiates?: number
//  }
//  let storeManager: Manager = {
//      name: "Bilal"
//  }
//! step05c_structural_typing_object_literals
// These two interfaces are completely
// transferrable in a structural type system:
// interface Ball {
//      diameter: number;
//  }
//  interface Sphere {
//      diameter: number;
//  }
//    let ball: Ball = { diameter: 10 };
//    let sphere: Sphere = { diameter: 20 };
//    sphere = ball;
//    ball = sphere;
// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.
//    interface Tube {
//      diameter: number;
//      length: number;
//    }
//    let tube: Tube = { diameter: 12, length: 3 };
//tube = ball;//Error
//    ball = tube;
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against
// each other to verify their equality.
//===================================================
// Now lets do it Case By Case
//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 
//  let myType = { name: "Zia", id: 1 };
//? Case 1
//  myType = { id: 2,  name: "Tom" };//? Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
//?Case 2a
//  myType = { id: 2,  name_person: "Tom" };//?Case 2a: Error, renamed or missing property
//? Case 2b 
//? A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
//  var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
//  x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature
//  //Case 3
//  myType = { id: 2,  name: "Tom", age: 22 };//? Case 3: Error, excess property
//=================================================
//Case when STALE object literal are assigned to a variable 
//  let myType2 = { id: 2,  name: "Tom" };
//  //? Case 1
//  myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
//  let myType3 = { id: 2,  name_person: "Tom" };
//  //? Case 2a
//  myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 
//? Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
//  var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
//  var y = { id: 1, fullname: "Zia" };
//  x = y; //? Ok, `fullname` matched by index signature
//  var myType4 = { id: 2,  name: "Tom", age: 22 };
//  //? Case 3
//  myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
/*
var x: { foo: number };
x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number, bar?: number };
y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
*/
//! step05d_nested_objects
//  type Author = {
//      firstName: string;
//      lastName: string;
//  };
//  type Book = {
//      author: Author;
//      name: string;
//  };
//  const myBook : Book = {
//      author: {
//          firstName: "Zia",
//          lastName: "Khan"
//      },
//      name: "My Best Book"
//  }
//! step05e_intersection-types
// interface Student {
//      student_id: number;
//      name: string;
//    }
//  interface Teacher {
//      teacher_Id: number;
//      teacher_name: string;
//  }
//  type intersected_type = Student & Teacher;
//  let obj1: intersected_type = {
//      student_id: 3232,
//      name: "rita",
//      teacher_Id: 7873,
//      teacher_name: "seema",
//  };
//  console.log(obj1.teacher_Id);
//  console.log(obj1.name);
//! step05f_any_unknown_never_types
// Any
// let myval: any;
// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK
//Unknown
// let value: unknown;
// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK
// Assigning a value of type unknown to variables of other types
// let val: unknown;
// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// Never
// Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
// Inferred return type is never
// function fail() {
//   return error("Something failed");
// }
// Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }
//! step06-explict-casting
// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)
//!  step-07a-enums 
// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
//! step-07b-const enum
// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName);
// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
//! step08-arays
// let array1 : number[] = [5, 6, 7];//correct syntax
// console.log(array1[1]);//correct syntax
// let array2:Array<number> = [1, 2, 3];//alternative correct syntax
// let array3 : number[] = [];//correct syntax to define an empty array
// let array4: number[] = new number[2];//error
// let array5: number[] = [];
// array5.push(1234);//dynamically adding
//! step-09a fuctions
//? Note: All parameters are required
//? Named function
// function add(x: number, y: number): number {
//      return x+y;
//  }
//  //? Anonymous function
//  let myAdd1 = function(x: number, y: number): number { 
//                      return x+y; 
//  };
//  //? Anonymous function with explict type
//  let myAdd2: (x:number, y:number)=>
//      number = 	function(x: number, y: number): number 
//  { return x+y; 
//  };
//  //? type names dont matter
//  let myAdd3: (baseValue:number, increment:number)=>number = 
// function(x: number, y: number): number 
// {  return x+y; 
//  };
//  //? Lambda functions															
//  let myAdd4 = (a : number, b : number) => a + b;
//? output will be: var myAdd4 = function(a : number, b : number) {return a + b};
//  type GreetFunction = (a: string) => void;
//  function greeter(fn: GreetFunction) {
//       //? ....
//  }
//! step09b function optional parameter
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); //ok
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
export {};
