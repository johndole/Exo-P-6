import { generateCardAuto } from "./pieces.js";

const buttonCheapFilter = document.querySelector(".btn-filtrer-cheap");
const buttonDescriptionFilter = document.querySelector(".btn-filtrer-description");
const inputRange = document.querySelector(".input-range");
const rangeValue = document.getElementById('rangeValue');


// Event Listener //
function cheapFilter(pieces) {
    buttonCheapFilter.addEventListener("click", function () {
    // Assuming pieces is defined and contains an array of objects
    const cheaperFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;  
    });
    console.log(cheaperFiltrees);
      // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    generateCardAuto(cheaperFiltrees);
    
});
}

function descriptionFilter(pieces) {
    buttonDescriptionFilter.addEventListener("click", function () {
    // Assuming pieces is defined and contains an array of objects
    const descriptionFiltrees = pieces.filter(function (piece) {
        return piece.description ? true : false;  
    });
    console.log(descriptionFiltrees);
      // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    generateCardAuto(descriptionFiltrees);
});
}

function rangeFilter(pieces) {
    inputRange.addEventListener("input", function () {
    rangeValue.textContent = inputRange.value + " €";
    // Assuming pieces is defined and contains an array of objects
    const rangeFiltrees = pieces.filter(function (piece) {
        return piece.prix >= inputRange.value;  
    });
    console.log(rangeFiltrees);
      // Effacement de l'écran et regLeaks_regeneration de la page
    document.querySelector(".fiches").innerHTML = "";
    generateCardAuto(rangeFiltrees);
});
}




export function filter(pieces) {
 cheapFilter(pieces);
 descriptionFilter(pieces);
 rangeFilter(pieces);
}