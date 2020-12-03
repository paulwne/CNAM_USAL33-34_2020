let etape = 1

let PutWaterButton = document.querySelector("#PutWater");
let BoilWaterButton = document.querySelector("#BoilWater");
let PutPastaButton = document.querySelector("#PutPasta");

PutWaterButton.addEventListener("click", PutWater);
BoilWaterButton.addEventListener("click", BoilWater);
PutPastaButton.addEventListener("click", PutPasta);

function PutWater() {
    if (etape === 1) {
        console.log("Je met de l'eau dans la casserole");
        etape = 2; 
    }
    else if(etape === 2) {
        console.log("Euh l'eau est deja dans la casserole...");
    }
    else {
        console.log("Euh l'eau est deja dans la casserole...");
    }
}

function BoilWater() {
    if (etape === 2) {
        console.log("Je chauffe l'eau");
        etape = 3;
    }
    else if (etape === 3) {
        console.log("J'ai déja chauffée l'eau");
    }
    else {
        console.log("Il faut d'abord mettre de l'eau dans la casserole");
    }
}

function PutPasta() {
    if (etape ===3) {
        console.log("Je met les pâtes", "Bon app mon Khey");
        etape = 1;
    }
    else if (etape ===1) {
        console.log("Il faut d'abord mettre de l'eau");
    }
    else {
        console.log("Pas encore pret pour mettre les pates");
    }
}