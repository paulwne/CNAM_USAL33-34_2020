const generateMovieCard = (movie) => {
    const card = document.createElement("div");
    card.classList = "card";
  
    const title = document.createElement("h1");
    title.textContent = movie.title;
    card.appendChild(title);
  
    const metaContainer = document.createElement("div");
    metaContainer.classList = "card__meta";
    const releaseDate = document.createElement("span");
    releaseDate.classList = "card__release-date";
    releaseDate.textContent = `${movie.releaseDate}, ${movie.director}`;
    metaContainer.appendChild(releaseDate);
    card.appendChild(metaContainer);
  
    const actorsContainer = document.createElement("div");
    actorsContainer.classList = "card__actors";
    const actorsTitle = document.createElement("h3");
    actorsTitle.classList = "card__actors--title";
    actorsTitle.textContent = "Acteurs :";
    actorsContainer.appendChild(actorsTitle);
    const actors = document.createElement("ul");
    actors.classList = "card__actors--list";
    movie.actors.map((actor) => {
      const item = document.createElement("li");
      item.textContent = `${actor.firstname} ${actor.lastname} (${actor.birthdate})`;
      actors.appendChild(item);
    });
    actorsContainer.appendChild(actors);
    card.appendChild(actorsContainer);
  
    const genresContainer = document.createElement("div");
    genresContainer.classList = "card__genres";
    const genres = document.createElement("ul");
    genres.classList = "card__genres--list";
    movie.genres.map((genre) => {
      const item = document.createElement("li");
      item.textContent = genre;
      genres.appendChild(item);
    });
    genresContainer.appendChild(genres);
    card.appendChild(genresContainer);
  
    if (movie.favorite) {
      const favorite = document.createElement("div");
      favorite.innerHTML =
        '<svg class="favorite-icon" role="img" aria-hidden="true"><use xlink:href="#favorite-icon"></use></svg>';
      card.appendChild(favorite);
    }
  
    document.querySelector(".container").appendChild(card);
  };


let movie1 = {
    title : "Harry Potter and the Sorcerer's Stone",
    director : "Chris Columbus",
    writer : "JK Rowling",
    releaseDate : 2001,
    genres : ["Adventure", "Family", "Fantasy"],
    actors : [{firstname : "Daniel",
              lastname : "Radcliffe",
              birthdate : 1989,
            },
            {firstname : "Emma",
            lastname : "Watson",
            birthdate : 1990,
            },
            {firstane : "Rupert",
            lastname : "Grint",
            birthdate : 1988,
            }, 
            ],
      favorite : true,}

let movie2 = {
    title : "Sightless",
    director : "Cooper Karl",
    releaseDate : 2020,
    genres : ["Drama", "Thriller"],
    actors : [{firstname : "Madelaine",
              lastname : "Petsch",
              birthdate : 1994,
              },
              {firstname : "Alexander",
              lastname : "Koch",
              birthdate : 1988,
              },
              {firstane : "Deniz",
              lastname : "Akdeniz",
              birthdate : 1990,
              }, 
              ],
       favorite : true,
      };

const movies = [movie1, movie2];
movies.map((movie) => generateMovieCard(movie));



function getTitle(movie) {
      console.log(movie.title);
}

function getTitle(movie) {
      console.log(movie.title);
}

function getFirstStar(movie) {
      console.log(movie.actors[0].firtsname + " " +  movie.actors[0].lastname);
}   
