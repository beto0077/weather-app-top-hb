import { displayErrorNotification, displayWeatherInformation, displayGiphyResult, bindFormSubmit, bindDisplayWeather } from "./display";

async function getWeatherInformation(location) {
    const url = `https://nexus-server-1z9t.onrender.com/api/weather?location=${encodeURIComponent(location)}`;
    // const url = `http://localhost:3000/api/weather?location=${encodeURIComponent(location)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errResult = await response.json();
            const errorData = {
                errorCode: response.status,
                details: errResult.error,
                timestamp: new Date().toISOString()
            };
            throw new Error("Failed to retrieve data.", { cause: errorData });
        }
        const result = await response.json();
        displayWeatherInformation(result);
    } catch (error) {
        displayErrorNotification();
        console.error(error.message);
        if (error.cause) {
            console.error("Error code:", error.cause.errorCode);
            console.error("Error details:", error.cause.details);
        }
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