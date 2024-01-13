// Magic of prototype
// JS is prototypical language
function multiplyBy5(num){
    return num*5;
}

let answer=multiplyBy5(5);
console.log(answer);

// For every datastructure in js like array string function the parent is object
// Everyone has its own properties and method but everyone can access the function properties and method
multiplyBy5.power = 2;
console.log(multiplyBy5.power);

function createUser(username,score){
    this.username=username
    this.score=score
}
// increase the score
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(this.score);
}

// when we use new the it takes an empty object and linked the prototypes 
// with extra injected method to the referred method or function
// which before we use the new keyword it took the reference of that function or method
const chai = new createUser("chai",25);
const tea = new createUser("chai",125);

chai.increment();
console.log(chai.score);