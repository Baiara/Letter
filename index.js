const input = document.querySelector('.input');
const span = document.querySelector('span');
const btn = document.querySelector('.btn')
const body = document.querySelector('body');

let arr = input.value;

input.addEventListener('input', function () {
    span.textContent = input.value.length;
})


btn.addEventListener('click', () => {
    setInterval(() => {
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        btn.style.backgroundColor = `rgb(${green},${blue},${red})`;
    }, 500);
    btn.setAttribute('disabled', true)
})

btn.addEventListener('click', () => {
    setInterval(() => {
        btn.classList.toggle('btn');
    }, 500);

})

