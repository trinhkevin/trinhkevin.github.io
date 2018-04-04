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

// Places in long, lat
var places = [[-122.67648150000002, 45.5230622],
              [-117.83114280000001, 33.7174708],
              [-117.16108380000003, 32.715738],
              [-122.3320708, 47.6062095],
              [-122.44429059999999, 47.2528768],
              [-122.67160630000001, 45.6318397],
              [-123.12073750000002, 49.2827291],
              [-87.62979819999998, 41.8781136],
              [-115.13982959999998, 36.1699412],
              [-116.21460680000001, 43.6187102],
              [-82.70796050000001, 41.4489396],
              [-82.99879420000002, 39.9611755],
              [-85.75845570000001, 38.2526647],
              [-86.25198979999999, 41.6763545],
              [-79.99588640000002, 40.44062479999999],
              [-80.64951940000003, 41.0997803],
              [-112.07403729999999, 33.4483771],
              [12.496365500000024, 41.9027835],
              [4.351721099999963, 50.8503463],
              [-86.78160159999999, 36.1626638],
              [106.6296638, 10.8230989],
              [-97.74306079999997, 30.267153],
              [103.98320890000002, 1.3450101],
              [-73.56725599999999, 45.5016889],
              [-68.4054729, 18.5820101],
              [-95.3698028, 29.7604267]]

// Initialize empty heatmap
function initHeatmap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
  });

  setMarkers(map, places);
}

function setMarkers(map, places) {
  for(place in places) {
    var marker = new google.maps.Marker({
      position:  new google.maps.LatLng(places[place][1], places[place][0]),
      map: map
    });
  }
}

// On document start
$(function() {
  initHeatmap();
});