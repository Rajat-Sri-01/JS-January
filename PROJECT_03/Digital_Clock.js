// const clock = document.querySelector('#clock')
// both are same reference properties
const clock = document.getElementById('clock')

// setInterval(function(){}, 1000)

// let date = new Date()
// console.log(date.toLocaleTimeString());


setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000)

// setInterval is a event handler in JS which is used to run the method till script is going on.
// The setInterval function in JavaScript is used to repeatedly call a function or execute a code snippet, with a fixed time delay between each call.

// setInterval(function, delay); // Syntax

// function: The function to be executed repeatedly.
// delay: The time, in milliseconds, between each execution of the function.

// By using setInterval, you can create various timed behaviors in your web applications, such as updating the UI, creating animations, or performing periodic checks.