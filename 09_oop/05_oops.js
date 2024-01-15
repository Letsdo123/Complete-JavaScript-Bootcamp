// ES6
// COnstructor and Static IN JS
class user{
    constructor(username,email,password)
    {
        this.username=username
        this.email=email
        this.password=password
    }

    // This is function in class
    // This is the special syntax in class
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

let userOne = new user('hitesh','chai12@gmail.com','123')
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUserName());

function newUser(username,email,password) {
    // console.log(this);
    this.username = username
    this.email = email
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}avt`
}
newUser.prototype.realPassword = function(){
    return `${this.password}`
}
let result = new newUser('ramesh','chai98@gmail.com',234);
console.log(result.encryptPassword());
console.log(result.realPassword());