// basics of array

// shallow copy vs deep copy
// shallow copy of an objects share the same references where if we copy a varibale from a varibale
// it effects to the main array or objects also
// but deep copy doesn't share same references  its just copy the values from the varibale

// Some key points about array
// 1.To store multiple value in a single varibale we use Array
// 2.Array is resizable and can contain a mix of different datatypes
// 3.Array are not associative array and so, array elements can't be accessed using arbitary string as index

let myArr=[0,1,2,3,4,5,6]

// accessing the array using index that start from 0 to len-1

// performing multiple methods on array
// starting from baics

// Its add the value to the end of the array
// we can pass multiple items we can add anythings to here its just add in the end
myArr.push(7,8);
console.log(myArr);
// pop is just remove from the last
myArr.pop();
console.log(myArr);

// shift remove from the first and unshift is add to the first
myArr.unshift(21);
console.log(myArr);

// includes and indexOf returns boolean value
let isPresent=myArr.includes(96);
console.log(`4 is: ${isPresent}`);

let index=myArr.indexOf(7);
console.log(`The index of 7 is ${index}`);

// join is just bind the array and convert it to a string
let myStrArr=["Hello","Hi","Good Morning","Good Night"]
let myStrArrNew=myStrArr.join();
console.log(myStrArrNew);

myStrArr.push(["item 1","item 2"])
console.log(myStrArr);
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let newFlatArray=myStrArr.flat();
console.log(newFlatArray); 

// slice and splice concepts in array
// slice cut the array so it takes two parameter one is start index and last one is end index-1
// spilce delete some portion it takes start index and delete count number of element to be deleted
// But the major difference is slice doesn't chnage the original array but
// splice chnage the original array its return the ramaining array
console.log("The original array:",myArr);
let sliceResult = myArr.slice(2,5);
console.log("Slice results:",sliceResult);
console.log("The original array after slice:",myArr);

let spliceResult = myArr.splice(2,5);
console.log("Splice results:",spliceResult);
console.log("The original array after slice:",myArr);