const array = [1,2,3,4,5]
let result = array.map( (value) => (value + 10))
// console.log(result);
// [ 11, 12, 13, 14, 15 ]

// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// callbackfn — A function that accepts up to three arguments.
// The map method calls the callbackfn function one time for each element in the array.

result = array.map((value) => {
    return ( value + 10 * 2 )

})
// console.log(result);
// [ 21, 22, 23, 24, 25 ]



/// **************** CHAINING IN METHODS ********************************************************************


const userArray = ["Rajat", "Sri", "abc"]
let resultArray = userArray.map((value) => {
    return value + 1
})
.map((value) => {
    return value *2
})
// console.log(resultArray);
// [ NaN, NaN, NaN ]


const userArray1 = ["Rajat", "Sri", "abc"]
let resultArray1 = userArray1.map((value) => {
    return value + ["XX"]
})
.map((value) => {
    return value + ["YY"]
})
// console.log(resultArray1);
// [ 'RajatXXYY', 'SriXXYY', 'abcXXYY' ]


const userArray2 = ["Rajat", "Sri", "abc"]
let resultArray2 = userArray2.map((value) => {
    return value + ["XX"]
})
.map((value) => {
    return value + ["YY"]
})
.filter((value) => {
    return value === "RajatXXYY"
})
console.log(resultArray2);
// [ 'RajatXXYY' ]