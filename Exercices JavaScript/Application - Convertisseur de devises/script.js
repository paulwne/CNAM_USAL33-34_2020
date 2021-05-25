const Select = document.querySelector(".select-currency");

const Euro = document.querySelector("#eur-currency-value");

const Target = document.querySelector("#target-currency-value");

const convertisseurDevise = (devise) => {
  const devise = document.createElement("devise");
  deivise.classList.add("convertisseur");
  const content = `<div class="Convertisseur-content"><h2>${devise}</h2></div>`;
  devise.innerHTML = content;
  select.appendChild(devise);
};

/*fetch('http://data.fixer.io/api/latest?access_key=005b3d672113110c0b433c1eedafb6a3', {
})
  .then((response) => response.json())
  .then(json) = await response.json()*/

fetch('http://data.fixer.io/api/latest?access_key=005b3d672113110c0b433c1eedafb6a3')
   .then(response => response.json())
   .then(json => {
     json.map(post => convertisseurDevise(post.devise))
  } )

fetch('http://data.fixer.io/api/latest?access_key=005b3d672113110c0b433c1eedafb6a3', {
    method: 'GET',
    devise: JSON.stringify({"GBP":0.861483,"USD":1.21405,"EUR":1
    }),
    content: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((posts) => convertisseurDevise(posts.devise))

/*const rates = {"GBP":0.861483,"USD":1.21405,"EUR":1}

function euro(e) {
    document.getElementById("euro-currency-value").innerHTML = e.data;
  }*/



