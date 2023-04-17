function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
    const boxesEl = document.querySelector('#boxes');
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = getRandomHexColor();
      boxEl.style.width = `${size}px`;
      boxEl.style.height = `${size}px`;
      boxesEl.appendChild(boxEl);
      size += 10;
    }
  }

  function destroyBoxes() {
    const boxesEl = document.querySelector('#boxes');
    boxesEl.innerHTML = '';
  }

  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const input = document.querySelector('input[type="number"]');

  createBtn.addEventListener('click', () => {
    createBoxes(input.value);
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });