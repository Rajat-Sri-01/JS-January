const array = [1,2,3,4,5]
for (const num of array) { // for off loop
    // console.log(num);
}

const name  = "rajatSri"
for (const value of name) {
    // console.log(`My name is ${name}`);
}


// const obj = { name : "Rajat",
//                 id : "1"
//             }
// for (const item of obj) {
    // console.log(`${item} : ${obj[item]}`);

// for (const item of obj) {
// TypeError: obj is not iterable

//Objects themselves are not directly iterable with for...of. However, you can iterate over an object's properties using Object.keys, Object.values, or Object.entries to get an array of keys, values, or key-value pairs, respectively.

    const obj1 = { a: 1, b: 2, c: 3 };

    for (const key of Object.keys(obj1)) {
    //   console.log(key);
    }
    
    // Output:
    // a
    // b
    // c

    // Readability: The for...of loop is more readable and concise for iterating over arrays and other iterable objects.
    // No Need for Index Management: Unlike traditional for loops, you don’t need to manage the loop counter variable manually.
    // Avoids Pitfalls of for...in: for...in can iterate over enumerable properties, including inherited properties. for...of only iterates over the values of the iterable.

// map

const map = new Map()

map.set('State', "UP")
map.set('State2', "MP")
map.set('State3', "UT")
map.set('State4', "HP")

// console.log(map);/
// op
// Map(4) {
//     'State' => 'UP',
//     'State2' => 'MP',
//     'State3' => 'UT',
//     'State4' => 'HP'
//   }

for (const [Key, value] of map) {
    console.log(Key, ":" , value);
}
// op 
// State : UP
// State2 : MP
// State3 : UT
// State4 : HP