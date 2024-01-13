const btnInput = document.getElementById(`btnInput`);
const btnButton = document.getElementById(`btnButton`);
const paragraphButton = document.getElementById(`paragraphButton`);

btnInput.onclick = function () {
  window.alert("You clicked the btnInput!");
  paragraphButton.textContent = `btnInput`;
  btnInput.disabled = true;
  setTimeout(() => (btnInput.disabled = false), 2000);
};

btnButton.onclick = function () {
  window.alert("You clicked the btnButton!");
  paragraphButton.textContent = `btnButton`;
};

const buttons = document.querySelectorAll(`.btnField`);
const fieldset = document.querySelector(`fieldset`);

buttons.forEach(button => {
    button.addEventListener("click", disableButton);    
});

function disableButton() {
  fieldset.disabled = true;
  setTimeout(() => {
    fieldset.disabled = false;
  }, 1000);
}


