const array1 = [1,3,4,5,3,23,"Rajat"]
// console.log(array1);
// console.log(array1.length);
// console.log(array1.toLocaleString());
// console.log(array1.toString());
array1.push(823)
// pop add the value in a array
// console.log(array1);
array1.pop()
// pop remove the last array value
// console.log(array1);

// array1.unshift(23)
// array1.unshift("Rajat")
// unshift add the value in a first index
// array1.shift()
// shift remove the value in a first index
// console.log(array1);

// console.log(array1.includes(5));
// includes tells that value is in array or not in TRUE/FALSE output
// here (5) is in the array so Op is TRUE
// console.log(array1.indexOf(3));
// indexof() gives the index postion value

const array2 = array1.join()
// join() removes the [] from a array and convert OBJECT ARRAY into STRING
// console.log(array2);
// console.log(typeof array2);
// here array2 is STRING
// console.log(typeof array1);
// here array1 is OBJECT

//****************/ SLice & Splice ********************************

console.log('A',array1);

let newarray = array1.slice(1,3)
console.log(newarray);
// slice() gives the value like (1,5) i.e 1,2,3,4 but not include 5.
// (1,3) i,e 1,2,3 but not include 3.
console.log('B',array1);
 

let newarray2 = array1.splice(1,4)
// splice() gives the value within the range like (1,4) i.e 1,2,3,4.
// But after splice() the original value will be changed where (1,4) array values will not be part of ORIGINAL ARRAY.
console.log(newarray2);
console.log('C', array1);