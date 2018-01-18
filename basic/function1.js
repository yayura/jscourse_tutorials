//simple function without args and return a value 

function hello(){
    console.log("no arg and no value");
}

hello();

// we are going to create function with arg 

function sum (a,b)
{
    var c=a+b;
    console.log(c);
}
//sum(a,b); ReferenceError: a is not defined

sum(4,5);

// fuctions with arguments and return value 

function sum (a,b){
    var c = a+ b; 
    return c; 
}
console.log(sum(7,5));
