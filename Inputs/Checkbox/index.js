const wymagania = document.querySelector("#wymagania");
const skladniki = document.querySelectorAll("ul input");

// Dezaktywuje checkbox `Przepis`
wymagania.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const skladnik of skladniki) {
  skladnik.addEventListener("click", updateDisplay);
}
// CheckBox moze byc w 3 stanach. 
// 1. Checked - zaznaczony
// 2. Indeterminate - nieokreslony, nie jest dostepny od strony HTML
// 3. Unchecked - niezaznaczony
function updateDisplay() {
  let checkedCount = 0;
  for (const skladnik of skladniki) {
    if (skladnik.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    wymagania.checked = false;
    wymagania.indeterminate = false;
  } else if (checkedCount === skladniki.length) {
    wymagania.checked = true;
    wymagania.indeterminate = false;
  } else {
    wymagania.checked = false;
    wymagania.indeterminate = true;
  }
}