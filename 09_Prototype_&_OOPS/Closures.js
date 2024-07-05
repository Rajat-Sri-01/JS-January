// Closures
//  jab ap pura ka pura function hi return kardete ho to sirf function hi return nhi hota hai uska pura ka pura scope return hota hai or naa ki sirf scope retrun hota, pura ka pura LEXICAL SCOPE return hota hain
// Closure: A closure is created when a function is defined inside another function and the inner function retains access to the variables and scope of the outer function even after the outer function has returned.

function outer(){ // The outer function is defined. Inside this function, there is a constant variable username with the value "qwerty".
    // There is also a nested function inner defined within outer.
    const username = "qwerty" // qwerty
    function inner(){ // The inner function logs the value of username to the console. The username variable is not defined within inner but within the outer function.
        console.log(username);
    }
    return inner; // here in return its got the scope of whole outer function not just the inner function coz due to lexical scoping inner has a rights in outer function so here whole scope of outer fnc got to trturned
     // here passes the function refrence as a return
    // The outer function returns the inner function itself, not its result. This is a crucial part of creating a closure.
}
const myFunction = outer(); // const myFunction = outer(); invokes the outer function.
// When outer is called, it initializes the username variable and defines the inner function.
// It then returns the inner function, which is assigned to the variable myFunction.

myFunction() // myFunction() calls the inner function.
// Since inner was defined inside outer, it retains access to outer's scope even after outer has finished executing.
// This means inner can still access the username variable and log its value ("qwerty") to the console

// most Imp: 

    // jab ap pura ka pura function hi return kardete ho to sirf function hi return nhi hota hai uska pura ka pura scope return hota hai or naa ki sirf scope retrun hota, pura ka pura LEXICAL SCOPE return hota hain
    // return inner; // here in return its got the scope of whole outer function not just the inner function coz due to lexical scoping inner has a rights in outer function so here whole scope of outer fnc got to trturned
    // here outer and outer has inner function scope shared whole memory due to lexical scoping, not only sharing execution cotext but shares whole memory



