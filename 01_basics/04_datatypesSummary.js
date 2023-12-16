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


// Stack and Heap in Javascript

// All primitve datatypes are stored data stack memory Its just give the copy of that variable
// All Non primitive datatypes are stored heap memory It provide the reference or address of that variable

let num = 12;
let temp = num;

// But if I change on the temp varibale its won't affect on the num because temp is a copy of num
temp = 34;

console.log("num = ",num,"temp = ",temp);
console.log("After Update the value:");
console.log("num = ",num,"temp = ",temp);

// Now come to the example of the heap memory means it is the non primitive datatypes
// Its provide the address or reference of the varibale
let myDetails={
    name:"Souvick Pramanik",
    company:"Keross R&D",
    empId:"K2303117"
}
let copyMyDetails=myDetails;
console.log(myDetails);
copyMyDetails.empId="k2405443"; // It updates the both of the object main and copy
console.log("After update the obj:");
console.log(myDetails,copyMyDetails);