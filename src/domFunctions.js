
function displayError() {
    const errorMsg = document.querySelector('.error-msg');

    errorMsg.textContent = 'Could not find that city, please check it.';
}




function renderPage(weather) {
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.textContent = '';

    const location = document.getElementById('location');
    const description = document.getElementById('description');
    const mainTemperature = document.getElementById('mainTemperature');
    const minTemperature = document.getElementById('minTemperature');
    const maxTemperature = document.getElementById('maxTemperature');
    const feelsLike = document.getElementById('feelsLike');

    location.textContent = `${weather.name}, ${weather.country}`;
    description.textContent = weather.desc;
    mainTemperature.textContent = `${Math.round((weather.temp - 273) * 10) / 10} °C`;
    minTemperature.textContent = `Min: ${Math.round((weather.tempMin - 273) * 10) / 10} °C`;
    maxTemperature.textContent = `Max: ${Math.round((weather.tempMax - 273) * 10) / 10} °C`;
    feelsLike.textContent = `Feels like: ${Math.round((weather.feelsLike - 273) * 10) / 10} °C`;
}



export {renderPage, displayError};