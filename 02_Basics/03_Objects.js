// two ways to declare objects singleton and literals
// singleton :
// object fromed by constructor is called singleton object  
Object.create

// object literals
const User = {} // empty object

let symbl = Symbol("xyz123")

const User1 = {
    name: "Rajat",
    "full name": "Rajat Srivastava", // "full name" act as a string
    // symbl: "xyz123",
    [symbl]: "xyz123", // [symbol] is the syntax to sybol as a key
    age: 26,
    location: "Kanpur",
    email: "rajat@google.com",
    isLoggedIn: true,
} // key: "value"

// console.log(User1.email);
console.log(User1["email"]); // [email] is the syntax to console key values object.
// console.log(User1["full name"]);

// console.log(User1.symbl);
// console.log(User1[symbl]);
// console.log(typeof User1.symbl); // String coz of not mentioning [] brackets in symbl

User1.value = function(){ //creating function object
    console.log("Hi I am Rajat");
}
console.log(User1.value());

User1.value2 = function(){
    console.log(`Hello my name is ${this["full name"]}`); // this.name here this() gives the refernce of key full name.
}
console.log(User1.value2());



User1.greeting = function(){
    console.log("Hello JS user");
}
User1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(User1.greeting());
console.log(User1.greeting); // without ()brackets gives output: Function anonymous
console.log(User1.greetingTwo());