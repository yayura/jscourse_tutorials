//observable
function observe(observable,next,done){
for (let letter of 'TeXT'){
    next(letter);
}
done();
}

observe('TeXT', letter => console.log(letter), ()=> console.log(typeof 'e'));