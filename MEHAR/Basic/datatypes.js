console.log("Data types");

//var with undefined
var aew; //allows without intialization
console.log( "aew value is :" +aew);

// declare a variable using let keyword
let a = 45 ; 
console.log( "a value is : " +a);
console.log(typeof(a)); //number 

let an = 45.211 ; 
console.log( "an value is : " +an);
console.log(typeof(an)); //number
 //it won't allow if we want to declare it with the same variable name again 
 //excample let a= 24;

//Let with undefined
let new1 ;
console.log ("new1 value is : " +new1);
console.log(new1);

//undefined with numerical operator
let add = new1 + an ;
console.log(add); //output is NaN

// adding string and number values 

console.log ("new1 value is : " +new1);

//declare a variable using var keyword
var ab = 30 ;
console.log("ab value when decalring first time: " +ab);
//[rint type of the variable
console.log(typeof(ab));
// var allows redeclaring the variable with same name
var ab = "34";
console.log("ab value when decalring second time: " +ab);
console.log(typeof(ab));

// adding string and number values 

var ab1 = "Hello";
console.log("ab1 value time: " +ab1);
console.log(typeof(ab1));

// number + string
let stringn =  ab + ab1;
console.log("stringn value time: " +stringn);

//string + number
let stringn1 =  ab + ab1;
console.log("stringn1 value time: " +stringn1);

//  "number" + number 

var ab2 = "34";
var ab4= 34;
let stringn2 =  ab2 + ab4;
console.log("stringn2 value time: " +stringn2);

// number +  "number" 
let stringn3 =   ab4 + ab2;
console.log("stringn3 value time: " +stringn3);




//array declaration and type of array with numbers
const Marks1 = [78,84,87, 98,89];
console.log(typeof(Marks1)); //output is Object

//array declaration and type of array with strings

const Fruits = ["banana" , "Orange" , "grapes"] ;
console.log(typeof(Fruits));

//array declaration types
const Marks = new Array(40, 100, 1, 5, 25, 10);
const MarksNew = [40, 100, 1, 5, 25, 10];
//declaring json object and its type
const Person = { name : "Priyanka", age : 29 , company : "S&P Global"};
console.log(typeof(Person));



