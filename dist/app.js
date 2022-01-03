/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("const API_KEY =\n  \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDI2NzEwMiwiZXhwIjoxOTU1ODQzMTAyfQ.EBp5-sp5cgvcnSQ0r1NeCR8qjr0YmSSAuRwBQeoFLKA\"\nconst API_URL = \"https://dlbygjrhshqjmolnvlqh.supabase.co/rest/v1/app\"\n\n//recuperer les elements du Dom\nconst apprenantElement = document.getElementById(\"app\")\nconst appForm = document.querySelector(\"form\")\nconst inputNom = document.querySelector(\"input#nom\")\nconst inputPrenom = document.querySelector(\"input#prenom\")\nconst appNiveau = document.querySelector(\"select#selection\")\nconst inputBiographie = document.querySelector(\"textarea#biographie\")\nconst sauvegarder = document.getElementById(\"sauvegarder\")\nconst tab= []\n\n\n//Les fonctions\nconst creerUneCarte = (app) => {\n  const idButtonModifier =\"btn_modifier\" +app.id\n  const idButtonSupprimer =\"btn_supprimer\" +app.id\n   \n    //Insertion de la carte au niveau du DOM\n    apprenantElement.insertAdjacentHTML(\n      \"beforeend\",\n      `\n      <div class=\"card card-app mb-2 ms-3 shadow\" style=\"max-width: 350px;\">\n      <div class=\"row g-0\">\n        <div class=\"col-md-3\">\n            <img src=\"./image/homme.png\" class=\"img-fluid rounded-start\" alt=\"...\">\n        </div>\n        <div class=\"col-md-3\">\n        <i class=\"bi bi-pencil text-primary card-link btn\"\n        id=\"${idButtonModifier}\"\n        style=\"font-size:2rem;\">\n        </i>\n\n        <i class=\"bi bi-trash card-link btn\"\n        id=\"${idButtonSupprimer}\"  \n        style=\"font-size:2rem; color:#ce0033;\">\n        </i>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title fw-bold\">${app.prenom} ${app.nom}</h5>\n            <p class=\"card-text text-gris\">${app.biographie}</p>\n            <p class=\"card-text card-niveau\">${app.niveau}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    `)\n}\n\n//--------Ajout des evenements sur les button----------------------------------\nconst btnModifier= document.getElementById('idButtonModifier')\nconst btnSupprimer = document.getElementById('idButtonSupprimer')\n\n\n// VERIFICATION DES MOTS SAISIS\n  inputBiographie.addEventListener(\"input\", (event) => {\n    const longueurMax = 130\n    const contenuSaisi = inputBiographie.value\n    const longueurSaisi = contenuSaisi.length\n    const reste = longueurMax - longueurSaisi\n  \n    //actualiser le dom pour afficher le nombre\n    const paragraphCompteur = document.getElementById(\"limite-text\")\n    const compteurText = document.getElementById(\"text-progress\")\n    const restantText = document.getElementById(\"text-restant\")\n    const btnBiographie = document.getElementById(\"btn-bio\")\n    compteurText.textContent = longueurSaisi\n    restantText.textContent = \" Il vous reste \" + reste\n  \n    //changer couleur\n  \n    if (reste < 0) {\n      paragraphCompteur.style.color = \"#ce0033\"\n      btnBiographie.disabled = true\n    } else if (reste <= 16) {\n      paragraphCompteur.style.color = \"green\"\n      btnBiographie.disabled = false\n    } else {\n      paragraphCompteur.style.color = \"#00000\"\n      btnBiographie.disabled = false\n    }\n  });\n\n  // RECUPERATION DES INFORMAIONS DU FORMULAIRE\n    appForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n  \n    // Récupération des informations saisies\n    const nomSaisi = inputNom.value\n    const prenomSaisi = inputPrenom.value\n    const niveauSelect = appNiveau.value\n    const biographieSaisi = inputBiographie.value\n\n    // mettre les informations sous forme\n    const nouvelleApp = {\n      nom: nomSaisi,\n      prenom: prenomSaisi,\n      niveau: niveauSelect,\n      biographie: biographieSaisi,\n    } \n    creerUneCarte(nouvelleApp)\n    tab.push(nouvelleApp)\n    // on vide les champs\n    inputNom.value = \"\"\n    inputPrenom.value = \"\"\n    appNiveau.value = \"\"\n    inputBiographie.value = \"\"\n  });\n\n  sauvegarder.addEventListener('click', ()=>{\n\n   tab.forEach((element) => {\n       //ENVOYER LES DONNEES VERS SUPABASE\n fetch(API_URL, {\n    method: \"POST\",\n    headers: {\n      apikey: API_KEY,\n      \"Content-Type\": \"application/json\",\n      Prefer: \"return=representation\",\n    },\n    body: JSON.stringify(element),\n  })\n    .then((response) => response.json())\n    .then((data) => {\n      appCreeAuNiveauAPI = data[0]\n      window.location.href=\"liste .html\"\n    })\n   })\n    // on vide les champs\n    inputNom.value = \"\"\n    inputPrenom.value = \"\"\n    appNiveau.value = \"\"\n    inputBiographie.value = \"\"\n   })\n \n\n\n\n\n//# sourceURL=webpack://schoolapp/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;