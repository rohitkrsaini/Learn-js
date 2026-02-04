//! 12 jan

//! type of printing statement


// console.log("external javascript")

// document.writeln("hello")
// document.writeln("hello")
// document.writeln("hello")

// document.write("word")
// document.write("word")
// document.write("word")

// ! TOKENS : smallest unit of programing language

/*
there are 4 type of tokens
1) keyword : resword word
example :- var, let,const,for.if etc

2) identifier : name give to a class, method,varivable,are know as identifier

3) literls : a value stored in a variable is known as literls

4)  Oprators : to performe opration b/w two or more oprands

EXAMPLE : var name = "Johen Doe"
*/

 
//!we have 2 type of datatype
/*
1)PRIMATIVE

IN PRIMATIVE THERE ARE 7 TYPE
1)number
2)string
3)boolean
4)undifined
5)null
6)bigint
7)symbol

2)NON PRIMATIVE

1)array
2)objact
3)function
*/

//! MUTABLE & IMMUTABLE

/* var str = "HELLO"
str[0] = 'X'
console.log(str) //immutable cannot change

var arr = [10,20,30,40]
arr[0]=100
console.log(arr) // mutable can be change
 */

//! 13 jan

// !PREMATIVE DATA TYPE EXAMPLE

// 1. number
// var n1 = 25.2
// console.log(n1)
// console.log(typeof n1)

// 2. string
// var n2 = "rohit"
// var n3 = 'anshul'
// console.log(n2,n3)
// console.log(typeof n3)

// `` using backticks we can write multi-line string and we can use string interpolation using ${}
// var n4  = `Hey !!! ${n2} lets learn js`
// console.log(n4)
// console.log(typeof n4)

// 3. boolean
// var n5 = true
// console.log(n5)
// console.log(typeof n5)// boolean
// console.log(typeof typeof n5) // string

// 4.undifine
// var n6 
// console.log(n6)
// console.log(typeof n6)

// 5.null
// var n7 = null
// console.log(n7)
// console.log(typeof n7)

//6.bigint
// var n8 = 9n
// console.log(n8)
// console.log(typeof n8)

//7.symbol  use for unique data store only
// var n9 = Symbol("hello")
// var n10 = Symbol("hello")

// console.log(n9)
// console.log(10)

// console.log(n9 == n10)
// console.log(n9 === n10)

// STRICTLY AND LOOSLY COMPARISION

// var n11 = 10
// var n12 = '10'

// console.log(n11 == n12)
// console.log(n11 === n12)

//! VAR , LET AND CONST DIFFERENCE

// var a;
// console.log(a); // ud
// a = 10;
// console.log(a); // 10
// var b = 20
// console.log(b); // 20
// var b;
// console.log(b); // 20
// b = 30
// console.log(b); // 30
// var a = 40
// console.log(a); // 40

// let c;
// console.log(c); // ud
// c = 100
// console.log(c); // 100
// let d = 200
// console.log(d); // 200
 // let c ; //! Cannot redeclare
// d = 300
// console.log(d); // 300
 // let d = 400 //! Cannot redeclare and reinitialize

// //! declare and initialize at same time
// const e = 1000
// console.log(e); // 1000
 
//! 14 jan

//! HOISTING : moving declaration part at the top of the original code internally

// var a = undefined <--- hoisting happens internally
// console.log(a);
// var a = 10
// console.log(a); // 10

//! TDZ (TEMPORAL DEAD ZONE) : the time period between accessing let and const variable before declaration

// let b
// console.log(b);//! error -> Cannot access 'b' before initialization
// let b = 20
// console.log(b); // 20

// let c  <--- hoisted but value will be unavailable
// console.log(c); //! error -> Cannot access 'c' before initialization
// let c;
// console.log(c);// ud

//! GEC (GLOBAL EXECUTION CONTEXT)
// debugger;
// console.log("Start");
// console.log(a);
// var a = 10
// console.log(a);
// let b;
// console.log(b);
// b = 20
// const c = 100
// console.log(c);
// console.log("End");

// ! TYPES OF VARIABLES AND ITS SCOPE

// ! 1) GLOBAL VARIABLES : can be accessed anywhere throughout the code
// var a = 10; // GLOBAL SCOPE <- DUE TO HOISTING
// let b = 20;  // SCRIPT SCOPE <- DUE TO TDZ
// const c = 30; // SCRIPT SCOPE <- DUE TO TDZ

// if (100 > 2) {
//   console.log(a, b, c);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(a, b, c );
// }

// function demo1() {
//   console.log(a, b, c);
// }
// demo1();

//! 2) LOCAL VARIABLES : Variables which can be accessced within a block.
// if (100 > 2) {
//   var x = 10; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let y = 20; // LOCAL VARIABLE - BLOCK SCOPE
//   const z = 30; // LOCAL VARIABLE - BLOCK SCOPE
// }
// console.log(x); // 10
 // console.log(y); //! ReferenceError: y is not defined

// for (let i = 0; i < 5; i++) {}

//! NOTE : var variables are also known as function scope variable because it acts like local variable within a function

// function demo2() {
//   var m = 100; // LOCAL VARIABLE - LOCAL SCOPE
//   let n = 200; // LOCAL VARIABLE - LOCAL SCOPE
//   const o = 300; // LOCAL VARIABLE - LOCAL SCOPE
// }
// demo2();
// console.log(m); //!  ReferenceError: m is not defined

//! FUNCTIONS

// ! 1) NAMED FUNCTION : a function which has name
// ! NOTE : only Named Function can be called before declaration due to function hoisting

// debugger
// greet()

// function greet() {
//   console.log("Welcome");
// }

// greet()

//! GEC
// console.log("Start");
// var a;
// console.log(a);
// fun();
// a = 10;
// console.log(fun);
// function fun() {
//   var str = "Hello";
//   console.log(str);
// }
// console.log(fun);
// fun();
// console.log("End");

// console.log("start");
// console.log(student);
// var s1 = 100;
// function student() {
//   console.log("I am student");
// }
// console.log(trainer);
// let s2 = 200;
// console.log(s2);
// function trainer() {
//   console.log("I am trainer");
// }
// student();
// trainer();
// console.log("End");

//! 16/01/2026

//! 2) ANONYMOUS FUNCTION : function without name
// function () {
//   console.log("I am Anonymous function");
// }

//! 3) FUNCTION EXPRESSION : its is used to call/invoke anonymous function

// console.log(f1);// ud
// // f1()

// var f1 = function () {
//   console.log("I am Anonymous function called by using Function expression");
// };
// console.log(f1);// it will print function with body
// f1() // it will call the function

//! 4) PARAMETERIZED FUNCTION
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20);
// sum();

// function demo1(n1, n2, n3, n4, n5) {
//   console.log(n1, n2, n3, n4, n5);
//   console.log(arguments);
// }
// demo1(10, 20, 30, 40, 50);
// demo1(10, 20);
// demo1(10, 20, 30, 40, 50, 60, 70, 80, 90);

// function printFullName(firstName, lastName , age) {
//   console.log(`My Name is ${firstName} ${lastName} ${age}`);
//   console.log("My age is", age);

// }
// let firstNameInput = prompt("Enter FirstName");
// let lastNameInput = prompt("Enter LastName");
// let ageInput = parseInt(prompt("Enter Age"));

// printFullName(firstNameInput, lastNameInput , ageInput);

 //! 5) RETURN TYPE FUNCTION
// function getEmail(fname, lname) {
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}.${lname}@gmail.com`;

//   return [fullName, email];
// }

// let value = getEmail("john", "doe");
// console.log(value[0]);
// console.log(value[1]);

//! 6) NESTED FUNCTION
// function parent() {
//   console.log("I am Parent");

//   function child() {
//     console.log("I am Child");
//   }

//   child();
// }

// parent();

//! Closure is a temporary memory which is created whenever we try to access paraent function's property inside child function and it contains only those properties that child function required.

// debugger
// function parent() {
//   let a1 = 100;
//   console.log("I am Parent", a1);

//   function child() {
//     let b1 = 200;
//     console.log("I am Child", b1, a1); // we can access a1, due to closure
//   }
//   child();
// }
// parent();

// debugger;
// function parent() {
//   let a1 = 100;
//   console.log("I am Parent", a1);

//   function child() {
//     let b1 = 200;
//     console.log("I am Child", b1, a1);
//   }

//   return child;
// }

// let val = parent();
// console.log(val);
// val();

//! 19-jan

//! 7) HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
// - A function which passes as an arguement to another function is known as Callback Function

// - A function which passes any of these requirements
// 1) if a function accepts another function as an arguement is known as HOF
// function demo(fn) {
//   fn();
// }
// demo(function () {
//   console.log("Hii");
// });

// // 2) if a function returns another function is known as HOF
// function Parent() {
//   return function Child() {
//     console.log("Hello");
//   };
// }
// let val = Parent();
// val();

// function Demo1() {
//   console.log("Demo 1");
//   return function Demo2() {
//     console.log("Demo 2");
//     return function Demo3() {
//       console.log("Demo 3");
//     };
//   };
// }
// Demo1()()(); // <--- JS CURRYING

//! 8) ARROW FUNCTION
// let a1 = () => {
//   console.log("I am Arrow function 1");
// };
// a1();

// // if no parameter, we can replace () with _
// let a2 = (_) => {
//   console.log("I am Arrow function 2");
// };
// a2();

// // if having only one parameter, () is not mandatory
// let a3 = (n1) => {
//   console.log("I am Arrow function 3", n1);
// };
// a3(100);

// // if having only one line of code {} is not mandatory
// let a4 = () => console.log("I am Arrow function 4");
// a4();

// // explicit return, {} and "return" keyword is mandatory
// let a5 = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(a5(10, 20));

 //// implicit return , {} and "return" keyword is not required
// let a6 = (n1, n2) => n1 + n2;
// console.log(a6(5, 10));

//! 20/01/2026

//! 9) IMMEDIATLY INVOCKED FUNCTION EXPRESSION ( IIFE )
// let x = (function () {
//   console.log("I am IIFE");
//   return "Hii";
// })();
// console.log(x); // Hii

// function demo() {
//   return "Hi";
// }
// let val = demo();

//! 10) CONSTRUCTOR FUNCTION : used to create objects

//! OBJECTS : it is used to store multiple data in the form of key and value pairs
// There are 3 ways to create object:-
// //! 1) Object literals
// const obj1 = { id: 1, fname: "John" };
// console.log(obj1);

// //! 2) Object Constructor
// const obj2 = new Object({ id: 2, fname: "Jane" });
// console.log(obj2);

// //! 3) Constructor Function
// function Student(id, firstName) {
//   this.id = id;
//   this.firstName = firstName;
// }
// let s1 = new Student(1, "James");
// console.log(s1);
// let s2 = new Student(2, "Clark");
// console.log(s2);

//! CRUD WITH OBJECTS

// //! 1) CREATE
// const obj = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   company: "NA",
// };
// console.log(obj);

// //! 2) READ
 // there are 2 ways to read
 // 1) using dot operator

// console.log(obj.fname); // John
// console.log(obj.degree); // ud

 // 2) using square brackets

// let x = "lname";
// console.log(obj["age"]); // 25
// console.log(obj[x]); // Doe

 // for in loop
// for (let i in obj) {
//   console.log(i, obj[i]);
// }

// //! UPDATE
// obj.company = "TCS"
// console.log(obj);

// //! ADD NEW KEY
// obj.salary = 60000
// console.log(obj);

// //! DELETE
// delete obj.salary
// console.log(obj);

//! OBJECT METHODS
// let obj = {
//   id: 1,
//   ename: "John Doe",
// };

// //! 1) Object.keys()
// let keys = Object.keys(obj);
// console.log(keys); // ["id" , "ename"]

// //! 2) Object.values()
// let values = Object.values(obj);
// console.log(values); // [1 , "John Doe"]

// //! 3) Object.entries()
// let keyAndValue = Object.entries(obj);
// console.log(keyAndValue); // [ ["id" , 1]  , ["ename" , "John Doe"]]

// //! 4) Object.fromEntries()
// let newObj = Object.fromEntries(keyAndValue);
// console.log(newObj); // {id: 1, ename: 'John Doe'}

// let obj2 = {
//   id: 2,
//   name: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   hobbies: ["coding", "singing", "dancing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 876541,
//   },
// };

// console.log(obj2.name.firstName); //  Jane
// console.log(obj2.hobbies[0]); // coding
// console.log(obj2.address.state); // UP
 
//! 21-jan

 //! OBJECT DESTRUCTIONG

//  let obj1 = {
//     id : 1,
//     fname : "jone",
//     lname : "kumar"
//  }

//  let{fname : firstName = "NA", lname = 0,sallay = 0} = obj1;
//  console.log(firstName, lname);
 
//  let obj2 ={
//     id : 2,
//     name : {
//         fname : "rohit",
//         lname : "saini"
//     },

//     hobbies : ["coding","musics","danching"],

//     address :{
//         city : "noida",
//         state : "up",
//         pin : 247662
//     },

//     deatils : {
//         id : "jensQSP1",
//         course : "java"
//     }
//  }

 // id,fname,coding,city,deatill^id,deatill^course

// let{id,
//     name :{fname},
//     hobbies : [h1, ,h2] ,
//     address : {city,state},
//     deatils : {id : DeatilsId, course}
//  } = obj2

//  console.log(id,firstName,h1,h2,city,state,DeatilsId,course)

// //! ARRAY DESTRUCTURING
// let arr = [10, 20, 30, 40, 50];
// let [, n1, , n2] = arr;
// console.log(n1, n2);

//  const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//   }
// }

 // name,username,street,zipcode,lat,lng,company

//  let{name, username,
//     address : {street,zipcode, geo : {lat,lng}},
//     company : {name : companyName}

//  } =  user

//  console.log(name,username,street,zipcode,lat,lng,companyName)

// ! 22-jan

// ! this keyword

// console.log(window); // GLOBAL OBJECT
// console.log(this); // POINTS TO WINDOW OBJECT

// //! HOW TO CREATE YOUR OWN METHOD
// //! NOTE : DONT USE ARROW FUNC TO CREATE METHOD BCOZ "this" KEYWORD REFERS TO WINDOW OBJECT

// let student = {
//   id: 1,
//   fname: "john",
//   lname: "doe",
//   getFullName: function () {
//     console.log(`${this.fname} ${this.lname}`);
//   },
//   getEmail() {
//     console.log(`${this.fname}.${this.lname}@gmail.com`);
//   },
// };

// student.getFullName();
// student.getEmail();

//! call() , apply() and bind()

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

// function getCourseDetails(sub1, sub2) {
//   return `${this.course} includes ${sub1} ${sub2}`;
// }

// let user1 = {
//   id: 1,
//   firstName: "Jane",
//   lastName: "Doe",
//   course: "Mern Stack",
// };

// let user2 = {
//   id: 2,
//   firstName: "James",
//   lastName: "Carry",
//   course: "Java Full Stack",
// };

// console.log(user1);
// console.log(user2);

// //! call() : immediately calls the function
// let fullName1 = getFullName.call(user1);
// console.log(fullName1);

// let courseDetails1 = getCourseDetails.call(user1, "JS", "NodeJS");
// console.log(courseDetails1);

// //! apply() : immediately calls the function
// let fullName2 = getFullName.apply(user2);
// console.log(fullName2);

// let courseDetails2 = getCourseDetails.apply(user2, ["Java", "SpringBoot"]);
// console.log(courseDetails2);

// //! bind() : returns bounded function which can be called later on
// let boundedGetFullName = getFullName.bind(user1);
// console.log(boundedGetFullName());

// let boundedCouseDetails = getCourseDetails.bind(user1);
// console.log(boundedCouseDetails("HTML", "NODE JS"));

//! 23-jan

//! - BLOCK SCOPE :
//  - WHENEVER WE DECLARE "let" AND "const" VARIABLES INSIDE CONDITIONAL OR LOOPING STATEMENT THOSE VARIABLES WILL ACT AS LOCAL VARIABLES AND HAVING BLOCK SCOPE
//! - NOTE: "var" VARIABLES WILL ACT AS GLOBAL VARIABLE AND HAVING GLOBAL SCOPE WITHIN CONDITIONAL OR LOOPING STATEMENT

//! - LOCAL SCOPE :
//  - WHENEVER WE DECLARE "var", "let" OR "const" VARIABLES INSIDE A FUNCTION , IT WILL ACT AS LOCAL VARIABLES HAVING LOCAL SCOPE

//! - FUNCTION SCOPE :
//  - "var" VARIABLES ARE KNOWN AS FUNCTION SCOPE VARIABLES BECOZ IT ACTS LIKE LOCAL VARIABLE INSIDE A FUNCTION

//! JAVASCRIPT OBJECT NOTATION (JSON)
// let user1 = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
// };

// function storeDataInLocalStorage() {
//   let jsonData = JSON.stringify(user1); // JS TO JSON
//   localStorage.setItem("usersData", jsonData);
// }

// function getDataFromLocalStorage() {
//   let data = localStorage.getItem("usersData");
//   let userObject = JSON.parse(data); // JSON TO JS
//   console.log(userObject);
//   document.writeln(`<em>${userObject.fname}</em>`);
// }

// function removeSingleDataFromLocalStorage() {
//   localStorage.removeItem("demo1");
// }

// function clearDataFromLocalStorage() {
//   localStorage.clear();
// }

//! ARRAYS : hetrogenous in nature

 // 1) Array Literals
// let arr1 = [10, true, "Hello World", () => {}, null, 1n, undefined];
// console.log(arr1);

// 2) Array Constructor
// let arr2 = new Array(10, false, "Bye", function () {});
// console.log(arr2);

//! ARRAY METHODS
// let arr1 = [10, 20, 30, 40];
// console.log(arr1); // [10,20,30,40]

//! array.push() : Appends new elements to the end of an array, and returns the new length of the array.

// let newLength = arr1.push(50, 60, 70);
// console.log(arr1); // [10,20,30,40,50, 60, 70]
// console.log(newLength); // 7 <-- new length of arr1

//! array.pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// let retrunVal = arr1.pop();
// console.log(arr1); // [10,20,30,40,50, 60]
// console.log(retrunVal); // 70

//! array.unshift()
// let newLength2 = arr1.unshift("Hello", 100);
// console.log(arr1); // ["Hello",100,10,20,30,40,50, 60]
// console.log(newLength2); // 8

//! array.shift()
// let retrunVal2 = arr1.shift();
// console.log(arr1); // [100,10,20,30,40,50, 60]
// console.log(retrunVal2); // "Hello"

//! 28-jan

//! splice( startIndex , deleteCount , newElements)
// let arr2 = [100, 200, 300, 400];
// console.log(arr2); // [100, 200, 300, 400]

// //! ADD NEW ELEMENT
// arr2.splice(3, 0, 350);
// console.log(arr2); // [100, 200, 300, 350, 400]

// arr2.splice(2, 0, 250);
// console.log(arr2); //  [100, 200, 250, 300, 350, 400]

// //! DELETE ELEMENT
// arr2.splice(2, 3);
// console.log(arr2); // [100, 200, 400]

// let arr3 = [1000, 2000, 3000, 4000];
// arr3.splice(0, 3);
// console.log(arr3); // [4000]

// //! DELETE AND ADD
// let arr4 = [100, 200, 300, 400, 500, 600];
// arr4.splice(2, 2, 1000, 2000);
// console.log(arr4); // [100, 200, 1000, 2000, 500, 600]

// //! slice( startIndex, endIndex )
// //          -6  -5  -4  -3  -2  -1
// let arr5 = [10, 20, 30, 40, 50, 60];
// //           0   1   2   3   4   5
// console.log(arr5);

// let newArr1 = arr5.slice(1, 4);
// console.log(newArr1);

// let newArr2 = arr5.slice(2);
// console.log(newArr2);

// let newArr3 = arr5.slice(-2, 3);
// console.log(newArr3);

// ! sort()
// let arr6 = [9, 5, 2, 1, 0, 4, 7];
// arr6.sort(); // ASC
// console.log(arr6);

// // LEXOGRAPHICAL SORTING
// let arr7 = [90, 5, 67, 45, 1, 78, 26];
// arr7.sort();
// console.log(arr7); //  [1, 26, 45, 5, 67, 78, 90]

// let arr8 = [80, 615, 49, 31, 10, 38];
// arr8.sort((a, b) => a - b);
// console.log(arr8); // [10, 31, 38, 49, 80, 615]

//! concat()
// let arr9 = [10, 20, 30];
// let arr10 = [40, 50, 60];
// let concatinatedArr = arr9.concat(arr10);
// console.log(concatinatedArr); // [10, 20, 30, 40, 50, 60]

//! 29-jan

//! ADVANCE ARRAY METHODS

// //! forEach( callbackFunc ) : used to iterate an array, returns undefined
// let arr1 = [10, 20, 30, 40, 50];

// let returnVal1 = arr1.forEach((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(returnVal1); // undefined

// console.log("------------------------------");

// //! map( callbackFunc ) : used to iterate an array, returns new array
// let returnVal2 = arr1.map((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(returnVal2); // [15,25,35,45,55]

// //! filter( callbackFunc )
// let arr2 = [100, 200, 300, 400, 500];

// let returnVal3 = arr2.filter((ele, idx, array) => ele > 200);
// console.log(returnVal3); // [300,400,500]

// //! find( callbackFunc )
// let returnVal4 = arr2.find((ele, idx, array) => {
//   console.log(ele);
//   return ele > 200;
// });
// console.log(returnVal4); // 300

// //! findIndex( callbackFunc )
// let returnVal5 = arr2.findIndex((ele, idx, array) => {
//   console.log(ele);
//   return ele > 200;
// });
// console.log(returnVal5); // 2

// //! reduce( callbackFunc , accumulatorValue)
// let arr3 = [10, 20, 30, 40, 50];

// let sum = arr3.reduce((acc, ele) => acc + ele, 0);

// console.log(sum);

// let arr4 = [1, 2, 3, 4, 5];
//! toString()
// let str1 = arr4.toString();
// console.log(str1); // 1,2,3,4,5

//! join()
// let str2 = arr4.join(" ");
// console.log(str2); // 1 2 3 4 5

//! split()
// let str3 = "Hello"
// console.log(str3.split(""));


// function pallidrome(word){
//   let output = word.split("").reverse().join("")
//   return output === word ? true : false
  
// }
// console.log(pallidrome("abc"));
// console.log(pallidrome("racecar"));

//! 30-jan

// array distructure

// let arr1 = [10,20,30,40,50]
// let [n1,n2,n3,n4,n5] = arr1
// console.log(n2,n5);


// let arr2 = [100,200,300,400,500]
// let[,s1, ,s2] = arr2
// console.log(s1,s2)

 // nexted array

// let arr3 = [1000,2000,[3000,4000],5000]
// let[a1, ,[,a4],a5] = arr3
// console.log(a1,a4.a5);

// let arr4 = ["hello", {id : 1,fname : "jon", lname : "doe"}]

// let[str1, {fname}] = arr4
// console.log(str1,fname)

//! REST AND SPRED OPERATORS : ...variable

// function demo1(p1,p2,...p3){
//   console.log(p1,p2)
//   console.log(p3); // rest  it pure array
//   console.log(arguments) // array like object not pure array
  
// }
// demo1(5,6,7,8,9,10,11,12)

// let arr1 = [10,20,30,40]
// let[x1, ...x2] = arr1 // array destructed use rest and spred
// console.log(x2);

// let arr2 = [10,20,30,40,50,60]
// console.log(arr2); // rest(packed array)
// console.log(...arr2); // spred(unpacked array)
//  let arr3 = [...arr2]  // copy array
//  console.log(arr3);
 

// let obj1 = {
//   id : 1,
//   fname : "jone",
//   sal : 2000
// }
// console.log(obj1);


// let obj2 = {
//   ...obj1,
//   lname : "doe",
//   sal : 7000
// }
// console.log(obj2);

//! 2Feb

//! STRING METHODS
// let str1 = "Javascript";
// let description =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum velit aliquam repellendus nihil quas unde atque optio officia blanditiis!";

// //! length property
// console.log(str1.length); // 10
// console.log(str1[0]); // J

// //! str.slice(startIndex, endIndex)
// console.log(str1.slice(0, 4)); // Java
// console.log(str1.slice(4)); // script
// console.log(str1.slice(-10, -6)); // Java
// console.log(str1.slice(-6, 10)); // script
// console.log(description.slice(0, 50) + "...");

// //! str.substring(startIndex, endIndex) : similar to slice, but do not accept -ve indexs
// console.log(str1.substring(0, 4)); // Java
// console.log(str1.substring(-10, -6)); // No output

// // ! str.substr(startIndex , length) : similar to slice, but its 2nd arguement is length
// console.log(str1.substr(4, 6)); // script
// console.log(str1.substr(-10, 4)); // Java

// // ! str.replace(searchValue , replaceValue)
// let str2 = "I love Python , Python has easy learning curve.";
// console.log(str2.replace("Python", "Javascript")); // I love Javascript , , Python has easy learning curve.

// // ! str.replaceAll(searchValue , replaceValue)
// console.log(str2.replaceAll("Python", "Javascript")); // I love Javascript , Javascript has easy learning curve.

// let username = "    John Doe     ";
// console.log(username);

// //! str.trimStart() : Removes the leading white space
// console.log(username.trimStart());

// //! str.trimEnd() : Removes the trailing white space
// console.log(username.trimEnd());

// //! str.strtrim() : Removes the leading and trailing white space
// console.log(username.trim());

// //! str.padEnd(maxLength , fillString)
// let phoneNo = "9876543210";
// console.log(phoneNo); // 9876543210
// console.log(phoneNo.slice(0, 6).padEnd(10, "X")); // 987654XXXX

// //! str.padStart(maxLength , fillString)
// console.log(phoneNo.slice(6).padStart(10, "X")); // XXXXXX3210

// //! str.charAt()
// let str4 = "Javascript";
// console.log(str4.charAt(0)); // J

// //! str.charCodeAt()
// console.log(str4.charCodeAt(0)); // 74
// console.log(str4.charCodeAt(1)); // 97

// //! str.toUpperCase()
// console.log(str4.toUpperCase()); // JAVASCRIPT

// //! str.toLowerCase()
// console.log(str4.toLowerCase()); // javascript

// //! str.includes()
// console.log(str4.includes("Javascript")); // true

// //! str.indexOf()
// console.log(str4.indexOf("a")); // 1
// console.log(str4.indexOf("b")); // -1

// //! str.split()
// let str5 = "React is library of Javascript";
// console.log(str5);

// console.log(str5.split());// ['React is library of Javascript']
// console.log(str5.split(""));// splits character wise
// console.log(str5.split(" "));// ['React', 'is', 'library', 'of', 'Javascript']
// console.log(str5.split("library"));// ['React is ', ' of Javascript']

//! TIMER FUNCTIONS

//! setInterval( callback , intervalTime )
let intervalID = setInterval(() => {
  console.log("Hiii");
}, 2000);

console.log("IntervalID is", intervalID);

//! setTimeout( callback , timeOut )
setTimeout(() => {
  console.log("Byee");
}, 12000);

setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval Stopped");
}, 8000);

//! PROMISE

const p1 = new Promise((resolve, reject) => {
    if(10>2){
        resolve("hello world")
    }
    else{
        reject("bye bye")
    }
})
console.log(p1)

p1.then((data) => {
    document.writeln(`<h3>$data</h3>`)
})

p1.catch((err) => {
    document.writeln(`<h3>$data</h3>`)
})

p1.finally((err) => {
    document.writeln(`<h3>$data</h3>`)
})

//! PROMISE WITH ASYNC AND AWAIT

const API_URL ="https://dummyjson.com/todos"

async function getTodos(url) {
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data) //{todos: Array(30), total: 254, skip: 0, limit: 30}
    
        displayTodos(data.todos) // array(30)
    }

    catch (err) {
        console.log(err);
        
    }
}
getTodos(API_URL)

function displayTodos(allTodos) {
  console.log(allTodos);

  allTodos.forEach((ele) => {
    let { id, userId, todo, completed } = ele;

    document.writeln(`
      <div class = 'todo'>
        <h4>${todo}</h4>
        <span>${completed ? "Completed" : "Pending"}</span>
      </div>
      `);
  });
}
