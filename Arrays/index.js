let letters = ["a", "b", "c", "d", "e"];
letters.push("f", "g", "h"); // dodaje na koniec
letters.pop(); // zabiera element z konca
letters.unshift("z"); // dodaje na poczatek
letters.shift(); // zabiera z poczatku

let numOfLetters = letters.length; // ilosc elementów
console.log(numOfLetters);

letters.sort(); // sortowanie elementów
letters.sort().reverse(); // sortowanie element odwrotnie
letters.reverse(); // odwrócenie elementów w tablicy

let indexOf = letters.indexOf(`c`); // indeks elementu
console.log(indexOf);
letters.forEach(function (letter) {
  console.log(letter);
});
// to samo co standardowa petla For-Each
for (let letter of letters) {
  console.log(letter);
}
