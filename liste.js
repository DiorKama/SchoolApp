const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NzEwMiwiZXhwIjoxOTU1ODQzMTAyfQ.EBp5-sp5cgvcnSQ0r1NeCR8qjr0YmSSAuRwBQeoFLKA"
const API_URL = "https://dlbygjrhshqjmolnvlqh.supabase.co/rest/v1/app"

//recuperer les elements du Dom
const apprenantElement = document.getElementById("cartes")
const appForm = document.querySelector("form")
const inputNom = document.querySelector("input#nom")
const inputPrenom = document.querySelector("input#prenom")
const appNiveau = document.querySelector("select#selection")
const inputBiographie = document.querySelector("textarea#biographie")
const sauvegarder = document.getElementById("sauvegarder")

const creerUneCarte = (app) => {
    //création de nos ids
   const idbtndetail ="btn-datail" + app.id
    //Insertion de la carte au niveau du DOM
    apprenantElement.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card card-app mb-3 ms-3 shadow" style="max-width: 350px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="./image/homme.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bold">${app.prenom} ${app.nom}</h5>
            <p class="card-text text-gris">${app.biographie}</p>
            <p class="card-text card-niveau">${app.niveau}</p>
            <button id="${idbtndetail}" class="btn-success btndetail">Details</button>
          </div>
        </div>
      </div>
    </div>
    `
    )

    const btnDetail = document.getElementById(idbtndetail)
    btnDetail.addEventListener('click', (event)=>{
      event.preventDefault();
      //alert(app.nom);
      sessionStorage.setItem("idApp",app.id)
      window.location.href="details.html"
    })
}

window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((app) => {
        app.forEach((dior) => {
          creerUneCarte(dior)
        })
      })
  })