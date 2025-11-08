function fahrenheitToCelsius(fahrenheitTemp) {
    return ((Number(fahrenheitTemp) - 32) * (5 / 9)).toFixed(2);
}

export function createWeatherCard(responseData) {
    const cardContainer = document.createElement("div");
    const address = document.createElement("h2");
    const currentConditionsContainer = document.createElement("div");
    const conditions = document.createElement("p");
    const measurementTime = document.createElement("p");
    const feelsLike = document.createElement("p");
    const humidity = document.createElement("p");
    const sunrise = document.createElement("p");
    const sunset = document.createElement("p");
    const temp = document.createElement("p");

    address.textContent = responseData.address;
    conditions.textContent = `Conditions: ${responseData.currentConditions.conditions}`;
    measurementTime.textContent = `Data obtained at: ${responseData.currentConditions.datetime}`;
    feelsLike.textContent = `Feels like: ${fahrenheitToCelsius(responseData.currentConditions.feelslike)}`;
    humidity.textContent = `Humidity: ${fahrenheitToCelsius(responseData.currentConditions.humidity)}`;
    sunrise.textContent = `Sunrise time: ${responseData.currentConditions.sunrise}`;
    sunset.textContent = `Sunset time: ${responseData.currentConditions.sunset}`;
    temp.textContent = `Actual temperature: ${fahrenheitToCelsius(responseData.currentConditions.temp)}`;

    cardContainer.appendChild(address);
    currentConditionsContainer.appendChild(conditions);
    currentConditionsContainer.appendChild(measurementTime);
    currentConditionsContainer.appendChild(feelsLike);
    currentConditionsContainer.appendChild(humidity);
    currentConditionsContainer.appendChild(sunrise);
    currentConditionsContainer.appendChild(sunset);
    currentConditionsContainer.appendChild(temp);
    cardContainer.appendChild(currentConditionsContainer);

    return cardContainer;
}