//******************* falsy values ***************************
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//******************* truthy values **************************
// "0", 'false', " ", [], {}, function(){}

const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

if (userEmail.length === 0) {
    // console.log("Array is empty");
}


let empytobj = {}
if (Object.keys(empytobj).length == 0) {
    // console.log("Obj is empty");
}



// ********** Nullish Coalescing Operator (??): null undefined ***************************

// The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand.
// This operator is useful for providing default values when dealing with potentially null or undefined variables without incorrectly handling falsy values like 0, '', or false.

// Null

// const name = null
// const emailname = "Rajat"
// const defaultname = name ?? emailname
// console.log(defaultname); // Op: Rajat


// Undefined

// const name = undefined
// const emailname = "Rajat"
// const defaultname = name ?? emailname
// console.log(defaultname); // Op: Rajat

// falsy value

const name = 0
const emailname = "Rajat"
const defaultname = name ?? emailname
console.log(defaultname); // Output : 0


// Best Practices

// Default Values: Use the nullish coalescing operator to set default values for variables that might be null or undefined.
// Avoid Overuse: Use it judiciously to avoid masking programming errors where null or undefined might indicate a problem that needs addressing.
// Combined with Optional Chaining: It works well with optional chaining to safely access nested properties.


// Conclusion

// The nullish coalescing operator (??) is a powerful tool in JavaScript for handling null and undefined values while avoiding issues with other falsy values. 
// It provides a clear and concise way to set default values and is particularly useful when combined with optional chaining.




//*********************************** Terniary Operator ? ***********************************************

// condition ? true : false

let age = 10
age >= 5 ? console.log("right") : console.log("wrong"); // op: right

const vowels = [1,2,3,4,5,6]
vowels != [1,2] ? console.log("right") : console.log("wrong"); // op: right