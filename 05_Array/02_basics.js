// More description and method about javascript
let chieneseBrand = ["Oppo", "Vivo", "Realme", "Mi"]
let nonChieseneBrand = ["Nokia", "Motorola", "Apple", "Samsung"]

// push method chnage the original array
// chieneseBrand.push(nonChieseneBrand);
console.log(chieneseBrand);

// This is how we can concatinate two array
// This doesn't add array into an array
let newConcatinatedArray = chieneseBrand.concat(nonChieseneBrand);
console.log(newConcatinatedArray);

// This is the best way to flat a array basically multiple array
// concat and spread operate similar way but here syntax is easy and we can add more than one array
// But there are some limitation here it doesn't flat multi level array
// like array of array or array of array of array
let mashupMobileBrand = ["Lava", ["Agni"]];
let newUpdatedContinatedArray = [...chieneseBrand, ...nonChieseneBrand, ...mashupMobileBrand.flat()];
console.log(newUpdatedContinatedArray);

let numArray = [1, 2, 3, [2, 3], [2, 3, 4, [1, 2]]]
// We have pass the level where upto we flat if we don't wanna give then we can specify infinity then it automatically understand
let flatNumArray = numArray.flat(3);
console.log(flatNumArray);


// IsArray is to check that the datatypes is array or not
// From and of is to convert into array
let strVar = "Hello";
let isArray = Array.isArray(strVar);
console.log(isArray);
let newstrVar = Array.from(strVar);
console.log(newstrVar);

let num1 = 12;
let num2 = 13;
let num3 = 14;

let newNumArray = Array.of(num1,num2,num3);
console.log(newNumArray);