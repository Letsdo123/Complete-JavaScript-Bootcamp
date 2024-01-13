const promiseOne = new Promise((resolve, reject) => {
    // Perform some aync task
    // Cryptography
    // File Access
    // Network request etc
    setTimeout(() => {
        console.log("Async task complete");
        // we have to complete the task with the status either resolve or reject
        // If resolve then it will move to the then()
        // If reject the it will move the catch()
        resolve("3s");
    }, 3000);
});

// connect resolve with then()
promiseOne.then((response) => {
    console.log("Promise consumed", response);
});

// Another syntax for promise
// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        console.log("Another async task complete"); 
//        resolve();
//     }, 2000);
// }).then(()=>{
//     console.log("Another Promise consumed");
// })

// Send somw data with resolve and reject
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let myObj = {
            "username": "techy_dunia012",
            "email": "techy@gmail.com"
        }
        // This is the way we can add properties to an object
        myObj.response = "2.5s"
        // we can't semd multiple parameter in resolve or reject
        // I have to send some with-in a object or array or objects
        resolve(myObj)
    }, 2500);
});

promiseThree.then((data) => {
    console.log(data);
    console.log(data.response);
});

// This is another promise with some extra features
// const promiseFour = new Promise((resolve, reject) => {
//     let error = false;
//     setTimeout(() => {
//         error = false
//         if (!error) {
//             let data = {
//                 "username": "techy_dunia012",
//                 "password": "mypassword$$1234"
//             }
//             resolve(data);
//         }
//         else {
//             reject("something went wrong!");
//         }
//     }, 5000)
// });

// promiseFour.then((userData) => {
//     console.log(userData);
//     return userData.password;
// }).then((password) => {
//     console.log(`Your password is ${password}`);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("The promise is either resolved or rejectedd");
// })

// async await with promiseFive
let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        let data = { username: "js@123", password: "123" };
        if (error) {
            reject("something went wrong");
        } else {
            resolve(data);
        }
    }, 4500);
});

async function consumePromiseFive() {
    try {
        const result = await promiseFive;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// calling the function
consumePromiseFive();

// async await of real request
async function getAllUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // response retuns object
        console.log(typeof response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUserData();