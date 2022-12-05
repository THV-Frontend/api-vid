// Je crée une classe afin d'instancier mes films
class Film {
    // je crée un constructeur avec les paramètres requis
    constructor(titre, realisateur, dateSortie, description, dureeTotale, dureeVisionne, linkImage){
        this.titre = titre;
        this.realisateur = realisateur;
        this.dateSortie = dateSortie;
        this.description = description;
        this.dureeTotale = dureeTotale;
        this.dureeVisionne = dureeVisionne;
        this.linkImage = linkImage;
                  
    }
  }

    let monFilm1 = new Film("Titanic", "james Cameron", 1997, "Il raconte l'histoire de deux jeunes passagers du paquebot titanic",195, 135, "assets/img/titanic.jpg");
    let monFilm2 = new Film("Black panther", "Ryan Coogler", 2022," Une météorite de vibranium s'écrasa en Afrique",134, 134, "assets/img/black-panther.jpg");
    let monFilm3 = new Film("Bad boy for life", "Adil El Arbi", 2020, "l'histoire de deux policiers de Miami, Mike et Marcus", 124, 100, "assets/img/bad-boys.jpg"); 
    let monFilm4 = new Film("Le chevalier Black", "Gil Junger", 2001, "Jamal est employé dans un parc historique",95, 95, "assets/img/Le-chevalier-black.jpg");
    let monFilm5 = new Film("The mask", "Chuck Russell", 1994, "Un soir il trouve un masque ancien doté d'un pouvoirs surnaturels",101, 97, "assets/img/Mask.jpg");
    let monFilm6 = new Film("Aya de Yopougon", "Marguerite Abouet", 2013, "le film se deroule à Yopougon, un quartier populaire d'Abidjan",84, 84, "assets/img/Aya.jpg");

    let Films = [monFilm1, monFilm2, monFilm3, monFilm4, monFilm5, monFilm6];
    console.log(Films)

    const MovieFetch = fetch ("http://localhost:3000/api/movies");

    const displayMovieFetch = MovieFetch
    .then(function(res){
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value){
      console.log(value);
    })
    .catch(function(err){
      console.log(err);
    })

let MoyenneVisionnage = "";
let htmlElements ="";

for (let Film of Films) {
if (Film.dureeTotale == Film.dureeVisionne){
  icone = `<i class="vert fa-solid fa-clapperboard"></i>`
}
else {
  icone = `<i class="rouge fa-solid fa-clapperboard"></i>`
}



    htmlElements +=
        `<div class="col">
          <div class="card shadow-sm">
          <img src="${Film.linkImage}" alt="">
            <div class="card-body">
              <p class="card-text"><h2>${Film.titre} </h2><br>
              Réaliser par : <h3>${Film.realisateur}</h3><br>
              Date de sorie: <h4>${Film.dateSortie}</h4><br>
              Decription : <h5>${Film.description}</h5><br>
              ${icone} visionnage ${MoyenneVisionnage} %
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">La source</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Voir la fiche du film</button>
                </div>
                <small class="text-muted">Durée : ${Film.dureeTotale}<br>
                visionnage : ${Film.dureeVisionne}</small>
              </div>
            </div>
          </div>
        </div>`
document.getElementById("myid").innerHTML = htmlElements;

}