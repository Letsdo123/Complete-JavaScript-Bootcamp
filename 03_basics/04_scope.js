// Nested function in Javascript with scope concept
parent();
function parent() {
    let username = "souvcik";
    function child() {
        console.log(username);
        let password = "SS##66543";
    }
    // We can't access the password bcz the scope is inside the child function only
    // console.log(password);
    child();
}

// grandParent(); // If we write function as expression then we can't call function before the function definition
// because the function is hold inside the varibale and we can't access the varibale before initialize
// This is another way to write function
// Sometimes its called expression
const grandParent = function(){
    console.log("This is grandParent");
}
// grandParent();