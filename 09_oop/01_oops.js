// Object literal
let myObj = {
    username:"trishna0012",
    password:"123",

    getDetails:function(){
        console.log(`Usrename:${this.username} Password:${this.password}`);
    }
}
// calling the function of the object literal
console.log(myObj.getDetails());

// let userOne = myObj;
// let userTwo = myObj;


// When we are assinging object into varibale then it is stroring the reference of the objects
// userTwo.username="usertwo@@i87"
// console.log(userTwo);
// console.log(userOne);

function users(username,loginCount,isLogin)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLogin=isLogin;

    return this;
}

// If we use new keyword then it creates a copy of the object literal
// Basically it makes an instances for 
let userOne = new users("hitesh",12,true);
let userTwo = new users("jitesh",16,false);

console.log(userOne.username);
console.log(userTwo.username);