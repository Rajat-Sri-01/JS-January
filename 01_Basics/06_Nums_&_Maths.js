const score = 500
// console.log(score);

const newscore = new Number(600)
// console.log(newscore);
// here op will be [Number: 100] which defines Number as a object value i.e it has specialise number value 100

// console.log(score.toString().length);
// convert number to string and provide length of the string

// console.log(score.toFixed(2));
// console.log(score.toFixed(5));
// console.log(score.toFixed(1));
// here to fixed added values like 500.00 for 2, 500.00000 for 5, 500.0 for 1 values
// add zero after the value in decimal form

const scoretwo = 353.4563
// console.log(scoretwo.toPrecision(3));
// console.log(scoretwo.toPrecision(1));
// console.log(scoretwo.toPrecision(5));
// The toPrecision() method in JavaScript is used to format a number to a specified precision. 
// This code would output 353 because toPrecision(3) formats the number to have 3 significant digits.

const scorethree = 1900000000
// console.log(scorethree.toLocaleString());
// console.log(scorethree.toLocaleString('en-IN'));

// *********** Maths ***********************************
//  console.log(Math);

// console.log(Math.abs(-7));
// console.log(Math.abs(7));
// console.log(Math.abs(-9));

// console.log(Math.round(3.7));
// round the value to 4
// console.log(Math.round(7.3));
// rpund the value to 7 
// console.log(Math.ceil(3.7));
// ceil means top value so it gives 3
// console.log(Math.floor(3.7));
// floor means lower value so it gives 7

// console.log(Math.min(3,6,2,8,6,1000,4535553));
// console.log(Math.max(3,6,2,8,6,1000,4535553));

console.log(Math.random());
// Here .random() always gives value in 0 to 1 something like 0.123, 0.0012 etc
// by multiply by 10 it will shift the decimal value by one zero
console.log((Math.random()*10) + 1);
console.log((Math.random()*20) + 1);
console.log((Math.random()*10000) + 1);
console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.floor(Math.random()*1000000) + 1);
// but in flooring the no 0.0012 it will give 0 then to avoid value 0 we add +1 so that value will give 0.0012+1=1.0012.

const min = 100
const max = 200
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// (Math.random)*(max - min + 1) is the formula to find the value betwenn MIN and MAX value where,
// +1 is used to increment the value by 1 and + min is used to give minimum value whatever is defined or greater than minimum value.














