'use strict'
//Иными словами, WeakMap работает только на запись (set, delete) 
//и чтение (get, has) элементов 
// по конкретному ключу, а не как полноценная коллекция. 
//Нельзя вывести всё содержимое WeakMap, нет соответствующих методов.
let carWeakMap = new WeakMap();

let key1 = {
    id:1 
}
let car1={
    make:'Honda',
    model:'Civic'
}

carWeakMap.set(key1,car1);

let key2 = {
    id:2 
}
let car2={
    make:'Hon222da',
    model:'Ci222vic'
}
carWeakMap.set(key2,car2);
console.log(carWeakMap);
