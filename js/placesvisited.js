/* Current list of places
"Portland, Oregon"
"Orange County, California"
"San Diego, California"
"Seattle, Washington"
"Tacoma, Washington"
"Vancouver, Washington"
"Vancouver, BC"
"Chicago, Illinois"
"Las Vegas, Nevada"
"Boise, Idaho"
"Phoenix, Arizona"
"South Bend, Indiana"
"Louisville, Kentucky"
"Pittsburgh, Pennsylvania"
"Sandusky, Ohio"
"Columbus, Ohio"
"Youngstown, Ohio"
"Nashville, Tennessee"
"Rome, Italy"
"Brussels, Belgium"
"Montreal, Quebec"
"Punta Cana, Dominican Republic"
"Austin, Texas"
"Houston, Texas"
"Saigon, Vietnam"
"Changi, Singapore"
*/


// Initialize empty heatmap
function initHeatmap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
  });

  setMarkers(map, places);
}

// Set the place markers on the map
function setMarkers() {
  readTextFile("../data/places.data");
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function() {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}

// On document start
$(function() {
  setMarkers();
});