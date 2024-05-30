// const user = [1,2,3,4,5]

// user.forEach( function(value) {
//     console.log(value);
// })


// const user = [1,2,3,4,5]
// user.forEach( (value) => {
//     console.log(value);
// })
 
const user = [1,2,3,4,5]
function abc(value) {
    // console.log(value);
}
user.forEach(abc)
// here, abc in forEach is a reference of function abc, dont need to call the function abc in fir each method just need to give refernce of the function.


// Array with Multiple OBJECTS

const UserDetails = [
    {
        name : "Rajat",
        id : "1"
    },
    {
        name : "abc",
        id : "2"
    },
    {
        name : "pqr",
        id : "3"
    },
    {
        name : "xyz",
        id : "4"
    }
]

UserDetails.forEach( (value) => {
    console.log(value.name);
    console.log(value.id);
})





// for...of:

// Best for: Iterating over values of iterable objects (arrays, strings, maps, sets, etc.).
// Pros: Access to values directly, can use break and continue.
// Cons: Not suitable for plain objects.

// for...in:

// Best for: Iterating over the properties of an object.
// Pros: Access to keys, works with any object.
// Cons: Iterates over all enumerable properties, including inherited ones; not recommended for arrays.

// forEach:

// Best for: Iterating over array elements to perform operations.
// Pros: Simple and concise, access to element, index, and array.
// Cons: Cannot exit early, does not return a new array.

