// This is all about the properties and we can override or not
// We we can get to know about properties and the details
// We can override the details and value or not 
// The behind the scence implemenation how c++ is write the js code

console.log(Math.PI);

// description of an properties of an object

// Returns types is object
// console.log(typeof Math);
let aboutPi = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(aboutPi);

// Object.set