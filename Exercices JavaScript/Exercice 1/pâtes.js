
let lenomdelavariable = "Mettre de l'eau dans la casserole";
console.log(lenomdelavariable);

lenomdelavariable = "Hello";
console.log(lenomdelavariable);

let monBouton = document.querySelector("#monBouton");
console.log(monBouton);

function clicSurMonBouton ()  { 
    let nom = prompt("Ton prénom : ")
    console.log(nom);
    monBouton.textContent = "Bonjour" + nom;
}
// etape = 1 => Etape initiale, rien n'a été fait
// etape = 2 => L'eau est dans la casserole
// etape = 3 => L'eau a été chauffée
// etape = 4 => Les pâtes sont cuites
let etape = 1

let putWaterButton = document.querySelector("#putWater")
let boilWaterButton = document.querySelector("#boilWater")
let putPastaButton = document.querySelector("#putPasta")

putWaterButton.addEventListener("click", putWater )
boilWaterButton.addEventListener("click", boilWater )
putPastaButton.addEventListener("click", putPasta )

function putWater() {
    if(etape === 1) {
       console.log("Je mets de l'eau dans la casserole")
       etape = 2
    } else {
    console.log("Euh l'eau est déjà dans la casserole")
    }
}

function boilWater() {
    console.log("je suis dans la fonction boilWater")
}

function putPasta() {
    console.log("je suis dans la fonction putPasta")
}