import { createWeatherCard } from "./ui/weather-card";
import { createGiphyImage } from "./ui/giphy-image";

const searchForm = document.querySelector(".search-form");
const apiCallResult = document.querySelector(".api-call-result");

let onFormSubmit = null;
let onDisplayWeather = null;

function cleanContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    cleanContainer(apiCallResult);
    const term = event.target[0].value;
    event.target.reset();
    if (onFormSubmit) onFormSubmit(term);
}

export function bindFormSubmit(callback) {
    onFormSubmit = callback;
}

export function displayWeatherInformation(response) {
    const weatherCard = createWeatherCard(response);
    apiCallResult.appendChild(weatherCard);
    if (onDisplayWeather) onDisplayWeather(response.currentConditions.conditions);
}

export function bindDisplayWeather(callback) {
    onDisplayWeather = callback;
}

export function displayGiphyResult(imageUrl) {
    const giphyImage = createGiphyImage(imageUrl);
    apiCallResult.appendChild(giphyImage);
}

searchForm.addEventListener("submit", handleFormSubmit);