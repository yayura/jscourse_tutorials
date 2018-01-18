'use strict'
//WeakSet – особый вид Set не препятствующий сборщику мусора удалять свои элементы.

let carWeakSet = new WeakSet();

let car1 = {
    mark: 'honda',
    model: 'Civic'
}

console.log(carWeakSet); // its empty

carWeakSet.add(car1);
console.log(carWeakSet); // added  
let car2 = {
    mark: 'ha',
    model: 'Civ111ic'
}
carWeakSet.add(car2);
console.log(carWeakSet); // added 

//Delete

carWeakSet.delete(car1);
console.log(carWeakSet); //car1 was removed 



