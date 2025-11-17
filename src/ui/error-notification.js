export function createErrorNotification() {
    const messageContainer = document.createElement("div");
    const tittle = document.createElement("h2");
    const message = document.createElement("p");

    messageContainer.classList.add("error-notification");
    tittle.textContent = "I'm sorry, something went wrong with your search";
    message.textContent = `Remember that in order to give you the correct information about the place you want to look up, you must provide a clear and logical search reference. If you write something like "jjjj" or a location that obviously does not exist, do not expect to see a logical response from this app.`;

    messageContainer.appendChild(tittle);
    messageContainer.appendChild(message);

    return messageContainer;
}