//There is function that get comments from users posts. here is it without any abstraction on js
//Pre requore
const { getUser, getPosts, getComments } = require('./db');
//Callback hell - many callback fuctions  
//and function is
getUser(1,(error, user)=>{
    //first we check error 
    if(error) return console.error(error);
    //if not we check Posts 
        getPosts(user.id,(error,posts)=>{
            //and check error in this 
            if(error) return console.error(error);
            //if none we get comments 
                getComments(post[0].id,(error, comments)=>{
                    //and at first we check for errors too
                    if (error) return console.error(error);
                        //And if none we output the comments
                        console.log(comments);
                });
        });
});

//And we can make this Promises to looks more better and simple. 
//Author of video thinks that its so elegant method of writing async code
//It like async code was written like sync code
getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => getComments(post[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));
//Alternative is generators with pauses, it works like thisL code - pause and return promise - continue code
//co library

//...

