function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 52.074373610390026, lng: 4.3049510399249336 },
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
const locations = [
    { lat: 52.08116252024468, lng: 4.324269115345232 },
    { lat: 52.079076603680456, lng: 4.337483013876008 },
    { lat: 52.08642389807528, lng: 4.295191298532201 },
];