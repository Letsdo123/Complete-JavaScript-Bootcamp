// creating objects using constructor
// This would be singleton
// const myDetails =  new Object();

const userDetails = {
    name: "Souvick Pramanik",
    address: {
        village: "Kisanganj",
        post: "Haridebpur",
        district: "Howrah",
        state: "West Bengal"
    },
    contactDetails: {
        mobile: 9876234321,
        email: "prasou.gmail.com"
    }
}

// console.log(userDetails);
// console.log(userDetails.address.village);
// console.log(userDetails.addresss?.village); '?' This is if keys not found then it doesn't give any error

// merge two objects into one single objects
const obj1 = { user1: "obj1", desc1: "This is object 1" }
const obj2 = { user2: "obj2", desc2: "This is object 2" }
const obj3 = { user3: "obj3", desc3: "This is object 3" }

// This is one of the method where we define target and source
// Here {} this is the target and obj1,obj2,obj3 is the source

// method 1
// const copyObject = Object.assign({},obj1,obj2,obj3);

// This is method 2
// This is the latest method using destructruing
const copyObject = { ...obj1, ...obj2, ...obj3 }
// console.log(copyObject);

const users = [
    {
        id: "user@122",
        password: "2133$$211"
    },
    {
        id: "user@123",
        password: "2299$#$211"
    },
    {
        id: "user@3222",
        password: "@@3$$2"
    },
    {
        id: "user@3222",
        password: "@@3**2"
    }
]
// console.log(users);
// Accessing the value of the users basically array of objects
// Map and Filter concepts using array of objects
// If we want to map this array of objects then it would be
const updatedUser = users.filter((value) => {
    if (value.password.length >= 8) {
        return true;
    }
}).map((value) => {
    return value.id;
});
// Print the updated users
console.log(updatedUser);

// Some more important methods
console.log(Object.keys(userDetails));
console.log(Object.values(userDetails));
console.log(Object.entries(userDetails));
// This retirns true or false if the key present true otherwise false
console.log(userDetails.hasOwnProperty('fullname'));