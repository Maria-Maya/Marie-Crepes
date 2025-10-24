let panier = [];

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  alert(`${nom} ajouté au panier !`);
  console.log("Panier actuel :", panier);
}

// Bonus : fonction pour afficher le total
function afficherTotal() {
  const total = panier.reduce((acc, item) => acc + item.prix, 0);
  alert(`Total du panier : ${total.toFixed(2)}€`);
}