// break - come out from the loop conditionally

// display table ^ but come out from loop and dont display result if we got 50 anywhere in runs

var number = 8 

var j = 10;

for(i=1;i<=10;i++){
if(j*i===50){
    console.log("breake!");
    break;
}
else {
    console.log(j*i);
}
}

