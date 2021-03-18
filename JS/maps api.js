
   function initMap() {
            const thehague = { lat: 52.074373610390026, lng: 4.3049510399249336 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: thehague,
            });
            const marker = new google.maps.Marker({
                position: thehague,
                map: map,
            });
        }

