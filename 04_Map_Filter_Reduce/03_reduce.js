const myNums = [1,2,3,4]

let arrSum=myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0);
console.log(arrSum);

// reduce with basic shopping cart
let shoppingCart = [
    {
        'courseName':"JS Fundamental",
        'Price':1299
    },
    {
        'courseName':"React Basic",
        'Price':1999
    },
    {
        'courseName':"Cpp Fundamental",
        'Price':699
    },
    {
        'courseName':"Core Java",
        'Price':2999
    }
]

let priceToPay=shoppingCart.reduce((preval,currval)=>{
    return preval+currval.Price
},0);
console.log(`Price need to pay ${priceToPay}`);