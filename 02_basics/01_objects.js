// There are two ways of making objects
// Using literals and constructor
// If we use literals while creating objects then it is not singleton
// Another ways when we use constructor while creating it is singleton


// Singleton
// Object.create

// Defining symbol
const mySmbol = Symbol("hello");

// Object literals
const jsUser={
    name:"Souvick",
    "full name":"Souvick Pramanik",
    [mySmbol]:mySmbol,
    email:"pramaniksou234@gmail.com",
    mobile:9876543212,
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}

// By default keys are string
// But the value we can provide according to us

// Accessing the objects
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// How store symbol in object
// The only way we to store the symbol as key using square brackets
// console.log(typeof jsUser[mySmbol]);
// console.log(typeof mySmbol);
// console.log(jsUser);

// Some important properties and method of objects
jsUser.email="souvick234@yahoo.com";
// console.log(jsUser);

// Object.freeze(jsUser) // It will freeze the object now onwards it would effect any chnages to the main objects
jsUser.email="hello@gmail.com";
// console.log(jsUser);

// Assinging function into objects
jsUser.greeting = function(){
    console.log("Welcome to coding duniya");
}
jsUser.greetingWithName=function(){
    console.log(`Welcome to ${this["full name"]} into our community`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingWithName());