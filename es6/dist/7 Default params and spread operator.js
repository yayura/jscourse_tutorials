'use strict';

//Default params

function greet() {
    var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello world';

    console.log($greeting);
}

greet('Hello');
greet(); //was undefined, now Hello world


//Spread operator - оператор расширения 

var args1 = [1, 2, 3];
var args2 = [4, 5, 6];

function test() {
    console.log(args1 + '+' + args2);
}
test();
//test.apply(null,args);
//test(args1,args2);
//test(...args1,...args2);//... its a spread operator