
    function confirmReservation() {
      alert("Merci pour votre réservation ! Nous vous attendons avec impatience.");
      return false; // Empêche l'envoi réel du formulaire
    }

    function sendMessage() {
      alert("Merci pour votre message ! Nous vous répondrons rapidement.");
      return false;
    }

    function preparerCrepe() {
      const garnitures = [];
      if (document.getElementById("sucre").checked) garnitures.push("sucre");
      if (document.getElementById("confiture").checked) garnitures.push("confiture");
      if (document.getElementById("nutella").checked) garnitures.push("Nutella");
      if (document.getElementById("caramel").checked) garnitures.push("caramel au beurre salé");
      if (document.getElementById("fruits").checked) garnitures.push("fruits frais");
      if (document.getElementById("chantilly").checked) garnitures.push("chantilly");

      let resultat = "Votre crêpe de froment sucrée est prête avec : ";
      resultat += garnitures.length > 0 ? garnitures.join(", ") : "aucune garniture sélectionnée.";
      document.getElementById("resultat").textContent = resultat;
    }

     function afficherPresentation() {
      const texte = `
        <strong>Style chaleureux et artisanal</strong><br><br>
        Bienvenue à <em>MIMI Crêpes</em>, un petit coin de bonheur niché au cœur de Paris.
        Ici, chaque crêpe est préparée avec amour, dans le respect des traditions bretonnes et avec des ingrédients frais et locaux.
        Que vous soyez amateur de douceurs sucrées ou de saveurs salées, notre carte vous invite à un voyage gourmand.
        Installez-vous, respirez l’odeur du beurre fondu, et laissez-vous séduire par l’ambiance conviviale de notre maison.
      `;
      document.getElementById("presentation").innerHTML = texte;
    }
let panier = [];

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  liste.innerHTML = "";
  let total = 0;

  panier.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nom} - ${item.prix.toFixed(2)}€`;
    liste.appendChild(li);
    total += item.prix;
  });

  document.getElementById("total").textContent = total.toFixed(2) + "€";
}

function validerPanier() {
  alert("Commande validée ! Merci et bon appétit 🍽️");
  panier = [];
  afficherPanier();
}
/*
function personnaliserCrepe() {
  const garnitures = [];
  if (document.getElementById("sucre").checked) garnitures.push("sucre");
  if (document.getElementById("confiture").checked) garnitures.push("confiture");
  if (document.getElementById("nutella").checked) garnitures.push("Nutella");
  if (document.getElementById("caramel").checked) garnitures.push("caramel au beurre salé");
  if (document.getElementById("fruits").checked) garnitures.push("fruits frais");
  if (document.getElementById("chantilly").checked) garnitures.push("chantilly");

  const description = garnitures.length > 0 ? garnitures.join(", ") : "aucune garniture";
  const prixBase = 5.00;
  const prixTotal = prixBase + garnitures.length * 0.50;

  const nomCrepe = `Crêpe personnalisée (${description})`;
  ajouterAuPanier(nomCrepe, prixTotal);

  document.getElementById("resultat").textContent = `Ajouté : ${nomCrepe} - ${prixTotal.toFixed(2)}€`;
  return false;
}
*/function personnaliserCrepe() {
  const garnitures = [];
  if (document.getElementById("sucre").checked) garnitures.push("sucre");
  if (document.getElementById("confiture").checked) garnitures.push("confiture");
  if (document.getElementById("nutella").checked) garnitures.push("Nutella");
  if (document.getElementById("caramel").checked) garnitures.push("caramel au beurre salé");
  if (document.getElementById("fruits").checked) garnitures.push("fruits frais");
  if (document.getElementById("chantilly").checked) garnitures.push("chantilly");

  const description = garnitures.length > 0 ? garnitures.join(", ") : "aucune garniture";
  const prixBase = 5.00;
  const prixTotal = prixBase + garnitures.length * 0.50;

  const nomCrepe = `Crêpe personnalisée (${description})`;
  ajouterAuPanier(nomCrepe, prixTotal);

  document.getElementById("resultat").textContent = `Ajouté : ${nomCrepe} - ${prixTotal.toFixed(2)}€`;
  return false;
}


/***/////////////////////// */
function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  liste.innerHTML = "";
  let total = 0;

  panier.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nom} - ${item.prix.toFixed(2)}€
      <button onclick="supprimerDuPanier(${index})" style="margin-left:10px; background-color:#ff6b6b; color:white; border:none; border-radius:4px; padding:4px 8px; cursor:pointer;">Supprimer</button>
    `;
    liste.appendChild(li);
    total += item.prix;
  });

  document.getElementById("total").textContent = total.toFixed(2) + "€";
}

function supprimerDuPanier(index) {
  panier.splice(index, 1);
  afficherPanier();
}

function validerPanier() {
  if (panier.length === 0) {
    alert("Votre panier est vide !");
    return;
  }
  alert("Commande validée ! Merci et bon appétit 🍽️");
  panier = [];
  afficherPanier();
}

function supprimerCommande() {
  if (panier.length === 0) {
    alert("Le panier est déjà vide.");
    return;
  }
  if (confirm("Voulez-vous vraiment supprimer toute la commande ?")) {
    panier = [];
    afficherPanier();
  }
}
/*
function changerLangue(langue) {
  alert("La version multilingue est en cours de développement !");
}
function activerThemeAutomne() {
  document.body.classList.toggle("automne");
}
const textes = {
  fr: {
    accueil: "Bienvenue à Crêperie Délice",
    description: "Un petit coin de bonheur niché au cœur de Paris.Ici, chaque crêpe est préparée avec amour, dans le respect des traditions bretonnes et avec des ingrédients frais et locaux. Que vous soyez amateur de douceurs sucrées ou de saveurs salées, notre carte vous invite à un voyage gourmand.Installez-vous, respirez l’odeur du beurre fondu, et laissez-vous séduire par l’ambiance conviviale de notre maison.",
    boutonMenu: "Voir le menu",
    panierVide: "Votre panier est vide !",
    commandeValidee: "Commande validée ! Merci et bon appétit 🍽️"
  },
  en: {
    accueil: "Welcome to Crêperie Délice",
    description: "A little slice of happiness tucked away in the heart of Paris. Here, every crêpe is lovingly crafted in the spirit of Breton tradition, using fresh, locally sourced ingredients. Whether you're drawn to sweet indulgences or savory delights, our menu invites you on a delicious journey. Sit back, breathe in the scent of melting butter, and let yourself be charmed by the friendly atmosphere of our home. ",
    boutonMenu: "View the menu",
    panierVide: "Your cart is empty!",
    commandeValidee: "Order confirmed! Thank you and enjoy your meal 🍽️"
  }
};

let langueActive = "fr";

function changerLangue(langue) {
  langueActive = langue;
  document.querySelector(".presentation h1").textContent = textes[langue].accueil;
  document.querySelector(".presentation p").textContent = textes[langue].description;
  document.querySelector(".btn-menu").textContent = textes[langue].boutonMenu;
}
function validerPanier() {
  if (panier.length === 0) {
    alert(textes[langueActive].panierVide);
    return;
  }
  new Audio("confirmation.mp3").play();
  alert(textes[langueActive].commandeValidee);
  panier = [];
  afficherPanier();
}*/
const textes = {
  fr: {
    accueil: "Bienvenue à MIMI Crêpes",
    description: "Un petit coin de bonheur niché au cœur de Paris. Ici, chaque crêpe est préparée avec amour Un petit coin de bonheur niché au cœur de Paris. Ici, chaque crêpe est préparée avec amour, dans le respect des traditions bretonnes et avec des ingrédients frais et locaux.Que vous soyez amateur de douceurs sucrées ou de saveurs salées, notre carte vous invite à un voyage gourmand.Installez-vous, respirez l’odeur du beurre fondu, et laissez-vous séduire par l’ambiance conviviale de notre maison.",
    boutonMenu: "Voir le menu",
    panierVide: "Votre panier est vide !",
    commandeValidee: "Commande validée ! Merci et bon appétit 🍽️",
    contact:"Contact",
    réservation:"Réservation",
    avi:"Avi",
    footer:"Footer"
  },
  en: {
    accueil: "Welcome to MIMI Crêpes ",
    description: "A little slice of happiness tucked away in the heart of Paris. Here, every crêpe is lovingly crafted.Here, every crêpe is lovingly prepared, honoring Breton traditions and using fresh, local ingredients.Whether you're a fan of sweet delights or savory flavors, our menu invites you on a gourmet journey.Sit back, breathe in the aroma of melted butter, and let yourself be charmed by the warm, welcoming atmosphere of our home.",
    boutonMenu: "View the menu",
    panierVide: "Your cart is empty!",
    commandeValidee: "Order confirmed! Thank you and enjoy your meal 🍽️",
    contact: "Contact",
    réservation: "Booking",
    avi: "Review",
    footer: "Footer"
  },
  es: {
    accueil: "Bienvenidos a MIMI Crêpes",
    description: "Un rincón de felicidad en el corazón de París. Aquí, cada crêpe se prepara con amor...",
    boutonMenu: "Ver el menú",
    panierVide: "¡Tu carrito está vacío!",
    commandeValidee: "¡Pedido confirmado! Gracias y buen provecho 🍽️"
  },
  it: {
    accueil: "Benvenuti da MIMI Crêpes",
    description: "Un angolo di felicità nel cuore di Parigi. Qui ogni crêpe è preparata con amore...",
    boutonMenu: "Vedi il menu",
    panierVide: "Il tuo carrello è vuoto!",
    commandeValidee: "Ordine confermato! Grazie e buon appetito 🍽️"
  },
  pt: {
    accueil: "Bem-vindo à MIMI Crêpes",
    description: "Um cantinho de felicidade no coração de Paris. Aqui, cada crepe é feito com carinho...",
    boutonMenu: "Ver o menu",
    panierVide: "Seu carrinho está vazio!",
    commandeValidee: "Pedido confirmado! Obrigado e bom apetite 🍽️"
  }
};

let langueActive = "fr";

function changerLangue(langue) {
  langueActive = langue;
  document.querySelector(".presentation h1").textContent = textes[langue].accueil;
  document.querySelector(".presentation p").textContent = textes[langue].description;
  const boutonMenu = document.querySelector(".btn-menu");
  if (boutonMenu) boutonMenu.textContent = textes[langue].boutonMenu;
}

function validerPanier() {
  if (panier.length === 0) {
    alert(textes[langueActive].panierVide);
    return;
  }
  new Audio("confirmation.mp3").play();
  alert(textes[langueActive].commandeValidee);
  panier = [];
  afficherPanier();
}


document.addEventListener("DOMContentLoaded", () => {
  const langueNavigateur = navigator.language.slice(0, 2); // "fr", "en", etc.
  const languesDisponibles = ["fr", "en", "es", "it", "pt"];
  const langueParDefaut = languesDisponibles.includes(langueNavigateur) ? langueNavigateur : "fr";
  changerLangue(langueParDefaut);
  document.getElementById("langue-select").value = langueParDefaut;
});


/*////////////////////////////////////////////////////////////////////////////////////////////*/

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});


/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*function filtrerMenu(categorie) {
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => {
    if (categorie === "tous") {
      item.style.display = "block";
    } else {
      item.style.display = item.classList.contains(categorie) ? "block" : "none";
    }
  });
}
*/