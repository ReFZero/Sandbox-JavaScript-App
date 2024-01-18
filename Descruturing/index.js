// desrukcja - wyciagniecie informacji z tablicy lub obiektu
// [] - za tablicy
// {} - z obiektu

// nr. 1
// Zamiana wartosci dwoch zmiennych

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

// nr. 2
// Zamiana wartosci elementów w tablicy

const colors = ["red", "green", "blue", "black", "white"];
console.log(colors[0], colors[4]);
[colors[0], colors[4]] = [colors[4], colors[0]]; // zamienia czerwony z białym

console.log(colors[0], colors[4]);

// nr. 3
// Przypisanie elementow tablicy do zmiennych
const colors2 = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors2; // pozostale kolory zostana zapisane w nowej tablicy

console.log(firstColor, secondColor, thirdColor);
console.log(extraColors);

// nr. 4
// Wyciagniecie wartosci z obiektów

const person1 = {
  firstName: "John",
  age: 30,
  occupation: "programmer",
};

const person2 = {
  firstName: "David",
  age: 56,
};

const { firstName, age, occupation = "unemployed" } = person2;
// gdy wlasciwosc nie istnieje nalezy uzyc np occupation= "domyslna wartosc"
console.log(firstName, age, occupation);

// nr. 5
// Destrukcja w parametrach funkcji
function displayPerson({ firstName, age, occupation = "unemployed" }) {
  // gdy wlasciwosc nie istnieje nalezy uzyc np occupation= "domyslna wartosc"
  console.log(firstName, age, occupation);
}

displayPerson(person1);
