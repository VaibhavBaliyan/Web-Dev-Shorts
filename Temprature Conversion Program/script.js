// TEMPRATURE CONVERSION PROGRAM

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    temp = Number(textbox.value);
    if(toFahrenheit.checked){
        result.textContent = `${temp}°C = ${temp * 9/5 + 32}°F`;
    } 
    else if(toCelsius.checked){
        result.textContent = `${temp}°F = ${(temp - 32) * 5/9}°C`;
    }   
    else{
        result.textContent = "Select a unit";
    }
}
