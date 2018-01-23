// //npm install node-fetch - библиотека для отправки запросов 
// //имортируем ее :
// const fetch = require ('node-fetch');
// function getUser(id) {
//     //тут запрашиваются все давнные которые могут быть доступны
//     fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
//     //а тут они парсятся уже в json 
//         .then(response => response.json());
//  }
//  async function main(params) {
//      let user = await getUser(1);
//      console.log(user);
//  }


//  main();

// а вот как надо 

//имортируем ее :
const fetch = require('node-fetch');
const dataService = {
    getUser: async (id) => {
    //тут запрашиваются все давнные которые могут быть доступны
    try {
        let response = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
        //а тут они парсятся уже в json 
        let data = await response.json();
        return data;

    } catch (error) {
        throw new Error('Не удалось получить данные от сервера');
    }
}
}
async function main() {
    try {
        let user = await dataService.getUser(1);
        console.log(user);
    } catch (error) {
        console.log(error);
    }


}
main();

