import { generateCardAuto } from "./pieces.js";

const boutonTrierCroissant = document.querySelector(".btn-trier-croissant");
const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");



function trierCroissant (pieces) {
    boutonTrierCroissant.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return a.prix - b.prix;
        });
        console.log(piecesOrdonnees);
        // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    generateCardAuto(piecesOrdonnees);
    });
}

function trierDecroissant (pieces) {
    boutonTrierDecroissant.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return b.prix - a.prix;
        });
        console.log(piecesOrdonnees);
        // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    generateCardAuto(piecesOrdonnees);
    });
}

export function sort(pieces) {
    trierCroissant(pieces);
    trierDecroissant(pieces);
 }
 

