const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', updateOutput);

function updateOutput(event) {
  output.textContent = event.target.value || 'Anonymous';
}
