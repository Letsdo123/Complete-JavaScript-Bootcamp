// Rest operator in function
function calculateCartPrice(num1, num2, ...num) {
    // We have used rest operator here
    // now the first given value is assign to num1 and second one in num2 rest all the value
    // are packed into num as array format
    return num;
}
const totalCartPrice = calculateCartPrice(12, 32, 22, 43, 24);
console.log(totalCartPrice);

// Handle objects into functions
function handleObjects(anyobjects) {
    if (!anyobjects)
    {
        console.log("User Please provide a user");
        return;
    }
    console.log(`Username : ${anyobjects.username} and Password : ${anyobjects.password}`);
}

let user1 = {
    username: "TestUsre##22",
    passwords: "223344"
}

handleObjects(user1);