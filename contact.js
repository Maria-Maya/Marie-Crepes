// Validation et affichage des messages d’erreur dynamiques
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des champs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Messages d’erreur
  let hasError = false;

  // Nom
  if (name.length < 2) {
    document.getElementById('nameError').textContent = "Le nom doit comporter au moins 2 caractères.";
    hasError = true;
  } else {
    document.getElementById('nameError').textContent = "";
  }

  // Email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Adresse email invalide.";
    hasError = true;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // Message
  if (message.length < 10) {
    document.getElementById('messageError').textContent = "Le message doit comporter au moins 10 caractères.";
    hasError = true;
  } else {
    document.getElementById('messageError').textContent = "";
  }

  // Affichage du message de succès si aucune erreur
  if (!hasError) {
    document.getElementById('successMessage').textContent = "Merci pour votre message ! Nous vous répondrons rapidement.";
    // Ici, tu pourrais envoyer les données à un serveur avec fetch ou AJAX
// Envoi des données au serveur avec fetch
fetch("https://maria-maya.github.io/Marie-Crepes/#contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name, email, message })
})
.then(response => {
  if (!response.ok) throw new Error("Erreur serveur");
  return response.json();
})
.then(data => {
  console.log("Réponse du serveur :", data);
})
.catch(error => {
  console.error("Erreur lors de l'envoi :", error);
});

    setTimeout(() => {
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').textContent = "";
    }, 4000);
  } else {
    document.getElementById('successMessage').textContent = "";
  }
});