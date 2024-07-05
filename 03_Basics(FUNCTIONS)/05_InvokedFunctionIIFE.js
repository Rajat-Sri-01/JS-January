//// IMMEDIATELY INVOKED FUNCTION EXPRESSION *********************

function chai(){
    console.log("Hi xyz");
}
chai();

// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed immediately after it is defined. It's a common pattern used to create a new scope and encapsulate variables and functions to avoid polluting the global scope.
// IIFEs are commonly used in JavaScript for various purposes, such as creating modules, avoiding global namespace pollution, and implementing immediately-executed initialization code. They're a powerful tool for writing clean and modular JavaScript code.
// Here's the basic structure of an IIFE:

(function() {
    // IIFE body
})();















// IIFE Function 
// Syntax: ()(); where in () write Function and second () used to call the value of Function 
// and ; this is used to end the previous IIFE Function.
(function code(){
    console.log("Hi abc");
})();

(function coure(name){
    console.log(`Hi ${name}`);
})("pqr");

// Arrow IIFE
((name2) => {
    console.log(`Hi ${name2}`);
})("hij")