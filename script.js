mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FjaGluc2luZ2hiYWpldGhhIiwiYSI6ImNrd2dpYmRybDBvazkyb211aG9pY3g3dHQifQ.kruCYmW-2KC8wsitkIxhPQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true }); //getting current location
function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
    setupMap([78.9, 20.5]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: center,
        zoom: 15, // starting zoom
    });

    const nav = new mapboxgl.NavigationControl(); // directions
    map.addControl(nav);
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    });
    map.addControl(directions, "bottom-left");
}
