const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
    textEl.style.fontSize = `${inputEl.value}px`
}