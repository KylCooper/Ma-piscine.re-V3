////////// Menu Burger //////////
const links = document.querySelectorAll('nav li');

icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

links.forEach((link)=>{
    link.addEventListener('click', () => {
        nav.classList.remove("active")
    })
})
/////////////////////////////////  

////////// Link Active & Forme //////////

document.addEventListener('DOMContentLoaded', function() {
  const thumbsLinks = document.querySelectorAll('.thumb-link');

  // Vérifier s'il y a un élément sélectionné dans le localStorage
  const selectedId = localStorage.getItem('selectedId');
  if (selectedId) {
    // Retirer la classe "marked" de tous les blocs blancs
    const whiteBlocs = document.querySelectorAll('.white-bloc');
    whiteBlocs.forEach((whiteBloc) => {
      whiteBloc.classList.remove('marked');
    });

    // Ajouter la classe "marked" au bloc blanc correspondant à l'élément sélectionné dans le localStorage
    const selectedWhiteBloc = document.getElementById(selectedId + '-bloc');
    if (selectedWhiteBloc) {
      selectedWhiteBloc.classList.add('marked');
    }
  }

  thumbsLinks.forEach((thumbLink) => {
    thumbLink.addEventListener('click', (event) => {
      event.preventDefault(); // Empêcher le comportement par défaut de ramener en haut de la page

      // Retirer la classe "marked" de tous les autres blocs blancs
      const whiteBlocs = document.querySelectorAll('.white-bloc');
      whiteBlocs.forEach((whiteBloc) => {
        whiteBloc.classList.remove('marked');
      });

      // Ajouter la classe "marked" au bloc blanc correspondant
      const whiteBloc = thumbLink.closest('.forme-thumb-container').querySelector('.white-bloc');
      whiteBloc.classList.add('marked');

      // Stocker l'ID de l'élément sélectionné dans le localStorage
      const selectedId = thumbLink.id;
      localStorage.setItem('selectedId', selectedId);
    });
  });
});

////////// Link Dimensions //////////

document.addEventListener('DOMContentLoaded', function() {
  const largeurRulers = document.querySelectorAll('.ruler-largeur .number-ruler');
  const longueurRulers = document.querySelectorAll('.ruler-longeur .number-ruler');

  // Fonction pour enregistrer la largeur sélectionnée dans le localStorage
  function saveSelectedLargeur(numberValue) {
    localStorage.setItem('selectedLargeur', numberValue);
    // Supprime la clé 'selectedDimensions' si elle existe encore
    if (localStorage.getItem('selectedDimensions')) {
      localStorage.removeItem('selectedDimensions');
    }
  }

  // Fonction pour enregistrer la longueur sélectionnée dans le localStorage
  function saveSelectedLongueur(numberValue) {
    localStorage.setItem('selectedLongueur', numberValue);
    // Supprime la clé 'selectedDimensions' si elle existe encore
    if (localStorage.getItem('selectedDimensions')) {
      localStorage.removeItem('selectedDimensions');
    }
  }

  // Récupère la largeur sélectionnée depuis le localStorage
  const selectedLargeur = localStorage.getItem('selectedLargeur');
  // Applique la classe "number-marked" à la largeur sélectionnée
  if (selectedLargeur) {
    const selectedLargeurElement = document.getElementById(selectedLargeur);
    if (selectedLargeurElement) {
      selectedLargeurElement.classList.add('number-marked');
    }
  }

  // Récupère la longueur sélectionnée depuis le localStorage
  const selectedLongueur = localStorage.getItem('selectedLongueur');
  // Applique la classe "number-marked" à la longueur sélectionnée
  if (selectedLongueur) {
    const selectedLongueurElement = document.getElementById(selectedLongueur);
    if (selectedLongueurElement) {
      selectedLongueurElement.classList.add('number-marked');
    }
  }

  // Ajoute un écouteur d'événement pour chaque numéro de largeur
  largeurRulers.forEach((number) => {
    number.addEventListener('click', () => {
      const numberValue = number.textContent.trim(); // Récupère le texte du numéro
      // Supprime la classe "number-marked" de tous les numéros de largeur
      largeurRulers.forEach((otherNumber) => {
        otherNumber.classList.remove('number-marked');
      });
      // Ajoute la classe "number-marked" au numéro de largeur cliqué
      number.classList.add('number-marked');
      // Enregistre la largeur sélectionnée dans le localStorage
      saveSelectedLargeur(numberValue);
    });
  });

  // Ajoute un écouteur d'événement pour chaque numéro de longueur
  longueurRulers.forEach((number) => {
    number.addEventListener('click', () => {
      const numberValue = number.textContent.trim(); // Récupère le texte du numéro
      // Supprime la classe "number-marked" de tous les numéros de longueur
      longueurRulers.forEach((otherNumber) => {
        otherNumber.classList.remove('number-marked');
      });
      // Ajoute la classe "number-marked" au numéro de longueur cliqué
      number.classList.add('number-marked');
      // Enregistre la longueur sélectionnée dans le localStorage
      saveSelectedLongueur(numberValue);
    });
  });
});

////////// Link Revêtement //////////

// Sélection de tous les éléments .R-thumb
const thumbElements = document.querySelectorAll('.R-thumb');

// Parcourir chaque élément .R-thumb
thumbElements.forEach(thumbElement => {
    // Ajouter un écouteur d'événements "click" à chaque élément .R-thumb
    thumbElement.addEventListener('click', function() {
        // Supprimer la classe .R-thumb-marked de tous les éléments .R-thumb
        thumbElements.forEach(element => {
            element.classList.remove('R-thumb-marked');
        });

        // Ajouter la classe .R-thumb-marked à l'élément cliqué
        this.classList.add('R-thumb-marked');

        // Récupérer le type de revêtement (texte dans la balise h5)
        const revetementType = this.querySelector('.R-title').textContent;
        
        // Enregistrer le type de revêtement dans le localStorage
        localStorage.setItem('selectedRevetement', revetementType);
        
        // Afficher le type de revêtement dans la console (ou vous pouvez faire autre chose avec cette information)
        console.log('Type de revêtement sélectionné:', revetementType);
    });
});

////////// Link Option //////////

document.addEventListener("DOMContentLoaded", function() {
  const optionThumbs = document.querySelectorAll(".option-thumb");

  optionThumbs.forEach(function(thumb) {
    thumb.addEventListener("click", function() {
      // Retirer la classe .option-thumb-marked de tous les éléments
      optionThumbs.forEach(function(item) {
        item.classList.remove("option-thumb-marked");
      });

      // Ajouter la classe .option-thumb-marked à l'élément cliqué
      thumb.classList.add("option-thumb-marked");

      // Enregistrer le type d'option dans le localStorage
      const optionType = thumb.querySelector(".R-title").textContent;
      localStorage.setItem("selectedOption", optionType);
    });
  });
});

////////// Formulaire  //////////

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher l'envoi par défaut du formulaire

  // Appel de la fonction pour envoyer le formulaire via EmailJS
  SendMail();
});

function SendMail() {
  // Récupérer les valeurs des champs du formulaire
  var params = {
      nom: document.getElementById('nom').value,
      prenom: document.getElementById('prenom').value,
      email: document.getElementById('email').value,
      adresse: document.getElementById('adresse').value,
      telephone: document.getElementById('telephone').value,
      // Récupérer les valeurs stockées dans le localStorage
      forme: localStorage.getItem('selectedId'),
      longeur_largeur: localStorage.getItem('selectedDimensions'),
      longeur: localStorage.getItem('selectedLongueur'),
      largeur: localStorage.getItem('selectedLargeur'),
      revetement: localStorage.getItem('selectedRevetement'),
      option: localStorage.getItem('selectedOption')
  };

  emailjs.send("service_61t96c4","template_f6fu6if", params)
      .then(function(res) {
          alert("Success!" + res.status);
      });
}

////////// Validation du formulaire  //////////

document.getElementById('myForm').addEventListener('submit', function(event) {
  if (!document.getElementById('validation').checked) {
      alert("Veuillez confirmer que vous acceptez les conditions.");
      event.preventDefault(); // Empêcher la soumission du formulaire
  } else {
      // Effacer le localStorage si les conditions sont acceptées et le formulaire est soumis
      localStorage.clear();
  }
});

  