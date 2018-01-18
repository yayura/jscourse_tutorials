//continue : skip remaning part of the loop 

// Display table but in result if we are getting any number multiple of 10 then dont display it 

var j = 10;

for (i=1;i<=10;i++){
        if ((j*i)%10==0)
        {
            console.log("TEST!!");
            continue
           
        }
    console.log(j*i);
 }
