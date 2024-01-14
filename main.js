import { fetchPiecesData, generateCardAuto } from "./features/pieces.js";
import { sort } from "./features/sort.js";
import { filter } from "./features/filters.js";

document.addEventListener('DOMContentLoaded', async function () {
    // Fetch pieces data
    const piecesData = await fetchPiecesData();

    // Call the sorting function from filters.js with the fetched data
    sort(piecesData);

    // Call the articleAuto function from pieces.js with the fetched data
    generateCardAuto(piecesData);

    //Call the sorting function from filters.js with the fetched data
    filter(piecesData);
    // anotherFeature();

    // Access data from data.json (if needed)
    // console.log('Data:', data);
});