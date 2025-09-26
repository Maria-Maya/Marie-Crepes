// Exemple de panier simulé (à remplacer par du vrai stockage si besoin)
const panier = [
  { nom: "Crêpe Nutella Banane", prix: 6.5 },
  { nom: "Crêpe Jambon Fromage", prix: 7.0 }
];

const liste = document.getElementById("liste-panier");
const totalSpan = document.getElementById("total");

let total = 0;
panier.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.nom} - ${item.prix.toFixed(2)}€`;
  liste.appendChild(li);
  total += item.prix;
});

totalSpan.textContent = `${total.toFixed(2)}€`;

function validerPanier() {
  alert("Commande validée !");
}

function supprimerCommande() {
  alert("Commande supprimée !");
  liste.innerHTML = "";
  totalSpan.textContent = "0,00€";
}