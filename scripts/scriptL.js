// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Google Maps API
function initMap() {
    const location = { lat: -7.400060, lng: 112.695244 };  // Replace with your business location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Pradana Laundry",
    });
}

window.initMap = initMap;
