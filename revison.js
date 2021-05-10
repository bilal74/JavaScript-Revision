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
// -------------

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
// ----- 

// some 
// some - give multiple Values
// gives new array 
// agr ek bhi true h to true milega
// const prices = [100,200,250,300,500,800];
// // console.log(prices.some((currVal) => currVal < 50));
// console.log(prices.some((currVal) => currVal < 1500));
// ----------

// every
// every - gives boolean
// sb true hoga tbi value true hogi
// const prices = [100,200,250,300,500,800];
// console.log(prices.every((currVal) => currVal < 400));
// || &&
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
              
// Map() - gives new array - gives boolean
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
//                 return currElem > 20;
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
// -ve value will consider 0;

// substr(start, length)
// let str1 = "Today is Thursday";
// // let sub1 = str1.substr(1,5);
// let sub1 = str1.substr(4,-2);
// console.log(sub1);


// ***************************************************************
// Date 29/04/21 Class - 6 
// ***************************************************************

// Ques. 
// Display only 50 char 
// sol. 
// let temp1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae cum. Laudantium officiis aut necessitatibus aspernatur! Debitis voluptas repellat commodi distinctio possimus. Exercitationem labore eligendi dolore? Nesciunt veniam, perferendis officia, eaque asperiores iste repudiandae, accusamus deleniti libero saepe ipsum tenetur sequi voluptas excepturi doloremque omnis dolorem a quibusdam. Iusto earum obcaecati consequuntur ullam amet aliquam fugit, voluptatem, reiciendis laborum nihil magni deleniti minus accusantium dolores eaque? Laboriosam, ab, quas, assumenda placeat aperiam earum ex quod facere magni vel sequi accusantium! A nemo eum, fugit vitae cupiditate veniam aliquid enim vel sapiente explicabo hic quos eius, laborum eos, esse quas recusandae!";

// let ans1 = temp1.slice(0,50);
// console.log(ans1);
// console.log(ans1.length);
// ---------------------------- 

// replace(search, replace) - return new string

// let para1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
// let replace1 = para1.replace('amet', 'Sourav');
// console.log(replace1);
// console.log(para1);
// --------------------------- 

// Extraction Strings Characters 

// CharAt(position) - Method 
// let name1 = "Ravindra Pratap Singh";
// console.log(name1.charAt(2));

// charCodeat() - Method - Return UTF-16 Code
// let name1 = "Ravindra Pratap Singh";
// console.log(name1.charCodeAt(1));
// ---------- 

// Ques. return the unicode value of the last char in a string
// sol. 
// let name1 = "Ravindra Pratap Singh";
// let lastChar = name1.length - 1;
// console.log(name1.charCodeAt(lastChar));
// --------------- 

// Property Access 

// let name1 = 'Rishab Rajput';
// console.log(name1[0]);
// --------------------------- 

// Upper / lower case 
// let name1 = 'Ravindra Pratap Singh';
// let name2 = 'Prasang Chouksey';

// console.log(name1.toLowerCase());
// console.log(name2.toUpperCase());
// --------------- 

// concat() 
// let fname = "Bilal";
// let lname = "Khalid";

// console.log(fname+lname);
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname));
// console.log(`${fname} ${lname}`);

// ------------------------- 

// trim() - Remove whitespaces

// let name1 = "        Prasang             Chouksey        ";
// console.log(name1.trim());

// let y = name1.replace(/\s+/g," ");
// // let y = name1.replace()
// // console.log(y);
// console.log(y.trim());
// ----------------------- 

// Split() - Str convert array 

// var temp1 = "a,b c | d,e";
// console.log(temp1.split(","));
// console.log(temp1.split(" "));
// console.log(temp1.split("|"));
// ---------------------------------------- 

// ***************************************************************
// Date 30/04/21 Class - 7 
// ***************************************************************

// Date and time 
// 1 Jan 1970 12:00 am 

// Creating Date 
// new Date();
// new Date(year, month, day, hours, minutes, seconds, milisecond);
// month 0-11

// new Date(milisecond);
// new Date(date String);
// ----------------------- 

// let date1 = new Date();
// console.log(date1);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// ------------------ 

// console.log(Date.now());
// -------------
// var d = new Date(2021,4);
// var d = new Date(2021);
// var d = new Date(2021,4,8);
// console.log(d.toLocaleString());
// ----------

// var d = new Date(56446467587587);
// console.log(d.toLocaleString());
// ----------- 

// new Date(year, month, day, hours, minutes, seconds, milisecond);
// const curdate = new Date();
// console.log(curdate.getMonth());
// ----------------------------- 

// Math Object in JS 

// console.log(Math.PI);

// let num1 = 2.301;
// let num1 = 2.801;
// console.log(Math.round(num1));

// console.log(Math.pow(2,3));
// console.log(2**3);

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(26));

// console.log(Math.abs(-26));

// console.log(Math.floor(2.6));
// console.log(Math.ceil(2.6));

// console.log(Math.min(1,5,3,8));
// console.log(Math.max(1,5,3,8));

// console.log(Math.trunc(4.2));
// console.log(Math.trunc(-4.1));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// console.log(Math.trunc(Math.random()*10));


// ***************************************************************
// Date 4/05/21 Class - 8 
// ***************************************************************
// Meeting Record 

// Alert, Prompt, Confirm 

// Alert: 
// alert("Prasang");            (In browser)

// Prompt
// let name = prompt("What is your name");
// console.log(name);
// let name = prompt("What is your name");
// let name = prompt("What is your name ?", "Sourav Dey");

// Confirm 
// let delete1 = confirm("Do you really want to delete?");
// if(delete1){
//         console.log("Deleted");
// }
// else{
//         console.log("Not deleted");
// }
// ---------------

// DOM and BOM 

// window.location
// window.location.href
// location.href
// --------------- 

// Window:
// DOM: Document Object Model 
// BOM : Browser Object Model 

// DOM: document, body
// BOM: Navigator, screen, location, frames, history, XML http request 
// JS: Object, Array, Functions 

// ---------------------------- 
// document.body.style.background = "Blue";
// document
// document.documentElement

// document.head
// document.body
// document.body.childNodes 
// document.childNodes.length 

// hasChild - boolean 
// firstchild
// lastChild
// siblings
// nextSiblings
// previousSiblings
// -------------- 


// ***************************************************************
// Date 5/05/21 Class - 9 
// ***************************************************************
// Meeting Record 

// Event Listener 
// Event : It is a Signal. 

// Browser Events  
// click
// context menu (right click )
// mouseover / mouseout (mouse bahar nikal)
// mouseup / mouse down (mouse press)
// mousemove 
// ------------------

// Timing Events 

// 1. Set setTimeout
// 2. Clear Timeout
// 3. SetInterval  
// 4.  clearInterval 

// setTimeout(function, milisecond) - 5 sec time - it will execute after 5 sec 
// setInterval - same as setTimeout - it will repeat 

// function greet(name, text){
//         // console.log(`Hello ${name} ${text}`);
//         alert(`Hello ${name} ${text}`);
//     }
//     setTimeout(greet, 3000, "Ravi", "Sir");
// ---------------------- 


// ***************************************************************
// Date 6/05/21 Class - 10 
// ***************************************************************
// Meeting Record 

// Objects 

// let bioData = {
//         fName : "Ravindra",
//         lName : "Pratap",
//         myAge : 23,
//         city : "Lucknow"
// }

// console.log(bioData);
// console.log(bioData.lName);


// let bioData = {
//         fName : "Ravindra",
//         lName : "Pratap",
//         myAge : 23,
//         city : "Lucknow",
//         getData : function(){
//                 console.log(`My name is ${bioData.fName} and my age is ${bioData.myAge}`)
//         }
// }
// // console.log(bioData.getData());
// bioData.getData();


// ==================================================
// var bioData = {
//         fName : "Ravindra",
//         lName : "Pratap",
//         myAge : 23,
//         city : "Lucknow",
//         getData (){
//                 console.log(`My name is ${bioData.lName} and my age is ${bioData.myAge} role ${role}`)
//         }

// }
// // console.log(bioData.getData());
// bioData.getData();
// var role = "Student";
// ======================================================

// Nested Object (Object within object)

// var bioData = {
//         myName : {
//                 fName : "Ravindra",
//                 lName : "Pratap"
//         },        
//         myAge : 23,
//         city : "Lucknow",
//         getData (){
//                 console.log(`My name is ${bioData.lName} and my age is ${bioDatamyAge}`)
//         }        
// }
// console.log(bioData.myName.fName);
// ----------------------------------------------- 

// What is "this" object 
// contain context 

// function myName() {
//         console.log(this.myName);
// }
// myName();

// var myName1 = 'Sourav';
// function myName() {
//         console.log(this.myName1);
// }
// myName();

// const obj = {
//         age : 24,
//         myName() {
//                 console.log(this);
//         }
// }
// obj.myName();

// const obj = {
//         age : 20,
//         name1 : "Sourav",
//         myName() {
//                 console.log(this.age);
//                 // console.log(this.name1);
//         }
// }
// obj.myName();


// ***************************************************************
// Date 7/05/21 Class - 11 
// ***************************************************************
// Meeting Record 

// With Arrow function 
// const obj = {
//         age : 20,
//         name1 : "Sourav",
//         myName : () => {
//                 // console.log(this.age);
//                 // console.log(this.name1);
//                 // console.log(name1);
//                 // console.log(this.age);
//         }
// }
// obj.myName();
// -------- 
 
// With string literals 
// var bioData = {
//         myName : {
//                 fName : "Rishab",
//                 lName : "Rajput"
//         },        
//         myAge : 25,
//         city : "Nashik",
//         getData (){
//                 console.log(`My name is ${this.myName.fName} and my age is ${this.myAge}`)
//         }        
// }
// // console.log(bioData.myName.fName);
// bioData.getData();
// ----------- 

// Ecma Script Continue 

// Destructuring 

// Array Destructuring 

// const bioData = ['Sourav', 'Dey', 24];
// // let fName = bioData[0];
// // console.log(fName);

// let [fName,lName,age, city="Kolkata"] = bioData;
// // console.log(lName);
// console.log(city, fName);

// -------------------- 

// Object Destructuring 

// const bioData = {
//         fName : 'Sourav',
//         lName : 'Dey',
//         state : 'West Bengal'
// }
// let {fName,lName,state, city="Kolkata"} = bioData;
// console.log(fName);
// console.log(typeof(city));

// -----------------
// Object Property

// We can use dynamic Property 
// const bioData = {
//         fName : 'Sourav',
//         [20 + 4] : 'This is my age'
// }
// console.log(bioData);
// -------------- 

// If key and value both are same then no need to write value 
// let myName = "Bilal";
// let myAge = 24;
// const bioData = {myName, myAge};
// console.log(bioData);
// ----------- 

// Spread Operator 

// const colour1 = ['Red', 'Black', 'Blue','Yellow'];

// const favColour = [...colour1,'Violet', 'Green'];
// console.log(favColour);
// ----------------------------- 

// ES7 - 2016
// 1. ** 
// console.log(3**2);

// 2. include - gives boolean 

// const colour1 = ['Red', 'Black', 'Blue','Yellow'];
// // const present1 = colour1.includes('Red');
// const present1 = colour1.includes('red');
// console.log(present1);
// ------------------------------- 

// ES8 - 2017
// 1. String padding
// 2. Object values 
// 3. Object Entries
// 4. Async Function

// const name1 = "Prashant";
// const name2 = "Rishab";
// // console.log(name1.padStart(15));
// console.log(name2.padEnd(15));
// ------ 

// Object to Array 
// const person = {name1 : "Rishab", age : 24};
// // console.log(Object.values(person));
// console.log(Object.entries(person));
// --- 

// Array to Object - ES-10
// const person = {name1 : "Rishab", age : 24};
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));
// -------------- 

// ES9 - 2018

// const colour1 = {a:'Red', b:'Black', c:'Blue',d:'Yellow'};

// const favColour = {...colour1,e:'Violet', f:'Green'};
// console.log(favColour);
// ----------------- 

// ES10 - 2019
// flat 
// const arr = [
//         ['one', 'two'],
//         ['three', 'four'],
//         ['a', 'b',['c','d',['e']]]
// ];
// // console.log(arr.flat(3));
// console.log(arr.flat(Infinity));
// console.log(arr.flat(arr.length));
// ---------------- 

// ES-11 2020
// BigInt 
// let num1 = Number.MAX_SAFE_INTEGER;
// console.log(num1);

// console.log(9007199254740991 + 24);
// console.log(9007199254740991n + 24n);
// ------- 

// Nullish Coalescing - null/undefine

// const one1 = null ?? 'String';
// const one1 = "Hello" ?? 'String';
// const one1 = NaN ?? 'String';
// console.log(one1);
// --------------

// ES2014 
// "use strict"
// x = 3.14;
// console.log(x);
// --------------------  












