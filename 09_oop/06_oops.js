// inheritance in javascript
class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Your username is ${this.username}`);
    }

    static createStrongPassword(){
        let strongPassword = '##44RFF'+this.username+'password'
        return strongPassword
    }
}
// The teacher is extened from user class
// Now the teacher class will get all the properties and method of the user
// But the User won;t get any access of the teacher class
class Teacher extends User{
    constructor(username,email,password){
        // It calls the parent's constructor with passed value and current context
        super(username)
        this.email=email
        this.password=password
    }

    addProject(){
        console.log(`This project is added by ${this.username}`);
    }
}

const chai = new User('hitesh')
chai.logMe()
let pass = chai.createStrongPassword()
console.log(pass);

const tea = new Teacher('dola','neelkamalsing3@gmail.com','999')
tea.logMe();
tea.addProject();

// We can check instance of a class
// That a instance is truly instance of that class or not
console.log(chai instanceof User);
console.log(tea instanceof User);
console.log(chai instanceof Teacher);