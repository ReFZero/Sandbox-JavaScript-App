// NodeList - statyczna kolekcja zawierajaca elementy HTML
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "😁";
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
  });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons"); // Należy dodac do NodeList

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
