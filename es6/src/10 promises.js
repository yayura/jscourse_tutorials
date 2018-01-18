'use sctrict'

//Simpliest promise 
// var myPromise = Promise.resolve('Foo');
// myPromise.then((res)=>console.log (res));


var myPromise = new Promise (function(resolve,reject){
    setTimeout(()=>resolve(4),
     1000);
});

myPromise.then((res)=>{
    res +=3;
    console.log(res);
});

//Use promise to fetch data from API

function getData(method, url){
    //Its return 
    return new Promise(function(resolve, reject){
        //create request
        var xhr = new XMLHttpRequest();
        //open connection 
        xhr.open(method, url);
        //load 
        xhr.onload = function(){
            if (this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else{
                reject({
                    status:this.status,
                    statusText :xhr.statusText
                });
            }

        }
        //catch error
        xhr.onerror = function (){
            reject({
                status:this.status,
                statusText :xhr.statusText
            }); 
        }
        //
        xhr.send();
    });
}
//launch at first we get 'data'
getData('GET', 'http://jsonplaceholder.typicode.com/todos')
//then we get 'data'
.then(function(data){
//and parse it    
let todos =JSON.parse(data);
//create blank output    
let output='';
/// fill form in circle with parsed(todos) data (data) 
    for(let todo of todos){
        output += `
        <li>
        <h3>${todo.title}</h3>
        <p>Completed^ ${todo.completed}</p>
        </li>
        `;
    }
//Paste it in template6 in html
document.getElementById('template6').innerHTML = output;
   
//catch the errors
 
}).catch(function(err){
console.log(err);
});

