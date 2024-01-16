function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {console.log(`You drive ${this.make}`)}
}

const car1 = new Car('Ford', 'Mustang', 2016, 'red');
const car2 = new Car('BMW', 'X5', 2023, 'blue');

console.log(car1);
car1.drive();
console.log(car2);
car2.drive();

