const person = {
  firstName: "John",
  age: 21,
  isStudent: true,
  hobbies: ["Sports", "Cooking", "Business"],
  address: {
    city: "New York",
    street: "123 Main Street",
    country: "United States",
  },
};

console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address.street);

for (const property in person.address) {
  console.log(person.address[property]);
}
// Obiekty zagnieżdżone
class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(city, street, country) {
    this.city = city;
    this.street = street;
    this.country = country;
  }
}
const newPerson1 = new Person(
  "John",
  21,
  "New York",
  "123 Main Street",
  "United States"
);
const newPerson2 = new Person(
  "Jane",
  28,
  "New York",
  "1 Second Street",
  "United States"
);

console.log(newPerson1.address.city);

console.log(newPerson2.address.street);
// Tablice obiektow

const fruits = [
  { name: "Apple", color: "red", calories: 100 },
  { name: "Orange", color: "orange", calories: 30 },
  { name: "Banana", color: "yellow", calories: 200 },
  { name: "Coconut", color: "white", calories: 134 },
];

fruits.push({ name: "Pineapple", color: "green" });
fruits.pop(); // sciaga obiekt z tablicy
fruits.splice(0, 2); // sciaga obiekt z tablicy od indeksu 0, drugi parametr oznacza ile elementow

console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

fruits.forEach((fruit) =>
  console.log(
    `fruit name: ${fruit.name}, color: ${fruit.color}, calories: ${fruit.calories}`
  )
);
const newFruits = fruits.map((fruit) => fruit.name.toUpperCase());
console.log(newFruits);

const maxCalories = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max);
const minCalories = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min);

  const symCalories = fruits.reduce((sum, fruit) => {
    return sum + fruit.calories;
  }, 0);

console.log(maxCalories);
console.log(minCalories);
console.log(symCalories);