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







