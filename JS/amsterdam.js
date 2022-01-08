function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 52.373660711320234, lng: 4.891594163168155},
       zoom: 8,
       mapId: '589c5b3a2920d2e2'
       });
   
 
    const marker = new google.maps.Marker({
       position: {lat: 52.33718138155934, lng: 4.873088734208704},
       map,
       title: "Zuidas Business Center",
       });
   
    const infowindow = new google.maps.InfoWindow({
       content: "Zuidas Business Center",
        });
   
    marker.addListener("click", () => {
           infowindow.open({
             anchor: marker,
             map,
             shouldFocus: false,
           });
       });

       places = new google.maps.places.PlacesService(map);
       autocomplete.addListener("service_changed", onServiceClicked);
   
   }
   
function onServiceClicked() {

    $("#hotel").click(function () {
        const place = autocomplete.getPlace();

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            findHotel();
        }
    });


    function findHotel() {
        const search = {
            bounds: map.getBounds(),
            types: ["lodging"],
        };
        places.nearbySearch(search, (results, status, pagination) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                clearResults();
                clearMarkers();
    
                // Create a marker for each Hotel found- assign a letter to each marker icon
    
                for (let i = 0; i < results.length; i++) {
                    const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                    const markerIcon = MARKER_PATH + markerLetter + ".png";
    
                    // Use Marker animation to drop the icons to map
    
                    markers[i] = new google.maps.Marker({
                        position: results[i].geometry.location,
                        animation: google.maps.Animation.DROP,
                        icon: markerIcon,
                    });
    
                    // If the user clicks a Hotel marker, show details in info window
    
                    markers[i].placeResult = results[i];
                    google.maps.event.addListener(markers[i], "click", showInfoWindow);
                    setTimeout(dropMarker(i), i * 100);
                    addResult(results[i], i);
                }
            }
        });
    }
