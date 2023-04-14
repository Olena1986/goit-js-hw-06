const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', updateOutput);

function updateOutput(event) {
  outputEl.textContent = event.target.value || 'Anonymous';
}
