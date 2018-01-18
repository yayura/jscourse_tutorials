/*
We have a number, we need to check following conditions 
-Check if number is negative , display negative number
-if number is zero - display its 0 
if number is pozitive then check is even or odd 
*/

var inputNumber = 0;

if (inputNumber < 0) {
    console.log("negatibe");
}
else if (inputNumber % 2 == 0) {
    console.log("mode 2");
}
else if (inputNumber == 0) {
    console.log("equal zero");
}

else {
    console.log("ELSE its odd")
}

// its displayed first true condition 