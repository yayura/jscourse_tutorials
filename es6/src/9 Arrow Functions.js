'use sctrict'
// create func which take in a prefix
function Prefixer(prefix){
    this.prefix=prefix;
}

//function.property.property

Prefixer.prototype.prefixArray = function(arr){
    // //its a walkaround to this, because it was undefinig now
    // let that = this; but its not needed with arrows
    //prototype returns arr parameter with function  
    return arr.map((x)=>{
        console.log(this.prefix + x)
    });
} 
//create new prefixer
let pre = new Prefixer ('hello ');
// launch prototype
pre.prefixArray(['brad','Jeff']);



// let add = function (a,b){
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

//or 
let add = (a,b) => {
    let sum = a+b;
      console.log(sum);
    return false; 
}


add(2,2);