"use strict";
    //1 the class 
class User{
    constructor(username, email, password){
        //2 the Property
        this.username = username;
        this.email =email;
        this.password=password;        
    }
//6 create static method - it the same no matter what 
    static countUsers(){
        console.log('There are 50 users');
    }

    //3 The method
    register(){
        console.log(this.username+' is a now register username');
    }
}

//4 create varible (object) from class 
//let bob = new User('bob', 'bob@email.com', 'password');
//5 use this object - call the register method
//bob.register();

// 7  call the static method 
User.countUsers();

// 8 Extended Classes расширить класс
class Member extends User {
    constructor (username, email, password, memberPackage){
        
        super(username, email, password);//9to set up property again from previous class we use 
        this.package = memberPackage;
    }
    getPackage(){
        console.log(this.username + "is subscribe to " + this.package);
    }
}

///10Set up oibject from class 
let mike = new Member('mike', 'meail@mail.com','password123', 'password');

//11 call 
mike.getPackage();

//12 We can use from parent class 
mike.register();

mike.countUsers();
