// Data points (array of [Latitude, Longitude] objects)
var places = ["Portland, Oregon", 
              "Orange County, California", 
              "San Diego, California",
              "Seattle, Washington",
              "Tacoma, Washington",
              "Vancouver, Washington",
              "Vancouver, BC",
              "Chicago, Illinois",
              "Las Vegas, Nevada",
              "Boise, Idaho",
              "Phoenix, Arizona",
              "South Bend, Indiana",
              "Louisville, Kentucky",
              "Pittsburgh, Pennsylvania",
              "Sandusky, Ohio",
              "Columbus, Ohio",
              "Youngstown, Ohio",
              "Nashville, Tennessee",
              "Rome, Italy",
              "Brussels, Belgium",
              "Montreal, Quebec",
              "Punta Cana, Dominican Republic",
              "Austin, Texas",
              "Houston, Texas",
              "Saigon, Vietnam",
              "Changi, Singapore"];

// Initialize empty heatmap
function initHeatmap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
  });

  setMarkers(map, places);
}

// Set the place markers on the map
//function setMarkers(map, places) {
//  var fs    = require("fs");
//  var data  = fs.readFile("../")
//}

// Set the place markers on the map
async function createMarkers(map, places) {
  // Converts place names to Latitude Longitude
  var geocoder = new google.maps.Geocoder();
  
  locations = [];

  for(place in places) {
    geocoder.geocode({'address': places[place]}, function(results, status) {
      if(status === 'OK') {
        locations.push(results[0].geometry.location);
      } 
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    await sleep(300);
  }

  for(location in locations) {
    console.log(locations(location))
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// On document start
$(function() {
  createMarkers();
});