// Date 23/04/21 Class - 1 
// ************************************************

// Values and Variables in JS 

// var
// let

// var name = 'Bilal';
// var age = 24;
// var name1 = "Bilal Khalid";
// console.log(name);
// console.log(age);

// -----------------------
// Data Types in JS 

// undefined
// Boolean
// Number
// String

// BigInt (Advance JS Ecma Script)
// Symbol (Advance Js)

// var myName = "Bilal";
// var myAge = 24;
// var status = true;
// var x;
// console.log(myName);
// console.log(myAge);
// console.log(status);
// console.log(x);

// ---------------------------
// DataTypes Practice

// 1. console.log(10+"20");
// 2. console.log(9-"5");
// 3. console.log(9*"5");
// 4. console.log("Java" - "Script");
// 4. console.log("Java" + "Script");
// 5. console.log(" " + " ");
// 6. console.log(0 + " ");
// NaN - Not a number

// console.log(true+true); (1+1)
// console.log(true+false); (1+0)
// console.log(false + true);(0+1)
// console.log(false - true);(0-1)

// D/f b/w null and undefined 
// D/f b/w var amd let / const 

// ------------------------------------------------


// Assignment Operator 
// var x = 5;
// var y = 6;

// Arthimatic Operators 
//  5           +           10
// Operand   Operator    Operand

// console.log(3+3);
// console.log(3*4);
// console.log(3-4);
// console.log(3/4);
// console.log(Math.floor(3/4));
// console.log(27%4);

// Increment and Decrement Operator
// x++ (+1), x--, ++x, --x 
// var x = 3;
// var y = x++;
// console.log(x);
// console.log(y);

// var x = 3;
// var y = ++x;
// console.log(x);
// console.log(y);

// Comparision Operator 
// ==, ===, !=, >, < 
// var a = 30;
// var b = 20;

// console.log(a == b);
// console.log(a > b);

// var a = 10;
// var b = "10";
// console.log(a === b);

// Logical Operator 
// And(&&), OR(||) , (^) (Xor - example)

// -------------------------
// 3**3 
// console.log(3**3); 3x3x3

// console.log(5 + "Rishab");
// console.log(6 + "Prasang");
// ---
// W.a.p to swap two numbers ?

// var a = 5;
// var b = 10;

// var c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);


// W.a.p to swap two numbers without using third variable? 
// var a = 5;
// var b = 10;

// a = a+b;    //15
// b = a-b;    //15-10 = 5
// a = a-b;    //15-5

// console.log(a);
// console.log(b);

// d/f b/w == & === ?
// -----------------------------

// Control System 
// if-else

// var weather = 'Sunny1';

// if(weather == 'Sunny'){
//     console.log("Good Weather");
// }else{
//     console.log("Bad Weather");
// }

// -----------------------
// W a p to check the year is a leap year or not ? 
// Leap year condition 
// divided by 4
// !divided by 100
        // OR 
// divided by 400

// var year = 2020;
// if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//     console.log("This is a leap year");
// }
// else{
//     console.log("This is not a leap year");
// }

// ***************************************************************
// Date 24/04/21 Class - 2
// ***************************************************************

// What is truthy and falsy values in JS 
// 0, "", undefined, null, Nan, false 
// var score = 0
// if(score = 5){
//         console.log("Falsy")
// }
// else{
//         console.log("Truthy");
// }

// Conditional (ternary) operator 
// var age = 19;
// if(age >= 18){
//         console.log("You are eligible to vote");
// }
// else{
//         console.log("You are not eligible to vote");
// }
// -------------- 
// if-else updated version 
// variableName = (condition) ? value1:value2; 

// var age = 17;
// console.log((age >= 18) ? "You can vote" : "You can not vote");


// Switch Statement 
// if()
// else if 
// else if 
// else  

// var area = "square"; 
// var PI = 3.14, l=5, b=4, r=3;

// switch(area){
//         case 'circle':
//                 console.log("Area of circle is : " + PI*r**2);
//                 break;
//         case 'square':
//                 console.log("Area of square is : " + l*l);
//                 break;

//         default:
//                 console.log("Please enter valid data");
// }

// for loop
// for(var i=1; i<=5; i++){
//         console.log("Altaf");
//         console.log("Prashant");
// }

// while loop
// var i=1;
// while(i<=5){
//         console.log("Sourav Dey");
//         console.log("Sourav Ghosh");
//         i++;
// }

// Do-While loop 
// var num = 20;
// do{
//         console.log(num);
//         num++;
// }while(num<=25);

// W a p to print table of given number ?
// 5 X 1 = 5
// 5 X 2 = 10

// var num = 5;
// for(var i=1; i<=10; i++){
//         var ans = num * i;
//         console.log(num + " " + "X"+ " " + i + " " + "=" + " " + ans);
// }


// ***************************************************************
// Date 26/04/21 Class - 3
// ***************************************************************

// Functions 
// syntax :
// function functionName() {
//         statement;
// }

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum(a,b){
//         var total = a+b;
//         console.log(total);
// }
// sum(10,100);
// sum(10,40);
// sum(4,88);

// DRY - Do not repeat youself 

// Return 
// function sum(a,b){
//         return total = a+b;
// }
// // sum(10,100);
// console.log(sum(1,9));

// Anonymous function 
// var sum = function(a,b){
//         return total = a+b;
// }

// var temp = sum(15,25); 
// var temp1 = sum(10,20);
// // temp = 40
// console.log(temp);
// console.log(temp1);
// console.log(temp > temp1);

// ------------------------------------------------ 
// ECMA
// JS - 1995
// ECMA - 1997
// 2015 - ECMA Script 6 / ES - 6
// 2016 - es 7
// 2020 es - 11 

// let vs var vs const

// var name1 = "Bilal";
// // console.log(name1);
// name1 = "Ravi";
// console.log(name1);

// let name1 = "Bilal";
// // console.log(name1);
// name1 = "Ravi";
// console.log(name1);

// const name1 = "Bilal";
// // console.log(name1);
// name1 = "Ravi";
// console.log(name1);
// ---- 

// var : Function scope/ Global
// let/const : Block Scope/ local
// if(){
//         let 
//         const
//         var 
// }

// -----------------
// var:
// function biodata(){
//         var firstName = "Bilal";
//         console.log("1 " +firstName);
//         if(true){
//                 var lastName = "Khalid";
//                 console.log("2 " +firstName);
//                 console.log("3 "+lastName);
//         }
//         console.log("4 "+lastName);
// }
// biodata();

// -------------
// let: 
// function biodata(){
//         let firstName = "Bilal";
//         console.log("1 " +firstName);
//         if(true){
//                 let lastName = "Khalid";
//                 console.log("2 " +firstName);
//                 console.log("3 "+lastName);
//         }
//         console.log("4 "+lastName);
// }
// biodata();

// const: 
// function biodata(){
//         const firstName = "Bilal";
//         console.log("1 " +firstName);
//         if(true){
//                 const lastName = "Khalid";
//                 console.log("2 " +firstName);
//                 console.log("3 "+lastName);
//         }
//         console.log("4 "+lastName);
// }
// biodata();

// -------------------------------------
// Default Parameter in fn (es-6)
// function sum(a,b=10){
//         return a+b;
// } 
// console.log(sum(5));
// ----

// Template literals 

// W a p to print table of given number ?
// 5 X 1 = 5
// 5 X 2 = 10

// var num = 5;
// for(var i=1; i<=10; i++){
//         var ans = num * i;
//         // console.log(num + " " + "X"+ " " + i + " " + "=" + " " + ans);
//         console.log(`${num} X ${i} = ${ans}`);
// }
// ---------------------- 

// Fat arrow fn 
// console.log(sum());
// function sum(){
//         let a=10; b=20;
//         let sum = a+b;
//         return `The sum of two numbers is ${sum}`;
// }
// console.log(sum());
// --------

// const sum = () => {
//         let a=10; b=20;
//         let sum = a+b;
//         return `The sum of two numbers is ${sum}`;
// }
// console.log(sum());

// const sum = () => {
//         let a=10; b=20;
//         return `The sum of two numbers is ${a+b}`;
// }
// console.log(sum());

// const sum = () => {
//         return `The sum of two numbers is ${(a=5) + (b=10)}`;
// }
// console.log(sum());

// const sum = () => `The sum of two numbers is ${(a=5) + (b=10)}`;
// console.log(sum());
// ------------------------------- 

// Array in JS 
// var friends1 = "Altaf";
// var friends2 = "Prashant";
// var friends3 = "Rishab";

// var friends = ['Altaf', 'Prashant', 'Rohan', 'Rishab', 11, true];
//    0        1          2          3

// var friends = new Array 

// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// for(var i=0; i<friends.length; i++){
        //         console.log(friends[i]);
        // }

        
// for in and for of loop 
// var friends = ['Altaf', 'Prashant', 'Rohan', 'Rishab', 11, true];

// for(let elements in friends){
        //         console.log(elements);
        // }
        // for(let elements of friends){
                //         console.log(elements);
// }

// for each loop 
// syntax : 
// arrayName.forEach(function(element, index, array)){
//         console.log(element);
// }

// friends.forEach(function(element, index, array){
        //         console.log(element + " index : "+index+ " " + array);
        // });
        
// Arrow fn 
        // friends.forEach((element, index, array) => {
                //         console.log(element + " index : "+index+ " " + array);
                // });
                
// ***************************************************************
// Date 27/04/21 Class - 4
// ***************************************************************
                
// indexof
// var friends = ['Altaf', 'Prashant', 'Sourav','Prathamesh', 'Sourav', 'Rishab'];
// console.log(friends.indexOf("Rishab"));
// console.log(friends.indexOf("Rishab1"));
// console.log(friends.indexOf("Sourav", 5));
// --------- 

// lastindexof
// console.log(friends.lastIndexOf("Sourav"));
// -----------------

// includes()           - contains
// return boolean 
// var friends = ['Altaf', 'Prashant', 'Sourav','Prathamesh', 'Sourav', 'Rishab'];
// console.log(friends.includes("Altaf"));
// console.log(friends.includes("Altaf1"));
// console.log(friends.includes("Altaf", 3));
// ---------------------

// find() method 
// const prices = [100,200,300,500,800];
// // price < 400
// const findElem = prices.find((currVal) => {
        //         return currVal < 400;
        // })
// const findElem = prices.find((currVal) => currVal < 400);
// console.log(findElem);            
// return only 1 element 

// console.log(prices.find((currVal) => currVal < 400));
// ---------------------------- 

// findIndex()
// console.log(prices.findIndex((currVal) => currVal > 400));
// ---------------------------- 

// filter 
// const prices = [100,200,250,300,500,800];
// console.log(prices.filter((currVal) => currVal < 400));
// ---------------------------- 

// Sort 
// const months = ['March', 'Jan', 'April', 'Sep', 'June'];
// console.log(months.sort());

// const array1 = [1,20,600,3000,1001];
// console.log(array1.sort());
// ------------------

// push ---- add
// const months = ['March', 'Jan', 'April', 'Sep', 'June'];
// const count111 = months.push('Dec');
// console.log(count111);
// console.log(months);
// ----------------------

// Unshift ---- add
// const months = ['March', 'Jan', 'April', 'Sep', 'June'];
// const count111 = months.unshift('Dec');
// console.log(count111);
// console.log(months);

// const num1 = [1,2,3,5];
// num1.unshift(4,6,);
// console.log(num1);
// ---------------- 

// pop() - remove last element
// const months = ['March', 'Jan', 'April', 'Sep', 'June'];
// const count111 = months.pop();
// // console.log(count111);
// console.log(months);
// --------------- 

// shift ()   - remove first item
// const months = ['March', 'Jan', 'April', 'Sep', 'June'];
// const count111 = months.shift();
// // console.log(count111);
// console.log(months);
// ------------------------

// Splice() 
// add / remove / modify 

// syntax :
// splice(start:delete:string);

// 1. Add dec in the end 
// 2. return value 
// 3. update Sep to feb 
// 4. Delete jan

// const months = ['March', 'Jan', 'April', 'Sep', 'June'];
// // 1.
// const first1 = months.splice(1,4,'Dec')
// // console.log(first1);
// console.log(months);
// ------ 
// 3.

// const indexOfMonth = months.indexOf('Sep');
// // console.log(indexOfMonth);
// const first1 = months.splice(indexOfMonth,1,'Feb')
// // console.log(first1);
// console.log(months);


// ***************************************************************
// Date 28/04/21 Class - 5
// ***************************************************************
              
// Map() - gives new array
// const array1 = [1,4,5,9,16];
// let newArr = array1.map((currElem, index, arr) => {
        //         return currElem < 5;
// });
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((currElem, index, arr) => {
//         return `Index No : ${index} and the value is ${currElem} belongs to ${arr}`;
// });
// console.log(newArr);
// ------------------------ 
// map is also chainable 
// we can attach reduce, sort, filter() etc.

// -------------------------- 

// Ques. Find the square root of each element in array (use map)
// const array1 = [4,9,16,25,26];

// sol. 
// let ans1 = array1.map((currElem) => Math.sqrt(currElem));
// console.log(ans1);

// Ques. Multiply each element by 2 and return only those elements which are greter that 20?
// map filter   
// sol. 

// let ans2 = array1.map((currElem) => {
//         return currElem * 2;
// }).filter((currElem) => {
        //         return currElem > 20;
// });

// let ans2 = array1.map((currElem) => currElem * 2).filter((currElem) => currElem > 20);
// console.log(ans2);
// --------------------------

// Reduce Method 
// 2D array single array 

// Accumulator
// Curent Value 
// Current Index
// Source array
// Sum, product, average 
// single value 

// const array1 = [4,9,1,2,6];
// let sum = array1.reduce((accumalator, currElem) => {
//         return accumalator += currElem;
// });
// console.log(sum);

// const array1 = [1,2,3];
// let sum = array1.reduce((accumalator, currElem) => {
//         return accumalator += currElem;
// },4);
// console.log(sum);

// const array1 = [1,2,3];
// let sum = array1.reduce((accumalator, currElem, index, arr) => {
//         return accumalator += index;
// },4);
// console.log(sum);
// ------------------------- 
// const arr = [
//         ['one', 'two'],
//         ['three', 'four'],
//                               ['three', ['one', 'two']]
// ];
// let flatArr = arr.reduce((accum, currVal) => {
//         return accum.concat(currVal);
// });
// console.log(flatArr);
// ----------------------------- 

// Strings 
// let str = "One";
// let str1 = 'One';

// String constrctor 
// let str2 = new String("Two");
// not recommended

// length 
// let name1 = "Rishab Rajput";
// console.log(name1.length);
// -------------- 

// escape characters 
// let str1 = "Today 'is' Thursday";
// let str1 = 'Today "is" Thursday';
// let str1 = "Today \"is\" Thursday";
// console.log(str1);

// indexof() 

// let str1 = "Today is Thursday";
// console.log(str1.indexOf("t"));
// console.log(str1.indexOf("T"));
// console.log(str1.indexOf("T",2));
// ---------- 

// lastindexof() 

// let str1 = "Today is Thursday";
// console.log(str1.indexOf("t"));
// console.log(str1.lastIndexOf("T"));
// console.log(str1.indexOf("T",2));
// ------------- 

// Search () 
// let str1 = "Today is Thursday";
// console.log(str1.search("T"));

// -----------------------------

// slice(start, end)
                        //  -2-1
// let str1 = "Today is Thursday";
        //     01234567
// let slice1 = str1.slice(1,10);
// let slice1 = str1.slice(5,-2);
// console.log(slice1);
// ----------------- 

// substring(start, end) 
// let str1 = "Today is Thursday";
// let sub1 = str1.substring(1,10);
// console.log(sub1);

// substr(start, length)
// let str1 = "Today is Thursday";
// // let sub1 = str1.substr(1,5);
// let sub1 = str1.substr(4,-2);
// console.log(sub1);


// ***************************************************************
// Date 29/04/21 Class - 6 
// ***************************************************************
// Meeting Record 


