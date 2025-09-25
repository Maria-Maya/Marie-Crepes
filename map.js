function initMap() {
  // Coordonnées GPS de Paris (latitude et longitude)
  const paris = { lat: 48.8566, lng: 2.3522 };

  // Initialisation de la carte
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: paris,
  });

  // Ajout d’un marqueur sur Paris
  const marker = new google.maps.Marker({
    position: paris,
    map: map,
    title: "Bienvenue à Paris !",
  });
}
