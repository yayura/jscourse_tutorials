"use strict";


let  theString = 'Hello, my neme is JS';
//three Strings method in video : 
console.log("String methods");
//1 startWith();

    console.log(theString.startsWith("Hello"));
    //return true 
    console.log(theString.startsWith("llo"));
    //return false

//2 endsWith ()
    console.log(theString.endsWith(" JS"));
    //return true 
    console.log(theString.endsWith("notJS"));
    //return false

//3 includes ()
    console.log(theString.includes(", my"));
    //return true 
    console.log(theString.includes("notInclude"));
    //return false

console.log("Numbers methods(true/false)");

//Hex 
console.log(0xFF);
//Binary
console.log(0b010101010);
//Octal (8 eigth)
console.log(0o543);
//finite number
console.log(Number.isFinite());
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
//isNaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Infinity));
//isInteger
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(2));



