
const city = document.querySelector('input#city');
const image = document.querySelector('.icon');
const temp = document.querySelector('#current-temp');
const description = document.querySelector('#description');
const feel = document.querySelector('#feels-like')
const hourly = document.querySelector('#hourly');
const fiveDay = document.querySelector('#fiveday');
const hourlyLabel = document.querySelector('#hourly_title');
const fiveDayLabel = document.querySelector('#fiveday_title');
const cityTitle = document.querySelector('#cityName');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const UI =document.querySelector('#UI');
const loader = document.querySelector('.loader');


export async function getWeatherMetric() {
    try {
        loader.classList.remove('hidden');
        UI.classList.add('hidden');
        let classList = 'classList' in UI;
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.add('hidden');
        }
        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;
        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;
        const geoCode = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q='${city.value}'&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const coordinates = await geoCode.json();
        const lat = await coordinates[0].lat;
        const lon = await coordinates[0].lon;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const rawData = await response.json();
        const currentTemp = (rawData.current.temp).toFixed(0);
        const feels_like = (rawData.current.feels_like).toFixed(0);
        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const conditionsDescription = rawData.current.weather[0].description;
        const icon = rawData.current.weather[0].icon;
        hourly.innerHTML ='';
        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);
        hourlyData.forEach(entry => {
            const span = document.createElement('span');
            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            const iconID = entry.weather[0].icon;
            const hourlyDesc = entry.weather[0].description;
            const hourlyTemp = (entry.temp).toFixed(0) + '\u{00B0}C';
            span.innerHTML=`<h3>`+time+`</h3><img src='https://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;
            span.classList.add('hour');
            hourly.appendChild(span);
        });
        fiveDay.innerHTML = '';
        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);
        fiveDayData.forEach(entry => {
            const spanDay = document.createElement('span');
            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});
            const dailyIconID = entry.weather[0].icon;
            const dailyDesc = entry.weather[0].description;
            const dailyTempMax = (entry.temp.max).toFixed(0) + '\u{00B0}C';
            const dailyTempMin = (entry.temp.min).toFixed(0) + '\u{00B0}C';
            spanDay.innerHTML=`<h3>`+day+`</h3><img src='https://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;
            spanDay.classList.add('day');
            fiveDay.appendChild(spanDay);
        });
        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + lat + '%2C' + lon + '&outFormat=json&thumbMaps=false');
        const country = await GEOCODING.json();
        if(country.results[0].locations[0].adminArea1 == 'US'){
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;
        } else {
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;
        };
        image.src = await `https://openweathermap.org/img/wn/${icon}@2x.png`;
        temp.innerHTML = currentTemp + '\u{00B0}C';
        description.innerHTML = conditionsDescription.toUpperCase();
        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\u{00B0}C';
        sunrise.innerHTML = 'SUNRISE: ' + sunUp;
        sunset.innerHTML = 'SUNSET: ' + sunDown;
        UI.classList.remove('hidden');
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.remove('hidden');
        }
        loader.classList.add('hidden');
        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, country);
    } catch (err) {
        console.log(err);
    }
};

export async function getWeatherImperial() {
    try {
        loader.classList.remove('hidden');
        UI.classList.add('hidden');
        let classList = 'classList' in UI;
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.add('hidden');
        }
        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;
        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;
        const geoCode = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q='${city.value}'&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const coordinates = await geoCode.json();
        const lat = await coordinates[0].lat;
        const lon = await coordinates[0].lon;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const rawData = await response.json();
        const currentTemp = (rawData.current.temp).toFixed(0);
        const feels_like = (rawData.current.feels_like).toFixed(0);
        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const conditionsDescription = rawData.current.weather[0].description;
        const icon = rawData.current.weather[0].icon;
        hourly.innerHTML ='';
        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);
        hourlyData.forEach(entry => {
            const span = document.createElement('span');
            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            const iconID = entry.weather[0].icon;
            const hourlyDesc = entry.weather[0].description;
            const hourlyTemp = (entry.temp).toFixed(0) + '\u{00B0}F';
            span.innerHTML=`<h3>`+time+`</h3><img src='https://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;
            span.classList.add('hour');
            hourly.appendChild(span);
        });
        fiveDay.innerHTML = '';
        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);
        fiveDayData.forEach(entry => {
            const spanDay = document.createElement('span');
            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});
            const dailyIconID = entry.weather[0].icon;
            const dailyDesc = entry.weather[0].description;
            const dailyTempMax = (entry.temp.max).toFixed(0) + '\u{00B0}F';
            const dailyTempMin = (entry.temp.min).toFixed(0) + '\u{00B0}F';
            spanDay.innerHTML=`<h3>`+day+`</h3><img src='https://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;
            spanDay.classList.add('day');
            fiveDay.appendChild(spanDay);
        });
        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + lat + '%2C' + lon + '&outFormat=json&thumbMaps=false');
        const country = await GEOCODING.json();
        if(country.results[0].locations[0].adminArea1 == 'US'){
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;
        } else {
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;
        };
        image.src = await `https://openweathermap.org/img/wn/${icon}@2x.png`;
        temp.innerHTML = currentTemp + '\u{00B0}F';
        description.innerHTML = conditionsDescription;
        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\u{00B0}F';
        sunrise.innerHTML = 'SUNRISE: ' + sunUp;
        sunset.innerHTML = 'SUNSET: ' + sunDown;
        UI.classList.remove('hidden');
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.remove('hidden');
        }
        loader.classList.add('hidden');
        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, sunUp);
        } catch (err) {
        console.log(err);
    }
};

export async function getWeatherPreload(pos) {
    try {
        loader.classList.remove('hidden');
        UI.classList.add('hidden');
        let classList = 'classList' in UI;
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.add('hidden');
        }
        const crd = pos.coords;
        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + crd.latitude + '%2C' + crd.longitude + '&outFormat=json&thumbMaps=false');
        const country = await GEOCODING.json();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const rawData = await response.json();
        const currentTemp = (rawData.current.temp).toFixed(0);
        const feels_like = (rawData.current.feels_like).toFixed(0);
        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const conditionsDescription = rawData.current.weather[0].description;
        const icon = rawData.current.weather[0].icon;
        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);
        hourlyData.forEach(entry => {
            const span = document.createElement('span');
            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            const iconID = entry.weather[0].icon;
            const hourlyDesc = entry.weather[0].description;
            const hourlyTemp = (entry.temp).toFixed(0) + '\u{00B0}C';
            span.innerHTML=`<h3>`+time+`</h3><img src='https://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;
            span.classList.add('hour');
            hourly.appendChild(span);
        });
        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);
        fiveDayData.forEach(entry => {
            const spanDay = document.createElement('span');
            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});
            const dailyIconID = entry.weather[0].icon;
            const dailyDesc = entry.weather[0].description;
            const dailyTempMax = (entry.temp.max).toFixed(0) + '\u{00B0}C';
            const dailyTempMin = (entry.temp.min).toFixed(0) + '\u{00B0}C';
            spanDay.innerHTML=`<h3>`+day+`</h3><img src='https://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;
            spanDay.classList.add('day');
            fiveDay.appendChild(spanDay);
        });
        image.src = await `https://openweathermap.org/img/wn/${icon}@2x.png`;
        temp.innerHTML = currentTemp + '\u{00B0}C';
        description.innerHTML = conditionsDescription.toUpperCase();
        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\u{00B0}C';
        if(country.results[0].locations[0].adminArea1 == 'US'){
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;
        } else {
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;
        };
        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;
        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;
        sunrise.innerHTML = 'SUNRISE: ' + sunUp;
        sunset.innerHTML = 'SUNSET: ' + sunDown;
        UI.classList.remove('hidden');
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.remove('hidden');
        }
        loader.classList.add('hidden');
        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, country);
    } catch (err) {
        console.log(err);
    }
};

export async function imperialPreLoad(pos) {
    try {
        loader.classList.remove('hidden');
        UI.classList.add('hidden');
        let classList = 'classList' in UI;
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.add('hidden');
        }
        const crd = pos.coords;
        const GEOCODING = await fetch('https://www.mapquestapi.com/geocoding/v1/reverse?key=cJln77H3bnp4cNucmHd0ER4t1Y3WInJk&location=' + crd.latitude + '%2C' + crd.longitude + '&outFormat=json&thumbMaps=false');
        const country = await GEOCODING.json();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=6fec97fdb872df436338b0085f799e9c`, {mode:'cors'});
        const rawData = await response.json();
        const currentTemp = (rawData.current.temp).toFixed(0);
        const feels_like = (rawData.current.feels_like).toFixed(0);
        const sunUp = new Date(rawData.current.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const sunDown = new Date(rawData.current.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        const conditionsDescription = rawData.current.weather[0].description;
        const icon = rawData.current.weather[0].icon;
        hourly.innerHTML ='';
        const hourlyData = Object.entries(rawData.hourly).slice(0,12).map(entry => entry[1]);
        hourlyData.forEach(entry => {
            const span = document.createElement('span');
            const time = new Date(entry.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            const iconID = entry.weather[0].icon;
            const hourlyDesc = entry.weather[0].description;
            const hourlyTemp = (entry.temp).toFixed(0) + '\u{00B0}F';
            span.innerHTML=`<h3>`+time+`</h3><img src='https://openweathermap.org/img/wn/`+iconID+`@2x.png' alt=`+hourlyDesc+`> <p>`+hourlyTemp+`</p> <p>`+hourlyDesc+`</p>`;
            span.classList.add('hour');
            hourly.appendChild(span);
        });
        fiveDay.innerHTML = '';
        const fiveDayData = Object.entries(rawData.daily).slice(0,5).map(entry => entry[1]);
        fiveDayData.forEach(entry => {
            const spanDay = document.createElement('span');
            const day = new Date(entry.dt*1000).toLocaleDateString([], {weekday: 'long'});
            const dailyIconID = entry.weather[0].icon;
            const dailyDesc = entry.weather[0].description;
            const dailyTempMax = (entry.temp.max).toFixed(0) + '\u{00B0}F';
            const dailyTempMin = (entry.temp.min).toFixed(0) + '\u{00B0}F';
            spanDay.innerHTML=`<h3>`+day+`</h3><img src='https://openweathermap.org/img/wn/`+dailyIconID+`@2x.png' alt=`+dailyDesc+`> <p>High: `+dailyTempMax+`</p> <p>Lo: `+dailyTempMin+`</p> <p>`+dailyDesc+`</p>`;
            spanDay.classList.add('day');
            fiveDay.appendChild(spanDay);
        });
        image.src = await `https://openweathermap.org/img/wn/${icon}@2x.png`;
        temp.innerHTML = currentTemp + '\u{00B0}F';
        description.innerHTML = conditionsDescription;
        feel.innerHTML = 'FEELS LIKE: ' + feels_like + '\u{00B0}F';
        if(country.results[0].locations[0].adminArea1 == 'US'){
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea4}, ${country.results[0].locations[0].adminArea3}<h1>`;
        } else {
            cityTitle.innerHTML = `<h1>${country.results[0].locations[0].adminArea3}, ${country.results[0].locations[0].adminArea1}<h1>`;
        };
        hourlyLabel.innerHTML = `<h2>12 Hour Forecast<h2>`;
        fiveDayLabel.innerHTML = `<h2>5 Day Outlook</h2>`;
        sunrise.innerHTML = 'SUNRISE: ' + sunUp;
        sunset.innerHTML = 'SUNSET: ' + sunDown;
        UI.classList.remove('hidden');
        for (let i = 0; i < UI.children.length; i++) {
            let child = UI.children[i];
            child.classList.remove('hidden');
        }
        loader.classList.add('hidden');
        console.log(rawData, currentTemp, conditionsDescription, hourlyData, fiveDayData, country);
    } catch (err) {
        console.log(err);
    }
 };