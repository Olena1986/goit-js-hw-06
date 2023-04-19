// const inputEl = document.querySelector('#validation-input');
// inputEl.addEventListener('blur', validateInputLengthOnBlur);

// function validateInputLengthOnBlur(event) {
//   const inputEl = event.target;
//   const inputValue = inputEl.value;
//   const inputLength = inputEl.dataset.length;

//   if (inputValue.length === Number(inputLength)) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }


const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validateInputLengthOnBlur);

function changeClass(element, classToRemove, classToAdd) {
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);
}

function validateInputLengthOnBlur(event) {
  const inputEl = event.target;
  const inputValue = inputEl.value;
  const inputLength = inputEl.dataset.length;

  if (inputValue.length === Number(inputLength)) {
    changeClass(inputEl, 'invalid', 'valid');
  } else {
    changeClass(inputEl, 'valid', 'invalid');
  }
}







