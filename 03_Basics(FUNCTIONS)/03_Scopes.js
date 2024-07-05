//// ******* scopes *******

// let a = 12
const b = 133
var c = 233
// console.log(a);
// console.log(b);     
// console.log(c);

//The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
//If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// JavaScript has the following kinds of scopes:

// *Global scope: The default scope for all code running in script mode.
// *Module scope: The scope for code running in module mode.
// *Function scope: The scope created with a function.
// In addition, variables declared with let or const can belong to an additional scope:

// *Block scope: The scope created with a pair of curly braces (a block).



let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}
// console.log(a);



function myfnc(name){
    // console.log(`My name is ${name}`);
    if (name === undefined) { /////// Blck scope
        // console.log("Rajat");
    }
}
myfnc()



const abc = 123 //// Global Scope
if (true) {
    const abc1 = 45
    // console.log(abc1);
}
// console.log(abc);


function parent(){ // Nested Scopes
    const papa = 100
    const mummy = 200
    // console.log(son + daughter); // Here Son/daughter is not defined or parent() wont be able to access son/daughter variable whereas child() able to access parent() values.
    function child(){ // child() access papa amnd mummy but parent() cant access son and daughter coz of Scoping.
        const son = 10
        const daughter = 20
        // console.log(papa + mummy);
    }
    child()
}
parent()


///////********important  ***********

function mysize(size){
    return size + 1
}
// console.log(mysize(9));


// console.log(otherSize(1));// ReferenceError: Cannot access 'otherSize' before initialization
// const otherSize = function mysize(size){
//     return size + 1
// }
// console.log(mysize(1));



// console.log(otherSize(2));// ReferenceError: Cannot access 'otherSize' before initialization
const otherSize = function(size){
    return size + 1
}

// module scope

// Module Scope: Variables and functions defined within a module are scoped to that module by default. They are not accessible outside the module unless explicitly exported.

const internalVariable = 20;
export function myFunction() {
    return internalVariable; // Accessible within the module
}
console.log(internalVariable); // Error: internalVariable is not defined