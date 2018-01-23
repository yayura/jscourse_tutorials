// если функция принимает один параметр то можно не заключать его в скобки

let squere = x => x * x;

console.log(squere(3));


//функция которая не принимает параметров 
let giveMeAnswer = function () {
    return 42;
};
let log = () => console.log('fssd');
console.log(giveMeAnswer());

//переделаем в стрелочную 
let giveMeAnswer2 = () => 42;
console.log(giveMeAnswer2());
log();
let multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(23, 3));

//если функция вызывает литерал обьекта 

let getPerson = function () {
    return { name: 'John' } //возвращает обьект 
};
console.log(getPerson());

let aGetPerson = () => ({ name: 'Bill' });
console.log(aGetPerson());

//iif - immidiatly invoked function expression 
//(сразу же вызываемая функция {}) ()
(function () {
    console.log('EIFI');
})();

(() => console.log('EIFE arrow'))();
//работа с массивами 
let numbers = [1,2,3,4,5,6,7,8,9,10] ; //есть массив задали его элементы

let sum = 0;// зададим переменную для суммы

// используем forEach который есть у каждого массива и его перебирает  

numbers.forEach(function(num){ // те первый раз num будет 1 потом 2 и тд
    sum += num;// вот так мы их прибавим к sum 
});
console.log(sum);
sum=0;
numbers.forEach(element => {
    sum+=element
});
//возведем в кводрат кадый элемент, для этого используем map который бере каждый элемент и чтото с ним делает 
let squared = numbers.map(n => n*n);

console.log(squared);

//Как происходит работа с обьектами? Создадим *литерал* обьекта и сохраним его в переменную person


let person = {
    name: 'Bob',
    greet:function (){
        console.log('in that func'+that);
        var that = this;
//как раз вот это и решает стрелочная функция        
        setTimeout(function(){
        console.log("Hello my neme is "+ that.name);
       
        console.log(that);
// тут ссылка  на this ведет на глобальную область видимости, поэтому ее делают this = that чтобы сослаться на область видимости родителя 
// стрелочная функция же позволяет внутрь
// замыкание
    }, 2000);

    }
};

person.greet();