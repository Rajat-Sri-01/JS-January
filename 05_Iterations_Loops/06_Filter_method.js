// const array = [1,2,3,4,5,6,7]
// const result = array.filter( (value) => {
//     return value > 3
// })
// console.log(result); 

//  here, .filter() is used to pass the test by the implemented provided functiion
// so, filter alwasy passed the true tested values.
// And Filter, is cabable to return the Values whereas ForEach never returns the Values.


// const array = [1,2,3,4,5,6,7]
// const result = array.filter( (value) => {
//     return value <= 1
// })
// console.log(result);


// const array = [1,2,3,4,5,6,7]
// // const result = array.filter( (value) => {
//     return value >= 4
// })
// console.log(result);



const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 18 },
    { name: 'Dave', age: 25 }
  ];

let peopleDetails = people.filter((value) => {
    return value.age > 17
})
// console.log(peopleDetails);

peopleDetails = people.filter((value) => (value.age > 17 && value.name == "Bob"))
// console.log(peopleDetails);

peopleDetails = people.filter((value) => (value.name === "Dave" || value.age > 20))
console.log(peopleDetails);