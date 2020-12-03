// 1. Partie HTML terminée, le bouton doit exister avec un identifiant
// 2. Sélectionner ce bouton
// 3. Au clic de l'utilisateur sur le bouton, on lance le prompt
// 4. Récupérer le texte écrit par l'utilisateur
// 5. Changer le texte du boutton

let lenomdelavariable = "Bonjour";
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

let unFilm = "Jurassic Park";
const unAutreFilm = "Jurassic Park 2";

var encoreUnAutreFilm = "Jurassic Park 3";

// unfilm = "Matrix";
if (unFilm=== "Jurassic Park" & unAutreFilm === "Jurassic Park 2") {
    console.log("la condition est vrai");
    console.log("un film vaut bien Jurassic Park et Jurassic park 2");
} else {
    console.log("la condition est fausse, unFilm ne vaut pas Jurassic Park")
}
confirm("Mon message")

}



monBouton.addEventListener("click", clicSurMonBouton);