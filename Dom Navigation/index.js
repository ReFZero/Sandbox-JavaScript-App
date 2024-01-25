// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement

const fruits = document.getElementById("fruits");
const firstChild = fruits.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// const vegetables = document.getElementById("vegetables");
// const lastChild = vegetables.lastElementChild;
// lastChild.style.backgroundColor = "green";

const ulElement = document.querySelectorAll("ul");
ulElement.forEach((ulElement) => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "green";
});

const element1 = document.getElementById("apple");
const banana = element1.nextElementSibling;
banana.style.backgroundColor = "red";

const element2 = document.getElementById("cucumber");
const potatoes = element2.previousElementSibling;
potatoes.style.backgroundColor = "brown";

const element3 = document.getElementById("cake");
const parent = element3.parentElement;
parent.style.backgroundColor = "blue";

const element4 = document.getElementById("cars");
const children = element4.children;

Array.from(children).forEach((child) => {
    child.style.backgroundColor = "orange"
});