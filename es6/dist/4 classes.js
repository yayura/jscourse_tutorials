"use strict";
//1 the class 

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(username, email, password) {
        _classCallCheck(this, User);

        //2 the Property
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //6 create static method - it the same no matter what 


    _createClass(User, [{
        key: 'register',


        //3 The method
        value: function register() {
            console.log(this.username + ' is a now register username');
        }
    }], [{
        key: 'countUsers',
        value: function countUsers() {
            console.log('There are 50 users');
        }
    }]);

    return User;
}();

//4 create varible (object) from class 
//let bob = new User('bob', 'bob@email.com', 'password');
//5 use this object - call the register method
//bob.register();

// 7  call the static method 


User.countUsers();

// 8 Extended Classes расширить класс

var Member = function (_User) {
    _inherits(Member, _User);

    function Member(username, email, password, memberPackage) {
        _classCallCheck(this, Member);

        //9to set up property again from previous class we use 
        var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email, password));

        _this.package = memberPackage;
        return _this;
    }

    _createClass(Member, [{
        key: 'getPackage',
        value: function getPackage() {
            console.log(this.username + "is subscribe to " + this.package);
        }
    }]);

    return Member;
}(User);

///10Set up oibject from class 


var mike = new Member('mike', 'meail@mail.com', 'password123', 'password');

//11 call 
mike.getPackage();

//12 We can use from parent class 
mike.register();

mike.countUsers();