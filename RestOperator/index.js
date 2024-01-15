// W przeciwienstwie do spread, rest łaczy elementy w tablice

function combineString(...strings) { // restOperator
  return strings.join("-");
}

function getLetters(...letters) {
  return [...letters]; // spreadOperator
}

const word1 = combineString("pierwszy", "drugi", "trzeci"); // restOperator
console.log(word1);

const word2 = getLetters(...word1); // spreadOperator
console.log(word2);
