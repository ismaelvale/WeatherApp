

async function getWeatherMetric() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const rawData = await response.json();
        console.log(rawData);
        /*const mainWeather = rawData.main;
        const atmosCondition = rawData.weather[0].main;
        const conditionsDescription = rawData.weather[0].description;
        const imgSearch = await fetch(`https://api.unsplash.com/search/photos?&client_id=WGupvJ8I6Tyi9hScbmuPl0dDh6DfoxpKRaGl5yzkOz8&query='${atmosCondition}'`, {mode:'cors'});
        const imageData = await imgSearch.json();
        const imageURL = imageData.results[0].urls.raw
        console.log(rawData, mainWeather, atmosCondition, conditionsDescription, imageData);
        currentTemp.textContent = mainWeather.temp;
        conditions.textContent = atmosCondition;
        description.textContent = conditionsDescription;
        document.body.style.setProperty('--weather-image', `url('\'${imageURL}\'')`);*/
    } catch (err) {
        console.log(err);
    }
};
async function getWeatherImperial() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=3dae21abf706cffe7dc49830ab741cc3`, {mode:'cors'});
    const rawData = await response.json();
    console.log(weatherData);
};

export default getWeatherMetric
