const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

let value = 0;

decrementBtnEl.addEventListener('click', () => {
  value -= 1;
  counterValueEl.textContent = value;
});

incrementBtnEl.addEventListener('click', () => {
  value += 1;
  counterValueEl.textContent = value;
});
