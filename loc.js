
if ("geolocation" in navigator) {
  var button = $('#where-am-i');
  button.on('click', getLocation);
} else {
  alert("Geolocation is not available")
}

function getLocation() {
  console.log('Getting location...');
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
}

var options = {
  enableHighAccuracy: true 
};

function onLocation (position) {
  var lat = (position.coords.latitude);
	var lon = (position.coords.longitude);
	displayMap(lat, lon);
}

function onError(error) {
  console.log("Getting location failed: " + error);
}

function displayMap(lat, lon) {
 var urlRoot = "https://maps.googleapis.com/maps/api/staticmap?center=";
 var urlParams = "&zoom=17&size=400x300";
 var url = urlRoot + lat + "," + lon + urlParams;
 $('#map').attr('src', url);
}


