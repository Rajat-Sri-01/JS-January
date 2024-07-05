const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}



// Detailed Breakdown

// Object Definition:
// An object named chai is defined with the following properties:
// name set to 'ginger chai'
// price set to 250
// isAvailable set to true
// orderChai, a method that logs "chai nhi bni" to the console.

// Getting Property Descriptor:
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// This line retrieves and logs the property descriptor of the name property of the chai object.
// The output will show details like value, writable, enumerable, and configurable properties of name.

// Modifying Property Descriptor:
// Object.defineProperty(chai, 'name', { enumerable: true })
// This line modifies the descriptor of the name property. Here, only the enumerable attribute is explicitly set to true.
// Since writable is commented out and not set, it will retain its current value (true, in this case).

// Getting Modified Property Descriptor:
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// This line retrieves and logs the modified property descriptor of the name property.
// The output will show that enumerable is true (no change from the initial state since it was already true), and other attributes will be the same as before unless explicitly changed.

// Iterating Over Object Properties:

// 1 : for (let [key, value] of Object.entries(chai))
// Object.entries(chai) returns an array of the object's own enumerable property [key, value] pairs.
// The for...of loop iterates over these pairs.

// 2 : if (typeof value !== 'function')
// This condition checks if the value is not a function.
// If value is not a function, it logs the key and value in the format ${key} : ${value}.

// As a result, the properties name, price, and isAvailable are logged, but orderChai (which is a function) is not logged.



// Summary
// The chai object is defined with some properties and a method.
// The property descriptor of the name property is logged before and after attempting to modify it.
// The for...of loop iterates over the object's entries and logs the key-value pairs, excluding functions.