export function createGiphyImage(imageUrl) {
    const apiImage = document.createElement("img");
    apiImage.classList.add("api-image");
    apiImage.src = imageUrl;

    return apiImage;
}