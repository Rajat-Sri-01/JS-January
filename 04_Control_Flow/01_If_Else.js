// ********** Operators *****************

// <, >, <=, >=, ==, !=, ===, !==

const age = 100
if (age == 100) {
    // console.log("a");
}
if (age < 100) {
    // console.log("b");
}
if (age > 100) {
    // console.log("c");
}
if (age <= 100) {
    // console.log("d");
}
if (age >= 100) {
    // console.log("e");
}
if (age != 100) {
    // console.log("f");
}
if (age === 100) {
    // console.log("g");
}
if (age !== 100) {
    // console.log("h");
}

if (age < 90) {
    // console.log("Right");
}
else{
    // console.log("Wrong");
}

let a = 100
if (a < 80) {
    // console.log("a");
} else if (a == 100) {
    // console.log("b");
}
else{
    // console.log("c");
}

if (a === 100) {
    let name = "Rajat"
    // console.log(`my name is ${name}`);
}
// console.log(`my name is ${name}`);
// this log will give errors coz log is not inside the if block statement

let userName = "abc"
// if(userName === "abc") console.log("true");

// ******************* Gates *********************
// And &&
// Or ||


let userLoggedin = "true"
if (userLoggedin === true && userLoggedin != true) {
    console.log("yes");
} else {
    console.log("no");
}

if (userLoggedin === true || userLoggedin != true) {
    console.log("yes");
} else {
    console.log("no");
}