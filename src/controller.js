import { displayWeatherInformation, displayGiphyResult, bindFormSubmit, bindDisplayWeather } from "./display";

async function getWeatherInformation(location) {
    const url = `https://nexus-server-1z9t.onrender.com/api/weather?location=${encodeURIComponent(location)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        displayWeatherInformation(result);
    } catch (error) {
        console.log(error.message);
    }
}

async function searchReferenceOnGiphy(reference) {
    const term = reference || "random";
    console.log(term);
    const url = `https://nexus-server-1z9t.onrender.com/api/giphy?term=${encodeURIComponent(term)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        console.log(result.meta.status);
        console.log(result.data.images.original.url);
        displayGiphyResult(result.data.images.original.url);
    } catch (error) {
        console.error(error.message);
    }
}

bindFormSubmit(getWeatherInformation);
bindDisplayWeather(searchReferenceOnGiphy);