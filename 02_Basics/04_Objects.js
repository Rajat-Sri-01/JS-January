// Singleton Object
const appleUser = new Object() // this is the syntax to declare SINGLETON OBJECTS

// Literal Object
const appleUser1 = {} // his is the syntax to declare LITERAL OBJECTS

appleUser.id = '123'// we can simply execute object values in this way
appleUser.name = 'Tarzan'
appleUser.isLoggedOut = false
appleUser.isLoggedIn = true

// console.log(appleUser);

const appleUser2 = { // Nested Objects
    name: 'abc',
    city: 'Kanpur',
    fullname: {
        firstname: 'rajat',
        lastname: 'Sri',
        petname : {
            petname1: 'zyz',
            petname2: 'xyz'
        }
    }
}
// console.log(appleUser2.fullname.lastname); // this is th way to console Nested Objects values
// console.log(appleUser2.fullname.petname.petname2);

const obj1 = {id3:123, name:'cbb'} // random object values
const obj2 = {id2:12, name2:'zzzz'}
const obj3 = {id1:1, name3:'xxx'}

// const obj4 = { obj1 , obj2}
const obj4= Object.assign({}, obj1, obj2) // Object.assign() is used to copy the enumerate Object value
// The Object.assign() method is used to copy the values and properties from one or more source objects to a target object. 
// It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target.
// Syntax:
// Object.assign(target, ...sources);
// Parameters: 
// target: It is the target object to which values and properties have to be copied.
// sources: It is the source object from which values and properties have to be copied.
// Return Value: 
// Object.assign() returns the target object.


// console.log(obj4);

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);



// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2} // simple way to concat the different values.
// console.log(obj3);


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

let user = [{ // this is ARRAY with multiple OBJECTS
    id: 8383,
    name: "haha"
},
{
    id:28828,
    name: "addj"
},
{
    id:2831,
    name: "ufuf"
},
{
    id:2812,
    name: "ttyt"
}]

// console.log(user[1].name)// Here user[1] gives the value of Object one in user array i.e : "haha"
// user[2].id
// user[4].id
// user[3].name

console.log(Object.keys(appleUser)); // gives the Objects keys of appleuser

console.log(Object.entries(appleUser));// gives all the entry object values

console.log(Object.values(appleUser));// gives the object keys VALUES of appleuder

console.log(appleUser.hasOwnProperty('name')); // hasOwnProperty() gives the True/False on the basis of keys/values in declared object is avaible or not
console.log(appleUser.hasOwnProperty('id'));// true
console.log(appleUser.hasOwnProperty('isLoggedOut'));// true
console.log(appleUser.hasOwnProperty('isLoggedIn'));// true
console.log(appleUser.hasOwnProperty('city')); // flase
console.log(appleUser.hasOwnProperty('state'));// false




