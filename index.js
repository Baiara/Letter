const input = document.querySelector('.input');
const span = document.querySelector('span');

let arr = input.value;

input.addEventListener('input', function () {
    span.textContent = input.value.length;
})

