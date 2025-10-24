// Exemple de panier simulé
let panier = [
  { nom: "Crêpe Nutella", prix: 4.5 },
  { nom: "Crêpe Caramel Pommes", prix: 5.0 },
  { nom: "Crêpe Pistache", prix: 5.5 }
];

// Fonction pour afficher le panier
function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  const totalSpan = document.getElementById("total");
  liste.innerHTML = "";

  let total = 0;

  panier.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nom} - ${item.prix.toFixed(2)}€`;
    liste.appendChild(li);
    total += item.prix;
  });

  totalSpan.textContent = `${total.toFixed(2)}€`;
}

// Fonction pour valider la commande
function validerPanier() {
  if (panier.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  alert("Commande validée ! Merci pour votre achat 🍽️");
  panier = []; // Vide le panier après validation
  afficherPanier();
}

// Fonction pour supprimer la commande
function supprimerCommande() {
  if (panier.length === 0) {
    alert("Le panier est déjà vide.");
    return;
  }

  const confirmation = confirm("Voulez-vous vraiment supprimer la commande ?");
  if (confirmation) {
    panier = [];
    afficherPanier();
    alert("Commande supprimée.");
  }
}

// Affiche le panier au chargement
window.onload = afficherPanier;

function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  const totalSpan = document.getElementById("total");
  liste.innerHTML = "";

  let total = 0;

  panier.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nom} - ${item.prix.toFixed(2)}€
      <button onclick="supprimerArticle(${index})"
        style="margin-left:10px; background-color:#f44336; color:white; border:none; border-radius:4px; padding:4px 8px; cursor:pointer;">
        Supprimer
      </button>
    `;
    liste.appendChild(li);
    total += item.prix;
  });

  totalSpan.textContent = `${total.toFixed(2)}€`;
}
function supprimerArticle(index) {
  panier.splice(index, 1); // Supprime l’article à l’index donné
  afficherPanier();        // Met à jour l’affichage
}