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
        apiImage.src = result.data.images.original.url;
    } catch (error) {
        console.error(error.message);
    }
}