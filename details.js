const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NzEwMiwiZXhwIjoxOTU1ODQzMTAyfQ.EBp5-sp5cgvcnSQ0r1NeCR8qjr0YmSSAuRwBQeoFLKA"
const API_URL = "https://dlbygjrhshqjmolnvlqh.supabase.co/rest/v1/app"

const appDetail = document.getElementById("detail")
const creerUneCarte = (app) => {
    //Insertion des details
appDetail.insertAdjacentHTML(

  "beforeend",    
  `
 <div class="row mb-3 ms-3">
 <div class="col-md-4">
  <img src="./image/homme.png" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-2 mt-5"></div>
  <div class="col-md-6 mt-5">
  <h2 class="title fw-bold">${app.prenom} ${app.nom}</h2>
          <p class="text text-gris">${app.biographie}</p>
          <p class="text">${app.niveau}</p>
  </div>
  </div>
  <div class="row mb-3 ms-3">
   <h2 class="text-start">Competences</h2>
  </div>
  
  <div class="row mb-2 ms-3">
    <div class="col-3">
        <h4>${app.competence1}</h4>
    </div>
    <div class="col-6">
    <div class="progress" style="height: 10px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${app.competence1_valeur}%" aria-valuenow="${app.competence1_valeur}" aria-valuemin="0" aria-valuemax="100">${app.competence1_valeur}</div>
    </div>
    </div>
  </div>

 <div class="row mb-2 ms-3">
    <div class="col-3">
        <h4>${app.competence2}</h4>
    </div>
    <div class="col-6">
    <div class="progress" style="height: 10px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${app.competence2_valeur}%" aria-valuenow="${app.competence2_valeur}" aria-valuemin="0" aria-valuemax="100">${app.competence2_valeur}</div>
    </div>
    </div>
 </div>

 <div class="row mb-2 ms-3">
    <div class="col-3">
        <h4>${app.competence3}</h4>
    </div>
    <div class="col-6">
    <div class="progress" style="height: 10px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${app.competence3_valeur}%" aria-valuenow="${app.competence3_valeur}" aria-valuemin="0" aria-valuemax="100">${app.competence3_valeur}</div>
    </div>
    </div>
 </div>

 <div class="row mb-2 ms-3">
    <div class="col-3">
        <h4>${app.competence4}</h4>
    </div>
    <div class="col-6">
    <div class="progress" style="height: 10px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${app.competence4_valeur}%" aria-valuenow="${app.competence4_valeur}" aria-valuemin="0" aria-valuemax="100">${app.competence4_valeur}</div>
    </div>
    </div>
 </div>

 <div class="row mb-2 ms-3">
    <div class="col-3">
        <h4>${app.competence5}</h4>
    </div>
    <div class="col-6">
    <div class="progress" style="height: 10px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${app.competence5_valeur}%" aria-valuenow="${app.competence5_valeur}" aria-valuemin="0" aria-valuemax="100">${app.competence5_valeur}</div>
    </div>
    </div>
 </div>

 <div class="row mb-2 ms-3">
    <div class="col-3">
        <h4>${app.competence6}</h4>
    </div>
    <div class="col-6">
    <div class="progress" style="height: 10px;">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${app.competence6_valeur}%" aria-valuenow="${app.competence6_valeur}" aria-valuemin="0" aria-valuemax="100">${app.competence6_valeur}</div>
    </div>
    </div>
 </div>
`
)
}

const idApp = sessionStorage.getItem("idApp")
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
          if(dior.id==idApp){
            creerUneCarte(dior)
              //alert(dior.nom, dior.prenom)
          }
            
        })
      })
  })

