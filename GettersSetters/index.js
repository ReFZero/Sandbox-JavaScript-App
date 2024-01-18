class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      throw new Error("Invalid first name");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
        throw new Error("Invalid age");
    }
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}
const person = new Person("John", 30);
person.name = "David";
person.age = 38;
console.log(person.name);
console.log(person.age);
