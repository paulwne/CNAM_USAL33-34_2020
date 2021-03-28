/* const form = document.querySelector("form");
const target = document.querySelector("#target");
const input = document.querySelector("#guessField");
const button = document.querySelector("#validateButton");
const guessList = document.querySelector("#guessList");
const timerLabel = document.querySelector("#timer");


/*1.Mettre un bouton de type clique 
console.log

2; sélectionne le bouton - 
récupérer le contenu du champ de saisie
ajouter à un tableau

/*let participantsBouton = document.createElement('button')
  participantsBouton.textContent = "Ajouter un participant"
  participantsBouton.setAttribute('id', 'ajouter')
  document.body.appendChild(participantsBouton)
  document.querySelector('#ajouter').addEventListener('click', ajouter)
rafraichirAffichage()

function ajouter() {
    participants.forEach(function(participants){
      if (!participantsAjouter.includes(participants)) {
        participants.textContent = participants.textContent + " => ajouter"
        participantsAjouter.push(participants)
      }
    })
  }

let participantsBouton = document.querySelector('#ajouter')``
participantsBouton.addEventListener("click", ajouter)*/

/*function formSubmit(event) {
    event.preventDefault();
  
    const userNumber = input.valueAsNumber || 0;
  
    const span = document.createElement("span");
    span.textContent = userNumber;
    guessList.appendChild(span);
}

function ajout_participants()
{
  let participants = document.getElementById("participants");
  let les_li = ma_liste.getElementsByTagName("li");
  let listes_participants = les_li.length;
  let num_nouv_li = listes_participants + 1;
  let contenu_ma_liste = participants.innerHTML;
  let li_a_ajouter = '  <li id="li' + num_nouv_li + '">du texte dans le &lt;li> ' + num_nouv_li + '<\/li>';
alert("Actuellement, " + long_ma_liste + " <li> dans la liste");
  contenu_ma_liste = contenu_ma_liste + participants_a_ajouter;
  ma_liste.innerHTML = contenu_ma_liste;
  listes_participants = les_li.length;
   
alert("Et maintenant, " + listes_participants + " <li> dans la liste");
alert("Le dernier item de la liste est :\n" + participants_a_ajouter);
} */


function create_champ(i) {
  var i2 = i + 1;
  document.getElementById('leschamps_'+i).innerHTML = '<label>Participants['+i+']</label><input type="text" name="image['+i+']"></span>';
  document.getElementById('leschamps_'+i).innerHTML += (i <= 10) ? '<br /><span id="leschamps_'+i2+'"><a href="javascript:create_champ('+i2+')">Ajouter un participant</a></span>' : '';
  }