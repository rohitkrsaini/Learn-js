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

