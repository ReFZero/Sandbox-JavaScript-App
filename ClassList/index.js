// metody:
// add()
// remove()
// toggle() - usunie jesli istnieje, jesli nie to dodaje
// replace(staraKlasa, nowaKlasa)
// contains()

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", (event) => {
//     event.target.classList.add("hover");;
// });

// myButton.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("hover");;
// });
myH1.classList.add("enabled");
myH1.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "😡";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });

myButton.classList.add("enabled");
myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😡";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
