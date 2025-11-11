import { displayWeatherInformation, displayGiphyResult, bindFormSubmit, bindDisplayWeather } from "./display";

async function getWeatherInformation(location) {
    const url = `https://nexus-server-1z9t.onrender.com/api/weather?location=${encodeURIComponent(location)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        displayWeatherInformation(result);
    } catch (error) {
        console.log(error.message);
    }
}

async function searchReferenceOnGiphy(reference) {
    const term = reference || "random";
    const url = `https://nexus-server-1z9t.onrender.com/api/giphy?term=${encodeURIComponent(term)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        displayGiphyResult(result.data.images.original.url);
    } catch (error) {
        console.error(error.message);
    }
}

bindFormSubmit(getWeatherInformation);
bindDisplayWeather(searchReferenceOnGiphy);