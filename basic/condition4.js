/* 
We are going to take 1 input (marks)
    
    if marks is less than 0 or more than 100 its invalid marks 
    if marks are betwwen 0-30 , failed
    if marks are between 31-61,  pass 
    if mark are between 61-100, pass with honor 

    */

var marks = 99;

if (marks <0 || marks > 100){
    console.log("invlid num");
}
else if (marks>=0 && marks<=30 ) {
    console.log("failed");
}
else if (marks>=31 && marks<=61 ) {
    console.log("pass");
}
else if (marks>=61 && marks<=100 ) {
    console.log("with honor");
}


// => is arrow func , >= is operator 

// ||        is for or 
// && is for and 