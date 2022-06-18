import './style.css';
import {getWeatherMetric, getWeatherImperial, getWeatherPreload} from './API';

const bgImage = document.querySelector('.bg-img');
const UI = document.querySelector('#UI');
const input = document.querySelector('input#city');
const image = document.querySelector('img');
const searchBtn = document.querySelector('#search');
const currentTemp = document.querySelector('#current-temp');
const conditions = document.querySelector('#conditions');
const description = document.querySelector('#description');
const body = document.querySelector('body');
const metric = document.querySelector('#metric');
const imperial = document.querySelector('#imperial');

function bgSet() {
    const now = (new Date()).getHours();
    if(now <= 6 || now >= 19) {
        bgImage.src = 'https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    } else {
        bgImage.src = 'https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80'
    }
};


  
  
document.addEventListener('load', navigator.geolocation.getCurrentPosition(getWeatherPreload));
bgSet();
metric.addEventListener('click', getWeatherMetric);
imperial.addEventListener('click', getWeatherImperial);