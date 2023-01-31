//Gets location from the form input
function getLocationFromForm() {
    const city = document.getElementById('locationInput').value;

    //If it is not an empty string
    if (city) {
        //Clean input ????????????????????????????????????????????????????
        return city
    }
    return '';
}



//Gets the url to get coords
function getCoordsUrl(city) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=38ea27929bd948874a552161005d6b10`;
}

function getWeatherUrl(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38ea27929bd948874a552161005d6b10`;
}


//Returns coords object with the lat and lon
async function getCoords(city) {
    const response = await fetch(getCoordsUrl(city));
    const apiData = await response.json();
    const coords = {};
    coords.lat = apiData[0].lat;
    coords.lon = apiData[0].lon;
    return coords;
}

//Returns the weather data from the specified city
async function getWeatherData() {
    const city = getLocationFromForm();
    if (city !== '') {
        const coords = await getCoords(city);
        const response = await fetch(getWeatherUrl(coords.lat, coords.lon));
        const weatherData = response.json();
        return weatherData;
    }
    return;
}


export default getWeatherData;