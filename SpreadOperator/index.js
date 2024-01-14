let number = [1, 2, 3, 4, 5, 6];
let max = Math.max(...number);
console.log(max);
let min = Math.min(...number);
console.log(min);

let username = "Rafal";
let letters = [...username]; // rozdzieli wszystkie litery
console.log(letters);

let brands1 = ["BMW", "Audi", "Mercedes"];
let brands2 = ["Skoda", "Renault", "Volvo"];
let newBrands1 = [...brands1]; // skopiuje elementy z tablicy
let newBrands2 = [...brands1, ...brands2]; // zlaczy tablice
let newBrands3 = [...brands1,...brands2, "Suzuki", "Honda"]; // doda elementy 

console.log(brands1);
console.log(brands2);
console.log(newBrands1);
console.log(newBrands2);
console.log(newBrands3);