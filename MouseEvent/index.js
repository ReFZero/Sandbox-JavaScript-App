const myBox = document.getElementById("box");
const myButton = document.getElementById("myButton");

// Sytuacja gdy chcemy aby to przycisk sie zmienial
// myButton.addEventListener('click', event =>{
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Oh No!";
// });

// myButton.addEventListener('mouseover', event =>{
// event.target.style.backgroundColor = "yellow";
// event.target.textContent = "Don't do that!";
// });

// myButton.addEventListener('mouseout', event =>{
// event.target.style.backgroundColor = "greenyellow";
// event.target.textContent = "Click me!";
// });

myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Oh No!";
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do that!";
});

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "greenyellow";
  myBox.textContent = "Click me!";
});
