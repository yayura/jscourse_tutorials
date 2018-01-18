'use strict'

//// В ES-2015 появились новые типы коллекций в JavaScript: Set, Map, WeakSet и WeakMap.
//Map – коллекция для хранения записей вида ключ:значение.
//Map – коллекция записей вида ключ: значение
//лучше Object тем, что перебирает всегда в порядке вставки и допускает любые ключи.
let myMap =new Map([['a1','hello'], ['b2','bye']]);

console.log(myMap);

//map set

myMap.set('c3','TESTEESRGDE');

console.log(myMap);

//delete

myMap.delete('a1');
console.log(myMap); // it was deleted

//size
console.log(myMap.size); 