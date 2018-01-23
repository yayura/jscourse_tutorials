'use strict'
//Simple function
//#####
// function getUser1(id1){
//     //return simple object
//     return {id1: 1 };
// }
//                        //call getUser func
// //and put result
// //into user var         
// let user1           =      getUser1(1);
// console.log(user1);

//So do function async
//#####
// async function getUser(id){
//     return { id: 1 };
// } 
// let user = getUser(1);
// console.log(user);

//its return promise, so we can use .then\
async function getPizza(id) {
   return {id:1};
}
async function main(params) {
    let user = await getPizza(1);
    console.log(user);
}


main();

//await ставится перед вызовом любой функции которая возвращает обещание

