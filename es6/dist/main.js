'use strict';

//Set 

var myArray = [11, 22, 33, 45, 55]; //if some empty see comments
var mySet = new Set(myArray);

console.log(myArray); //empty is empty
console.log(mySet); //empty is undefined 


mySet.add('100');

//Added in Set not in array
console.log(myArray); //5
console.log(mySet); //6 

//put an object
mySet.add({ a: 1, b: 2 });
console.log(myArray); //5
console.log(mySet); //7 (+ 100 + Object {a,b})