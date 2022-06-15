import './style.css';
import getWeatherMetric from './API';

const UI = document.querySelector('#UI');
const input = document.querySelector('input#city');
const image = document.querySelector('img');
const searchBtn = document.querySelector('button');
const currentTemp = document.querySelector('#current-temp');
const conditions = document.querySelector('#conditions');
const description = document.querySelector('#description');
const body = document.querySelector('body');



searchBtn.addEventListener('click', getWeatherMetric);