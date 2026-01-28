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
 