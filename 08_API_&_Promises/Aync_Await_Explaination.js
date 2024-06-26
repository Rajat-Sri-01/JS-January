const promiseSix = new Promise(function(resolve,reject){
    // This line creates a new promise called promiseSix. The Promise constructor takes a function as an argument. This function is called the executor function and it receives two arguments: resolve and reject.
    setTimeout(function(){ // Inside the executor function, a setTimeout function is used to simulate an asynchronous operation that takes 1 second to complete.
        let error = true; // A variable error is defined and set to true. This variable is used to simulate an error condition.
        if (!error) { // If error is false, the promise is resolved with an object containing city and state properties. If error is true, the promise is rejected with an error message. Since error is true, the promise will be rejected.
            resolve({city: "Noida", state:"UP"})
        } else {
            reject('Error: Something went wrong&&&&&&&&&')
        }
    },1000) // The setTimeout function is set to complete after 1 second (1000 milliseconds).
})

async function consumePromiseSix(){ // This line defines an asynchronous function named consumePromiseSix. The async keyword is used to declare the function as asynchronous.
    try { // The try block is used to wrap the code that may throw an error. If any error occurs inside the try block, it will be caught by the catch block.
         const response = await promiseSix // The await keyword is used to wait for the promise promiseSix to be resolved or rejected. Since promiseSix will be rejected (because error is true), this line will throw an error that will be caught by the catch block.
         console.log(response); // If the promise was resolved (which it won't be in this case because error is true), this line would log the resolved value ({city: "Noida", state: "UP"}) to the console.
    } catch (error) { // The catch block catches the error thrown by the rejected promise. In this case, it will log the error message ('Error: Something went wrong&&&&&&&&&') to the console.
        console.log(error);
    }
}
consumePromiseSix() // Calling the Async Function
// This line calls the consumePromiseSix function, which will execute the code inside it and handle the promise promiseSix.



Summary: 

// Create a Promise:

// The promise is created with a simulated asynchronous operation using setTimeout.
// The promise will reject with an error message after 1 second because error is true.


// Async Function to Consume the Promise:

// An asynchronous function consumePromiseSix is defined to handle the promise.
// Inside the function, await is used to wait for the promise to resolve or reject.
// The try block attempts to get the resolved value of the promise.
// The catch block handles any errors, logging the error message to the console.


// Calling the Async Function:

// The consumePromiseSix function is called, which triggers the process of handling the promise.


 