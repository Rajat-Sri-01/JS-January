const array = [1,2,3,4,5]

let resultValue = array.reduce((_accumulatedValue, initialValue) => {
    return (_accumulatedValue + initialValue)
},0)
// console.log(resultValue);


const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)





// CHANING THE MAP FILTER REDUCE.

// Suppose we have an array of objects representing people, and we want to find the sum of the ages of people older than 18.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 18 },
    { name: 'Dave', age: 25 }
  ];
  
  const totalAge = people
    .filter(person => person.age > 18)  // Filter people older than 18
    .map(person => person.age)          // Map to their ages
    .reduce((acc, age) => acc + age, 0); // Sum the ages
  
//   console.log(totalAge); // Output: 47



// filter: Creates a new array with all elements that pass the test implemented by the provided function.
// map: Creates a new array with the results of calling a provided function on every element.
// reduce: Executes a reducer function on each element, resulting in a single output value.



const ShoppingCartValues = [{
    price: 100,
    discount : '10%'
},
{
    price: 200,
    discount : '20%'
},
{
    price: 300,
    discount : '40%'
},
{
    price: 500,
    discount : '50%'
}]

const BillPayment = ShoppingCartValues.reduce((_accumulatedValue, currentValue) => {
    return (_accumulatedValue + currentValue.price)
},0)
console.log(BillPayment);

// 1100