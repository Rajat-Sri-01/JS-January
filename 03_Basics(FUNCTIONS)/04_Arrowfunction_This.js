// *************** this ******************


// In JavaScript, the this keyword is used to refer to the current execution context, typically within functions and objects. Its value depends on how a function is called and where it is called.


// *Within a Function:
// In a regular function (not an arrow function), this refers to the object that called the function. If the function is called as a method of an object, this refers to that object.
// If a function is called without an explicit context (i.e., not called as a method of an object), this refers to the global object in non-strict mode. In strict mode, this will be undefined in such cases.

function greet() {
    // console.log(`Hello, ${this.name}!`);
}

const person = {
    name: 'Alice',
    sayHello: greet
};

person.sayHello(); // Output: Hello, Alice!


// *Within an Object:
// When this is used within an object method, it refers to the object itself.

const car = {
    brand: 'Toyota',
    getModel: function() {
        return `${this.brand} Camry`;
    }
};

// console.log(car.getModel()); // Output: Toyota Camry


// *Global Context: ************** MOST IMPORTANT *******************************

// In a browser environment, this refers to the global object window.
// In Node.js, this refers to the global object global.


// *Constructor Functions:
// When a function is used as a constructor with the new keyword, this refers to the newly created object instance.

function Person(name) {
    this.name = name;
}

const person1 = new Person('Bob');
// console.log(person1.name); // Output: Bob



// *Event Handlers:
// In event handler functions, this often refers to the element that triggered the event.

{/* <button id="myButton">Click me</button>
<script>
    document.getElementById('myButton').addEventListener('click', () {
        console.log(this.textContent); // Output: Click me
    });function
</script> */}

// *Understanding this is crucial in JavaScript as it determines the context in which code is executed and allows for dynamic behavior based on the runtime context. However, its behavior can sometimes be confusing, especially in nested functions or when using arrow functions, so it's important to pay attention to how it's used.



// ************************ course code ****************************************

const user = {
    firstname: "Rajat",
    lastname: "Srivastava",
    id: function() {
        // console.log(`My name is ${this.firstname} ${this.lastname}`);
    }
}
user.id() // My name is Rajat Srivastava
user.id(this) // My name is Rajat Srivastava
// console.log(this.user); // undefined

function abc(){
    // console.log(this); // here this refers global object in node engine but in Browser console it react as WINDOW OBJECT.
}
abc()

function abc(){
    // console.log(this); // here this refers global object in node engine but in Browser console it react as WINDOW OBJECT.
}
abc()
// console.log(this); // output: {} empty Object


const chai = function () {
    let chainame = "greentea"
    // console.log(this.chainame); // output: {} empty parenthesis
}

/// ******** ARROW FUNCTION *****************************************************************

// ******** Explicit Return Syntax *********

const user1 = (id1 , id2) => {
    return id1 + id2
}
// console.log(user1(3,7));

// ****** Implicit Function Syntax **********

// const user2 = (id3, id4) => (id3 + id4)
// console.log(user2(7,3));

const user3 = (num1, num2) => ( num1+num2,
    {
        name: "raj",
        city: "Kanpur"
    }
)
console.log(user3(3,4));
console.log(user3().name);
console.log(user3().city);













