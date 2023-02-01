import { getWeatherData, getLocationFromForm } from "./apiFunctions";

//Default Render
getWeatherData('La Plata');


document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    const city = getLocationFromForm();
    getWeatherData(city);
});