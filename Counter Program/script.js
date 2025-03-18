const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");
const count = document.getElementById("count");

let countValue = 0;

increment.onclick = function () {
    countValue++;
    count.textContent = countValue; 

decrement.onclick = function () {
    countValue--;
    count.textContent = countValue;
}

reset.onclick = function () {
    countValue = 0;
    count.textContent = countValue;
}
