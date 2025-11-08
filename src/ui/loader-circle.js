export function createLoaderCircle() {
    const loaderContainer = document.createElement("div");
    const spinner = document.createElement("div");

    loaderContainer.classList.add("loader-container");
    spinner.classList.add("spinner");

    loaderContainer.appendChild(spinner);

    return loaderContainer;
}