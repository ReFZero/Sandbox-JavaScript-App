class Animal {
  constructor(alive) {
    this.alive = alive;
  }
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Dog extends Animal {
  constructor(alive, name) {
    super(alive);
    this.name = name;
  }
  bark() {
    console.log(`This ${this.name} is barking`);
  }

  sleep() {
    console.log(`Sleep from Animal `);
    super.sleep();
    console.log(`This ${this.name} is sleeping from Dog `);
  }
}

class Cat extends Animal {
  constructor(alive, name) {
    super(alive);
    this.name = name;
  }
  meow() {
    console.log(`This ${this.name} is meowing`);
  }
  sleep() {
    console.log(`Sleep from Animal `);
    super.sleep();
    console.log(`This ${this.name} is sleeping from Cat `);
  }
}

const dog = new Dog(true, `Rex`);
const cat = new Cat(true, `Roky`);

dog.eat();
dog.sleep();
dog.bark();

cat.eat();
cat.sleep();
cat.meow();
