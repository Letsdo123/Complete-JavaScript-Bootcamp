// This is global execution context
// It depends on the environment If it is in node then it will give empty object {}
// If it is browser then 'this' is window object
// console.log(this);

// Suppose we have another function thats call some db call or check some condition
// It set the username and if we want to set username of another function from another function
// Then It will create problem bcz the function will set the value of that function's context and after execution it will be removed from callstack
// And we can't access to the varibale
// so it is not possible access the function context from where it is being called

function setUsername(username) {
    // Some contion checked or complex calculation for setting the username
    this.username=username
    console.log("The function is called");
}

function createUser(username,email,passwrod) {
    // If we use call() then we pass the current context to another function to acces parent function
    // Otherwise the child function will set the username to its own function context and after execution it will removed and we don't get the desired output or result
    // so if we pass the current context means the parent context then the child function set the properties to the parent function and we get the value set
    // So call(this) is the actual process to pass the current context(this) to another function(child function)
    setUsername.call(this,username)
    // this.username=username
    // Here this means current execution context
    this.email=email
    this.passwrod=passwrod
}

let userOne = new createUser('hitesh','chail01@gmail.com','123');
console.log(userOne);
console.log(userOne.username);