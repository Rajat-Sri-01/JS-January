const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click' ,function (eve) {
    console.log(eve);
    console.log(eve.target);
    switch (eve.target.id) {
      case "red":
        body.style.backgroundColor = eve.target.id;
        break;
      case "grey":
        body.style.backgroundColor = eve.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = eve.target.id;
        break;
      case "purple":
        body.style.backgroundColor = eve.target.id;
        break;
    }
  });
});




// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });
