function initMap() {
 // Update MAP_ID with custom map ID
 map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.373660711320234, lng: 4.891594163168155},
    zoom: 8,
    mapId: '589c5b3a2920d2e2'
    });

 new google.maps.Marker({
    position: {lat: 52.33718138155934, lng: 4.873088734208704},
    map,
    title: "Zuidas Business Center",
    });
}

