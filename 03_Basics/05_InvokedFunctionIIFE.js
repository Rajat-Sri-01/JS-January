//// IMMEDIATELY INVOKED FUNCTION EXPRESSION *********************

function chai(){
    console.log("Hi xyz");
}
chai();

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