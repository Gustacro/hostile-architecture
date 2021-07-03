let DATA_SERVICE_URL =
  "https://script.google.com/macros/s/AKfycbxHrqv5x-2lCtZJ1W49q0rjU6ATnSLZWAtJADqBj1Kil32H80pL/exec?jsonp=callback";

let geocoder;
let map;

function initialize() {
  //Create a geocoder
  geocoder = new google.maps.Geocoder();
  // define location, zoo , maxzoom, & background tile of the map
  map = new google.maps.Map(document.getElementById("map_canvas"), {
    center: new google.maps.LatLng(45.523064, -122.676483),
    zoom: 10,
    maxZoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  //Inject JavaScript (returned JSON) into the head of the page.
  let scriptElement = document.createElement("script");
  scriptElement.src = DATA_SERVICE_URL;
  document.getElementsByTagName("head")[0].appendChild(scriptElement);

  // Place marker
  google.maps.event.addListener(map, "click", function (event) {
    placeMarker(event.latLng);
  });
}
function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var coords = location.lat().toFixed(6) + ", " + location.lng().toFixed(6);
  document.getElementById("points").value = coords;
}

function callback(data) {
  for (let i = 1; i < data.length; i++) {
    address = data[i][2];

    //Geocode the JSON returned from callback function.
    codeAddress();
  }
}

function codeAddress() {
  //Google Async service.
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
      });
    } else {
      alert("Geocode was not successful for the following reason:" + status);
    }
  });
}
