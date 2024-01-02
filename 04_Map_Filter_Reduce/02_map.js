const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// maps iterate on every element of array and perform operation
// and return the updated array and doesn't modify the original array
const newNums = myNumbers.map((num)=>{
    return num+10;
});
console.log(newNums);

// chaning of map filter
// we basically use map filter reduce all the methods together
// we can use maps more than one times or with difference method thats call chaning
const chainNums=myNumbers.map((num)=>{
    return num*10;
}).filter((num)=>{
    return num>=40;
});
console.log(chainNums);