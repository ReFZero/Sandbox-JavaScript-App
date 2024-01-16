const person1 = {
  firstName: `Rafal`,
  lastName: `Kowalski`,
  age: 26,
  city: `Warsaw`,
  isEmployed: true,
  // sposoby zapisu metod
  sayHello1: function () {
    console.log(`Hello ${this.firstName}`);
  },
  sayHello2() {
    console.log(`Hello ${this.firstName}`);
  },
  // this nie dziala z arrow function poniewaz pobiera context z Window
  sayHello3: () => {
    console.log(`Hello ${this.firstName}`);
  },
};

const person2 = {
  firstName: `Piotr`,
  lastName: `Nowak`,
  age: 56,
  city: `Krakow`,
  isEmployed: false,
  sayHello: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

console.log(person1);
console.log(
  person1.firstName,
  person1.lastName,
  person1.city,
  person1.isEmployed
);
person1.sayHello1();
person1.sayHello2();
// Hello undefined - this nie dziala z arrow function poniewaz pobiera context z Window
person1.sayHello3();

person2.sayHello();

console.log(person2);
console.log(
  person2.firstName,
  person2.lastName,
  person2.city,
  person2.isEmployed
);
