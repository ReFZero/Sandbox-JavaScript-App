// Arrow functions - skracaja zapis funkcji,
// przydaja sie w sytuacji gdy funkcja jest prosta i uzywamy ją tylko raz.

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element)=> Math.pow(element, 2));
const cubes = numbers.map((element)=> Math.pow(element,3));
const evenNum = numbers.filter((element)=> element % 2 === 0);
const oddNum = numbers.filter((element)=> element % 2!== 0);
const total = numbers.reduce((accumulator, element)=> accumulator + element, 0);

console.log(squares);
console.log(cubes);
console.log(evenNum);
console.log(oddNum);
console.log(total);