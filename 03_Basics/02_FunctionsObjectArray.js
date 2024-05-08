function addcartvalues(num1) {
    return num1
}
// console.log(addcartvalues(45))

function addcartvalues(value1, value2, ...num1) { 
    // ...num1 where ... is rest operator/spread operator
    // Rest Operator (...args):
// The rest operator is used in function parameters to represent an indefinite number of arguments as an array.
// It gathers all remaining arguments into an array.
// both operators involve the use of three dots (...), the rest operator gathers multiple elements into an array, typically used in function parameters, whereas the spread operator spreads elements of an iterable into individual elements, usually used in array literals or function calls.
    return num1
}
// console.log(addcartvalues(1,2,3,4,5,6,7))


// Object with function

const firstObject = {
    name: "rajats",
    city: "Kanpur"
}

function withObject(anyObject) {
    // console.log(`My name is ${firstObject.name} and i belong from city ${firstObject.city}`);
    return anyObject
}
withObject(firstObject)

const secondObject = {
    isLoggedin: true,
    isLoggedout: true
}

function withObject2(anyobject2){
    // console.log(`User is login ${anyobject2.isLoggedin} and suddenly logout ${anyobject2.isLoggedout}`);
    return anyobject2
}
withObject2(secondObject)


// second wat to create function with object
// secondObject({
//     isLoggedin: true,
//     isLoggedout: true
// })


// Array with Function


// 1
const array1 = []
function arrayfnc(arrayValue){
    return arrayValue
}
// console.log(arrayfnc([]))


// 2
const array2 = [1,2,3,4,5]
function arrayfnc2(arrayValue2){
    return arrayValue2[2]
}
console.log(arrayfnc2(array2));
