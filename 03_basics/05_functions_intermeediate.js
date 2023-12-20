// Arrow functions and this keyword
const user = {
    username: "souvick",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} welcome to our community`);
        console.log(this);
    }
}

//user.welcomeMessage();
// update the username
user.username = "Hitesh";
// user.welcomeMessage();

// Printing this globally
// In node environment 'this' is by default empty object
console.log(this);

let checkThis = function () {
    console.log("This is checkThis function");
    let username = "souvcik";
    // console.log(this.username); // Here it will print undefined
}
checkThis();

// arrow function in JS
let addTwoNumber = (num1, num2) => (num1 + num2);
let addResult = addTwoNumber(12, 23);
console.log(addResult);


// Immediately invoked function expression (IIFE)

(function chai(){
    // This is named IIFE
    console.log("DB Connected");
})();

((name)=>{
    console.log(`DB Connected Two ${name}`);
})("souvick");