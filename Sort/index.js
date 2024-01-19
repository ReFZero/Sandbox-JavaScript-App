let numbers = [3, 1, 6, 3, 9, 34, 77, 22, 58, 23];

numbers.sort((a, b) => a - b); // sortuje od najmniejszego do najwiekszego, chcac odwrócic nalezy zamienic a z b

console.log(numbers);

const people = [
  { name: "John", age: 34 },
  { name: "Doe", age: 12 },
  { name: "David", age: 23 },
];
people.sort((a, b) => a.age - b.age); // jedynie do liczb
people.sort((a, b) =>a.name.localeCompare(b.name)); // do String
console.log(people);