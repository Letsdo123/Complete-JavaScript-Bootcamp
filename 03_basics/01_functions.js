// Basic of function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(12, 34);
console.log(result);

// User welcome message into our application function
// If we don't pass any parameter while calling function then we can set default value of the
// parameter using below syntax just using = to sign
function loginUserMessage(username = "Ratan"){
    // undefined and empty both are converted to false in boolean
    // !false = true
    // And we are asking for username from the user
    if(!username){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`;
}
const welcomeMessage = loginUserMessage();
console.log(welcomeMessage);