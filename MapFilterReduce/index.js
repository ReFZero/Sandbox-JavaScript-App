//map(function) - mozna uzywac funkcji jako argumentu, wykonuje funkcje
// na kazdym elemencie tablicy i zwraca nowa tablice
const numbers = [1, 2, 3, 4, 5, 6];
const names = ["John", "Mary", "Jane", "John", "Mary"];

let result = numbers.map(triple);
let namesUpperCased = names.map(upperCase);

namesUpperCased.forEach(display);
result.forEach(display);

function display(element) {
  console.log(element);
}

function upperCase(element) {
  return element.toUpperCase();
}

function triple(element){
  return element * 3;
}

const dates = ["2023-05-03", "2024-05-09", "2026-27-12"];
const datesFromatted = dates.map(formatDate)
console.log(datesFromatted);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//filter(function) - mozna uzywac funkcji jako argument, tworzy i zwraca przefiltrowana tablice
// zapisuje w sytuacji gdy true  
const numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersToFilter.filter(isEven);
const oddNumbers = numbersToFilter.filter(isOdd);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2!== 0;
}
console.log(evenNumbers);
console.log(oddNumbers);

//reduce() - redukuje elementy tablicy do pojedynczej wartosci

const numbersToReduce = [1,2,3,4,5,6,7,8,9,10];

const total = numbersToReduce.reduce(sum);
console.log(`sum: ${total}`);

function sum(accumulator, element) {
return accumulator + element;
}

const minmax = [5,10,15,20,25,30,35,40,45];

const min = minmax.reduce(minReduce);
const max = minmax.reduce(maxReduce);

function minReduce(accumulator,element){
    return Math.min(accumulator,element);
}

function maxReduce(accumulator,element){
    return Math.max(accumulator,element);
}

console.log(`min: ${min}`);
console.log(`max: ${max}`);