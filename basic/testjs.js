for (i=0; i<10;i++){
    setTimeout(function(){
        console.log(this);

    }.bind(i),1000).;
}

//functions:
//call

//apply

//bind

//document.getElementById("test");

//Event.preventDefault() -canceled event 




