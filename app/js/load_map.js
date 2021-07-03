/*

function load() {
    var map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 16,
        center: new google.maps.LatLng(45.523064, -122.676483), //latitude and longitudes can be obtained from the link tab on google maps.
        mapTypeId: google.maps.MapTypeId.SATELLITE //other parameters can be ROADMAP,HYBRID,TERRAIN
    });
}

var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(45.523064, -122.676483);
    map = new google.maps.Map(document.getElementById("map_canvas"),
    {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    google.maps.event.addListener(map, 'click', function(event)
    {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    var marker = new google.maps.Marker(
    {
        position: location,
        map: map
    });

    var coords = location.lat().toFixed(6) + ', ' + location.lng().toFixed(6);
    document.getElementById("point").value = coords;
    // var infowindow = new google.maps.InfoWindow({
    //     content: 'The latitude longitude co-ordinates are: ' + coords
    // });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}


*/

//  ############################################


var map; //When using event as a parameter to a function declare map, strictly as a global variable
    function initialize() {
    var myLatlng = new google.maps.LatLng(28.635157, 77.22496);
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    google.maps.event.addListener(map, "click", function (event) {
        placeMarker(event.latLng);
    });
    }

    function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    var coords =
        location.lat().toFixed(6) + ", " + location.lng().toFixed(6);
    document.getElementById("points").value = coords;
    }



