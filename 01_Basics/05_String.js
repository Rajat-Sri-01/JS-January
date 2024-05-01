// const name = "rajat"
// const sirname = "Sri"
// console.log(name + " " + sirname);
// concatenate

// console.log(`My name is ${name} ${sirname}`);
// new way to declare string in a console

const nametwo = new String('Rajat')
// console.log(nametwo[1]);
// output gives key value pairs
// here new String is used to return object as a value
// so its console gives length pr keyvalue pairs of the string while running on browser

// console.log(nametwo.__proto__);
// In JavaScript, __proto__ is an internal property of objects that points to the object's prototype. However, using __proto__ directly is not recommended for several reasons:
// It is not part of the official ECMAScript specification, though widely supported in browsers.
// It's considered deprecated in favor of the Object.getPrototypeOf() and Object.setPrototypeOf() methods.
// Directly accessing __proto__ can lead to performance issues and is generally considered bad practice.
// If you want to access the prototype of an object, you should use Object.getPrototypeOf():

// console.log(Object.getPrototypeOf(var));

// **************  Methods *************

// console.log(nametwo.length);
// gives you length of string

// console.log(nametwo.toUpperCase());
// gives you uppercase characters of the string

// console.log(nametwo.charAt(1));
// gives string value of character postion asking
// console.log(nametwo.charAt(2));

// console.log(nametwo.indexOf('R'));
// gives character position of string value

// const nameThree = nametwo.substring(0,3);
// console.log(nameThree);
// gives asking string value like 0,3 is Raj

const nameFour = nametwo.slice(1,-2);
console.log(nameFour);
// gives negative value of string

const nameFive = '   Srivastava    '
console.log(nameFive.trim());
// remove whitespace of string

const url = 'https://rajat@123.com'
console.log(url.replace('@','-'));
// replace the string within url

console.log(url.includes('rajat'));
console.log(url.includes('sri'));
// must be Case Sensitive
// gives true or false value depend on the value is in the string is or not.

console.log(nametwo.split('j'));
console.log(nametwo.split('a'));
console.log(nametwo.split('R'));
// split the string into ARRAYS depends on the conditon asked.
