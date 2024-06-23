const randomColor = function(){
    const hexValue = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += hexValue[(Math.floor(Math.random()* 16))]
    }
    return color;
};

let intervalId;


const startChangeColor = function(){
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000)
    }
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    
    }
}

const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangeColor)
document.querySelector('#stop').addEventListener('click', stopChangeColor)




// 1. let intervalId;

// This line declares a variable intervalId and initializes it to undefined. This variable will be used to store the ID of the interval that will be set to change the background color of the document.
// 2. const startChangeColor = function(){...}

// This line declares a constant startChangeColor and assigns it a function value. This function will be called when the "Start" button is clicked.
// 3. if (!intervalId) {

// This line checks if the intervalId variable is falsy (i.e., null or undefined). If it is, the code inside the if statement will be executed.
// 4. intervalId = setInterval(changeColor, 1000)

// This line sets an interval using the setInterval function. The interval will call the changeColor function every 1000 milliseconds (1 second). The ID of this interval is stored in the intervalId variable.
// 5. function changeColor(){...}

// This line declares a nested function changeColor inside the startChangeColor function. This function will be called every second by the interval.
// 6. document.body.style.backgroundColor = randomColor();

// This line changes the background color of the HTML document to a random color using the randomColor function (which is not shown in this code snippet).
// 7. } (end of startChangeColor function)

// This line marks the end of the startChangeColor function.
// 8. const stopChangeColor = function(){...}

// This line declares a constant stopChangeColor and assigns it a function value. This function will be called when the "Stop" button is clicked.
// 9. clearInterval(intervalId);

// This line clears the interval using the clearInterval function, passing the intervalId variable as an argument. This stops the interval from calling the changeColor function.
// 10. intervalId = null

// This line sets the intervalId variable to null, indicating that there is no active interval.
// 11. } (end of stopChangeColor function)

// This line marks the end of the stopChangeColor function.
// 12. document.querySelector('#start').addEventListener('click', startChangeColor)

// This line selects the HTML element with the ID "start" using document.querySelector and adds an event listener to it. When the element is clicked, the startChangeColor function will be called.
// 13. document.querySelector('#stop').addEventListener('click', stopChangeColor)

// This line selects the HTML element with the ID "stop" using document.querySelector and adds an event listener to it. When the element is clicked, the stopChangeColor function will be called.
// Note that the randomColor function is not shown in this code snippet, but it would typically be a function that returns a random color value as a string, such as rgb(255, 0, 0) or #FF0000.