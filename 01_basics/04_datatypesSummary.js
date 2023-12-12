// Catagory of datatypes
// The datatypes are catagorized according to that how data's store in memory and access from memory
// The types are
// 1.Prmitive : String,Number,Boolean,null,undefined,Symbol,BigInt
// 2. Non primitive : Array,Objects,Functions 
// JS Is dynamically typed language

const score = 100
const scoreValue = 103.322 // Both are in Number catagory

const id=Symbol('123')
const anotherId=Symbol('123') // These always give difference value althoug the Symbol('123') are same

console.table([id,anotherId]);

// Checking both are same or not
console.log(id===anotherId);

const bigNumber = 344454443333333n;
console.log(bigNumber);
console.log(typeof bigNumber);


// Non primitive datatypes
// Array,Objects,Function

const heros =["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age:23,
    mobileNumber:9876543212
}

const greet = function(){
    console.log("Welcome to code duniya");
}

greet();
// To check the dataypes of
console.log(typeof greet); // it returns function (objecr function)
console.log(typeof myObj); // it returns object
console.log(typeof heros); // it returns object
console.log(typeof null); // it returns object