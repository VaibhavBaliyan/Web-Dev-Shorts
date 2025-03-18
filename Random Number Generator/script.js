const rollbtn = document.getElementById("rollbtn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

let min = 1;
let max = 6;

let randomnum1;
let randomnum2;
let randomnum3;

rollbtn.onclick = function () {
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;

    number1.textContent = randomnum1;
    number2.textContent = randomnum2;
    number3.textContent = randomnum3;
}