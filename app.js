const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NzEwMiwiZXhwIjoxOTU1ODQzMTAyfQ.EBp5-sp5cgvcnSQ0r1NeCR8qjr0YmSSAuRwBQeoFLKA"
const API_URL = "https://dlbygjrhshqjmolnvlqh.supabase.co/rest/v1/app"

//recuperer les elements du Dom
const apprenantElement = document.getElementById("app")
const appForm = document.querySelector("form")
const inputNom = document.querySelector("input#nom")
const inputPrenom = document.querySelector("input#prenom")
const appNiveau = document.querySelector("select#selection")
const inputBiographie = document.querySelector("textarea#biographie")
const tab= []


//Les fonctions
const creerUneCarte = (app) => {
    //création de nos ids
   
    //Insertion de la carte au niveau du DOM
    apprenantElement.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card card-app mb-2 ms-3 shadow" style="max-width: 350px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="./image/homme.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bold">${app.prenom} ${app.nom}</h5>
            <p class="card-text text-gris">${app.biographie}</p>
            <p class="card-text card-niveau">${app.niveau}</p>
          </div>
        </div>
      </div>
    </div>
    `
    )
}

// VERIFICATION DES MOTS SAISIS
  inputBiographie.addEventListener("input", (event) => {
    const longueurMax = 130
    const contenuSaisi = inputBiographie.value
    const longueurSaisi = contenuSaisi.length
    const reste = longueurMax - longueurSaisi
  
    //actualiser le dom pour afficher le nombre
    const paragraphCompteur = document.getElementById("limite-text")
    const compteurText = document.getElementById("text-progress")
    const restantText = document.getElementById("text-restant")
    const btnBiographie = document.getElementById("btn-bio")
    compteurText.textContent = longueurSaisi
    restantText.textContent = " Il vous reste " + reste
  
    //changer couleur
  
    if (reste < 0) {
      paragraphCompteur.style.color = "#ce0033"
      btnBiographie.disabled = true
    } else if (reste <= 16) {
      paragraphCompteur.style.color = "green"
      btnBiographie.disabled = false
    } else {
      paragraphCompteur.style.color = "#00000"
      btnBiographie.disabled = false
    }
  });

  // RECUPERATION DES INFORMAIONS DU FORMULAIRE
    appForm.addEventListener("submit", (event) => {
    event.preventDefault()
  
    // Récupération des informations saisies
    const nomSaisi = inputNom.value
    const prenomSaisi = inputPrenom.value
    const niveauSelect = appNiveau.value
    const biographieSaisi = inputBiographie.value

    // mettre les informations sous forme
    const nouvelleApp = {
      nom: nomSaisi,
      prenom: prenomSaisi,
      niveau: niveauSelect,
      biographie: biographieSaisi,
    } 
    creerUneCarte(nouvelleApp)
    // on vide les champs
    inputNom.value = ""
    inputPrenom.value = ""
    appNiveau.value = ""
    inputBiographie.value = ""
  });

  document.querySelector('.btn').addEventListener('click', ()=>{

    // Récupération des informations saisies
 const nomSauvegarde = inputNom.value
 const prenomSauvegarde = inputPrenom.value
 const niveauSauvegarde = appNiveau.value
 const biographieSauvegarde = inputBiographie.value


  // mettre les informations sous forme
  const nouvelApp = {
     nom: nomSauvegarde,
     prenom: prenomSauvegarde,
     niveau: niveauSauvegarde,
     biographie: biographieSauvegarde,
   } 
   
 //ENVOYER LES DONNEES VERS SUPABASE
 fetch(API_URL, {
   method: "POST",
   headers: {
     apikey: API_KEY,
     "Content-Type": "application/json",
     Prefer: "return=representation",
   },
   body: JSON.stringify(nouvelApp),
 })
   .then((response) => response.json())
   .then((data) => {
     appCreeAuNiveauAPI = data[0]
     creerUneCarte(appCreeAuNiveauAPI)
     tab.push(nouvelApp)
   })
   
// on vide les champs
 inputNom.value = ""
 inputPrenom.value = ""
 appNiveau.value = ""
 inputBiographie.value = ""

 location.href = "liste .html"

 })


