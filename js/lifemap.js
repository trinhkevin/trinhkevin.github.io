// Portland, Oregon
var home  = [45.5230622, -122.67648150000002];

/* Places in lat long
----------------------
Orange County, California
San Diego, California
Seattle, Washington
Tacoma, Washington
Vancouver, Washington
Vancouver, BC
Chicago, Illinois
Las Vegas, Nevada
Boise, Idaho
Phoenix, Arizona
South Bend, Indiana
Louisville, Kentucky
Pittsburgh, Pennsylvania
Sandusky, Ohio
Columbus, Ohio
Youngstown, Ohio
Nashville, Tennessee
Rome, Italy
Brussels, Belgium
Montreal, Quebec
Punta Cana, Dominican Republic
Austin, Texas
Houston, Texas
Saigon, Vietnam
Changi, Singapore
Denver, Colorado
*/
var placesBeen = [[33.7174708, -117.83114280000001],
                  [32.715738, -117.16108380000003],
                  [47.6062095, -122.3320708],
                  [47.2528768, -122.44429059999999],
                  [45.6318397, -122.67160630000001],
                  [49.2827291, -123.12073750000002],
                  [41.8781136, -87.62979819999998],
                  [36.1699412, -115.13982959999998],
                  [43.6187102, -116.21460680000001],
                  [41.4489396, -82.70796050000001],
                  [39.9611755, -82.99879420000002],
                  [38.2526647, -85.75845570000001],
                  [41.6763545, -86.25198979999999],
                  [40.44062479999999, -79.99588640000002],
                  [41.0997803, -80.64951940000003],
                  [33.4483771, -112.07403729999999],
                  [41.9027835, 12.496365500000024],
                  [50.8503463, 4.351721099999963],
                  [36.1626638, -86.78160159999999],
                  [10.8230989, 106.6296638],
                  [30.267153, -97.74306079999997],
                  [1.3450101, 103.98320890000002],
                  [45.5016889, -73.56725599999999],
                  [18.5820101, -68.4054729],
                  [29.7604267, -95.3698028],
                  [39.739236, -104.990251]];

/* Places in lat long
----------------------
New York City, New York
Orlando, Florida
Madrid, Spain
London, UK
Dublin, Ireland
Tokyo, Japan
Berlin, Germany
*/
var placesWant  = [[40.712775, -74.005973],
                   [28.538335, -81.379236],
                   [41.385064, 2.173403],
                   [51.507351, -0.127758],
                   [53.349805, -6.260310],
                   [35.689487, 139.691706],
                   [52.520007, 13.404954]];

// Initialize markerMap
function initMarkerMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
  });

  // Set markers
  setMarkers(map);

  // Set legend
  legend = document.getElementById('legend');
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
}

// Sets the places markers on the map
function setMarkers(map) {
  // Set home
  var marker = new google.maps.Marker({
    position:  new google.maps.LatLng(home[0], home[1]),
    map: map,
    icon: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png'
  });

  // Places I have been
  for(place in placesBeen) {
    var marker = new google.maps.Marker({
      position:  new google.maps.LatLng(placesBeen[place][0], placesBeen[place][1]),
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });
  }

  // Places I want to go
  for(place in placesWant) {
    var marker = new google.maps.Marker({
      position:  new google.maps.LatLng(placesWant[place][0], placesWant[place][1]),
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
  }
}

// On document ready
$(function() {
  initMarkerMap();
});