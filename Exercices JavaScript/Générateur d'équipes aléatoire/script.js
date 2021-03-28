/*let button = document.createElement('button');
let text = document.createTextNode('Mon bouton');
button.appendChild(text)
document.body.appendChild(button)

let button = $('<button id="idDuBouton"></button').text('Mon bouton')
$('body').append(button)


document.querySelector('button').textContent = 'mon nouveau texte'
$('button').text('mon nouveau texte')


bouton.addEventListener('click', function() {
    console.log("j'ai cliqué sur le bouton")
})
*/

const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Participants ${event.detail}`;
});


function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;
    // Afficher la valeur
    alert(input);
}


// <a href="page-2.html" class="button">START LEARNING</a> //