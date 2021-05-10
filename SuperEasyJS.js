// ***************************************************************
// Date 8/05/21 Class - 12 
// ***************************************************************
// Meeting Record 

// Event Propagation 

// Event bubbling 
// Event Capturing 

// Check index file (Event propagation)
// ------------------ 

// Higher Order Function 
// function takes another function 

// Call back function 

// Calculator 
// var add = (a,b) => {
//     return a+b;
// }
// const mult = (a,b) => {
//     return a*b;
// }
// // console.log(add(5,10));
// // console.log(mult(5,10));
// const calculator = (num1, num2, operator) =>{
//     return operator(num1, num2);
// }
// // console.log(calculator(5,10,add));
// console.log(calculator(5,10,mult));
// --------------------------------------- 

// Hoisting in JS 

// x=5;
// console.log(x);
// var x;
// ----

// console.log(myName);
// let myName;
// myName = "Sourav";

// console.log(myName);
// var myName;
// myName = "Sourav";

// 1. var myName;
// 2. log
// 3.  myName = "Sourav";
// ------------- 

// Scope Chain and Lexical Scoping 
// let x = 25;
// console.log(x);
// ------------------------- 

// Lexical Scoping
// let name1 = "Abhinav ";

// const first = () => {
//     let b = "How are you ";

//     const second = () =>{
//         let c = "I am good ";
//         console.log(name1+b+c);
//     }
//     second();
//     // console.log(name1+b+c);
// }
// first();
// ------ 

// var name1 = "Rishab ";

// const first = () => {
//     var b = "How are you ";

//     const second = () =>{
//         var c = "I am good ";
//         console.log(name1+b+c);
//     }
//     second();
//     // console.log(name1+b+c);
// }
// first();
// ----------------------- 

// Clousure 
// const outerFn = (a) => {
//     let b = 10;
//     const innerFn = () =>{
//         let sum = a+b;
//         console.log(`The sum is ${sum}`);
//     }
//     innerFn();
// }
// outerFn(20);
// -------------------- 

// const outerFn = (a) => {
//     let b = 10;
//     const innerFn = () =>{
//         let sum = a+b;
//         console.log(`The sum is ${sum}`);
//     }
//     return innerFn;
// }
// let final1 = outerFn(20);
// console.log(final1);
// // console.log(final1());
// final1();
// console.dir(final1);     (try this in browser)
// ---------------------

// Synchronous and Asynchronous 

// Synchronous
// 1 work = 20 min 
// 2 work = 5 min 

// const fun2 = () => {
//     console.log('Function 2 is called');
// }

// const fun1 = () => {
//     console.log('Function 1 is called');
//     fun2();
//     console.log('Function 3 is called');
// }
// fun1();
// ------------- 

// Asynchronous
// 1 work = 20 min 
// 2 work = 5 min 

// const fun2 = () => {
//     setTimeout(() =>{
//         console.log('Function 2 is called');
//     }, 3000);
// }

// const fun1 = () => {
//     console.log('Function 1 is called');
//     fun2();
//     console.log('Function 3 is called');
// }
// fun1();
// ----------------------- 
// ***************************************************************
// Date 10/05/21 Class - 13 
// ***************************************************************
// Meeting Record 

// Currying 
// function sum(num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// sum(5)(2)(3);
// sum(5,2,3);
// ----- 

// function sum(num1){
//     // console.log(num1);
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }
// sum(5)(2)(3);
// ---------------

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(5)(2)(3);
// ---------------------------------

// CallBack hell 
// setTimeout(() =>{
//     console.log(`1st work is done`);
//     setTimeout(() =>{
//         console.log(`2nd work is done`);
//         setTimeout(() =>{
//             console.log(`3rd work is done`);
//         },2000);
//     },2000);
// },2000);
// ---------------------- 

// We can use Promises 
// Error Handling
// API 
// JSON 
// AJAX 
// Prototype 
// Binding / call bind
// Symbol


















