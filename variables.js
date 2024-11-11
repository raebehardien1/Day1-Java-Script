// Short Comment
/**Long coment */
// State variable one let allows to override variable
let firstname = "Raeesa"
console.log(firstname);
// State variable two allows variable to always stay the same
const firstnamename = "Raeesa"
// state variable three easy to overide and caalled out outside fucntion
var firstnamenamename ="Raeesa"

// Caling out numbers , booleans
let number1 = 10.5
number1=20 

// undefined
let name

console.log(`My name is ${name}`);
console.log("My log is " + name + number1);

// Arrays like lists in Python
let myArray = ['anything' ,2,true,'string']
console.log(myArray[0]);

// Camelcase -> myArray(always used in JS)
// Pascalcase ->MyArray
// kebabcase -> my-array(onlyi in use inn vue)

// Object literal - declare (make) an object similar to dictonaries in python
let table = {
    material:"wood",
    no_of_legs:4,
    occupied: true
}
// bracket
console.log(table[`material`]);

// dot notation
console.log(table.material);

// destructuturing
let {material ,occupy} = table //Wood
let {occupied} =table //wood
console.log(material);

//functions
// () ->parenthesis
// {} ->braces
// [] ->brackets
function greeting(a,b){
//  a&b are parameters
    console.log(`This is a greeting` + a+b);
    
}

// 3&4 are arguments
greeting(3,4)

// Operation =,-,*,/  below is all suppose to add 1 after it has run the code 
let num1 = 5 
// ++num1 pre decremnt
// num1++ post increment
// --num1 pre decremnt
// num1-- post decremnt
console.log(++num1);
console.log(--num1);
console.log(num1--);

console.log(6==`6`); //Check for  data type and if its true


// Lesson 2 Java Examples
let myString = "Something"
console.log(myString.length); //length determines how much characters the string above is 

console.log(myString.toLowerCase()); //make everything small letters 
console.log(myString.toUpperCase()); //make everything capital letters
 
//Converts strings to array 
let split = myString.split('')
console.log(split); //brackets each letter in the word something


// Combining things together
// Let split = myString.toLowerCase().split('')[0]
console.log(split); //brackets each letter in the word something


