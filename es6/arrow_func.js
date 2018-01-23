//simple function 
function add1(x,y) {
    return x+y;
}

//стрелочная функция будет записана так, а чтобы ее вызвать - присвоим ее переменной add
let add2 = (x,y) => x+y;

//вызовем ее

console.log(add1(1,2));

console.log(add2(2,3));

var myFunction = function () {
    console.log(this); // this = глобальное, [объект Window]
  };

  //myFunction();

  var myObject = {};
  myObject.myMethod = function () {
    console.log(this); // this = текущий объект { myObject }
  };

// /// _privateMethod 
// var Module = (function () {
//     var _privateMethod = function () {
  
//     };
//     var publicMethod = function () {
  
//     };
//   })();

// 

