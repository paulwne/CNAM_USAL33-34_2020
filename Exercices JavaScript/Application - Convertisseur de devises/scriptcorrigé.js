// 1. Récupérer les devises avec  leur taux de change via l'API
// 2. Remplir le select avec les données récupérés
// 3. Récupérer les données du champ input, pour ceux qui sont bloqués car il n'y a pas de boutons, voici un peu d'aide : https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data
// 4. Une fois la valeur récupéré dans le premier champ, faire un calcul en fonction de la devise sélectionné et affiché le résultat dans le deuxième champ

const select = document.querySelector('select')
const eurCurrencyInput = document.querySelector('#eur-currency-value')
const targetCurrencyInput = document.querySelector('#target-currency-value')

let rates = {}

fetch('http://data.fixer.io/api/latest?access_key=c04821bde91294db7c5862e343a95bc5')
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    
    rates = json.rates
    // for(let i = 0; i < Object.entries(rates).length; i++) {
    //   const option = document.createElement('option')
    //   option.setAttribute('value', Object.entries(rates)[i][0])
    //   option.innerHTML = Object.entries(rates)[i][0]
    //   select.appendChild(option)
    // }

    // Object.entries(rates).map(function(rate) {
    //   const option = document.createElement('option')
    //   option.setAttribute('value', rate[0])
    //   option.innerHTML = rate[0]
    //   select.appendChild(option)
    // })

    for (const property in rates) {
      const option = document.createElement('option')
      option.setAttribute('value', property)
      option.innerHTML = property
      select.appendChild(option)
    }
  })

eurCurrencyInput.addEventListener('input', function(event) {
  const euroValue = Number(event.target.value)
  targetCurrencyInput.value = euroValue * rates[select.value]
})

select.addEventListener('change', function(event) {
  const euroValue = eurCurrencyInput.value
  targetCurrencyInput.value = euroValue * rates[select.value]
})