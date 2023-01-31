import getWeatherData from "./apiFunctions";

document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    getWeatherData();
});