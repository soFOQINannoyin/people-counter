let countEl = document.querySelector('#count-el');

let incrementEl = document.querySelector('#increment-btn');

let decrementEl = document.querySelector('#decrement-btn');

let saveBtn = document.getElementById("save-btn");

let resetEl = document.querySelector('#reset-btn');

let saveEl = document.getElementById("save-el");

let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

countEl.innerText = count;

incrementEl.addEventListener('click', () => {
    count += 1;
    countEl.innerText = count;
});

decrementEl.addEventListener('click', () => {
    count -= 1;
    if (count < 0) count = 0;
    countEl.innerText = count;
});

resetEl.addEventListener('click', () => {
    count = 0;
    countEl.innerText = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = `${count} - `;
    saveEl.textContent += countStr;
    localStorage.setItem('count', count);
    countEl.textContent = 0;
    count = 0;
});