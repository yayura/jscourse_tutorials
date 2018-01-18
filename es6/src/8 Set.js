'use strict'

//Set Set – 
//коллекция для хранения множества значений, 
//причём каждое значение может встречаться лишь один раз.

let myArray = [11, 22, 33, 45, 55];//if some empty see comments
let mySet = new Set(myArray);


console.log(myArray); //empty is empty
console.log(mySet); //empty is undefined 



mySet.add('100');

//Added in Set not in array
console.log(myArray); //5
console.log(mySet); //6,  100 is the text string 

//put an object
mySet.add({a:1, b:2});
console.log(myArray); //5
console.log(mySet); //7 (+ 100 + Object {a,b})

//SIZE 
console.log(mySet.size);


//We can loop through (перебор)
mySet.forEach(function(val){
    console.log(val);//display all one by one
});


//Delete

mySet.delete(22);
console.log(myArray); //5
console.log(mySet); //6 , 22 was deleted

//Clear
mySet.clear();
console.log(mySet); //its clear




