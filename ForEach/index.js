let options = [1, 2, 3, 4];

options.forEach(square);
options.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
}

function triple(element, index, array) {
  array[index] = element * 3;
}

function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}

function display(element) {
  console.log(element);
}

//Zamien na duze litery
let letters = ["a", "b", "c", "d", "e", "f"];

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

letters.forEach(upperCase);
letters.forEach(display);
