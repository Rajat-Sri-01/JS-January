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

