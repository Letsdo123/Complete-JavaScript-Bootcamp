// All about scope in JS
let num1 = 12;
var num2 = 15;
const num3n = 22;

if (true) {
    // console.log(num1);
    // num1 = "Inside If block"
    // console.log(num1);
    let num1 = 45;
    console.log("Inside if block for let",num1);

    console.log("Inside if block for var",num2);
    var num2 = "Inside If block var";
}

console.log("Outside if block for let",num1);
console.log("Outside if block for var",num2);