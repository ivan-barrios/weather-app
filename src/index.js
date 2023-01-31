import getWeatherData from "./apiFunctions";

document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(getWeatherData());
});