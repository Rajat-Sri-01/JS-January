function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.print = function(){
    console.log(`price is ${this.score}`);
}

const userOne = new createUser("Rajat", 100)
const userTwo = new createUser("Srivastava", 200)

userOne.increment() // price is 101
userOne.print() // price is 101 Both log value is 101 coz  increment() first increment the 100 to 101 and then print() used to print the "Price is 101"
userTwo.increment() // price is 201
userTwo.print() // price is 201

console.log(userOne); // createUser { username: 'Rajat', score: 100 }
console.log(userTwo); // createUser { username: 'Srivastava', score: 200 }

// Full Explanation
// Here's the step-by-step execution:

// Define the createUser Constructor Function:
// The createUser function is defined to initialize username and score for new objects.

// Add Methods to the Prototype:
// The increment method is added to the prototype of createUser, allowing all instances to share this method and increase their score.
// The print method is added to the prototype of createUser, allowing all instances to share this method and log their score.

// Create Instances:
// userOne is created with username "Rajat" and score 100.
// userTwo is created with username "Srivastava" and score 200.

// Call Methods on Instances:
// userOne.increment() increases userOne's score to 101.
// userOne.print() logs "price is 101".
// userTwo.increment() increases userTwo's score to 201.
// userTwo.print() logs "price is 201".

// Log Instances:
// console.log(userOne) logs userOne with username "Rajat" and score 101.
// console.log(userTwo) logs userTwo with username "Srivastava" and score 201.


// NEW Keyword
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/