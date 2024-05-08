
function myname() {
// console.log("R");
// console.log("A");
// console.log("J");
// console.log("A");
// console.log("T");
}
myname()

// 1
function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
}
addTwoNumbers(7,8)
// addTwoNumbers(7, "a")
// addTwoNumbers(7,null)

// 2
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result // return is used to resturn values 
}
const result = addTwoNumbers(7,8)
// console.log("Result:", result);

// 3
function addTwoNumbers(number1, number2){
    return number1+number2// The return statement ends function execution and specifies a value to be returned to the function caller.
}
const result1 = addTwoNumbers(7,8)
// console.log("Result:", result);

function loginUser(username){
    return `${username} is logged in`
}
// console.log(loginUser("Rajat"))// Rajat is logged in
// console.log(loginUser(""))//  is logged in
// console.log(loginUser())// undefined is logged in

function loginUser(username){
    if(username ===  undefined){ // here if() checks the undefined value is true or not.
        // console.log("Please login again");
        return
    }
    return `${username} is logged in`
}
// console.log(loginUser())

// return;
// return expression;
// expression Optional
// The expression whose value is to be returned. 
// If omitted, undefined is returned.
// The return statement can only be used within function bodies.
// When a return statement is used in a function body, the execution of the function is stopped.