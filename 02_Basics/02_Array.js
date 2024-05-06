const name1 = ['Raj', 'Sri', 'Mayuri', 'Robin']
const name2 = ['Papa', 'mummy', 'didi', 'bhai']
// name1.push(name2)
// console.log(name1);
// console.log(name1[3]);
// console.log(name1[3][1]);

// console.log(name1.concat(name2));   

const allnames = [...name1,...name2]
// console.log(allnames);
// (...var) used to add or concat the values

const array3 = [12,232,2,43,23,[21,7,45,[1,2,3,4,[6,7,8,],[6666,222222]]]]
const array4 = array3.flat(Infinity)
// console.log(array4);
// flat() used to add all the above arrays in one array

// console.log(Array.isArray([23.213,12])) //true
// console.log(Array.isArray("Rajat")); //false
// isArray() used to tell the given value is array or not in form of TRUE/FALSE

console.log(Array.from("Rajat"));
// from() convert sting/object into array


let value1 = 100
let value2 = 200
let value3 = 300

// console.log(Array.of(value1,value2, value3));
// of() added the values in one form of array