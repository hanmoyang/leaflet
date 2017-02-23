var map = L.map('mapContainer').setView([40.745653, -73.989614], 12);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

  //L.marker([40.739588, -74.009624]).addTo(map)
   // .bindPopup('Whitney Museum of American Arts')

 // L.marker([40.724369, -73.992801]).addTo(map)
    //.bindPopup('New Museum')

 // L.marker([40.761825, -73.977523]).addTo(map)
    //.bindPopup('The Museum of Modern Art')

 // L.marker([40.779766, -73.957610]).addTo(map)
    //.bindPopup('The Metropolitan Museum of Art')

  //L.marker([40.792526, -73.951973]).addTo(map)
   // .bindPopup('Museum of the City of New York')

 // L.marker([40.756370, -73.923939]).addTo(map)
   // .bindPopup('Museum of the Moving Image')

 // L.marker([40.781305, -73.973774]).addTo(map)
    //.bindPopup('American Museum of Natural History')

    
    var free = [
  {
    name: 'Whitney Museum of American Arts',
    coord: [40.739588, -74.009624],
  },
  {
    name: 'New Museum',
    coord: [40.724369, -73.992801],
  },
  {
    name: 'The Museum of Modern Art',
    coord: [40.761825, -73.977523],
  },
  {
    name: 'Museum of the Moving Image',
    coord: [40.756370, -73.923939],
  },
]

var notfree = [
  {
    name: 'The Metropolitan Museum of Art',
    coord: [40.779766, -73.957610],
  },
  {
    name: 'Museum of the City of New York',
    coord: [40.792526, -73.951973],
  },
  {
    name: 'American Museum of Natural History',
    coord: [40.781305, -73.973774],
  },
]

// create an empty layerGroup
var freeLayerGroup = L.layerGroup();

free.forEach(function(data) {
  var thisMarker = L.marker(data.coord, {
    title: data.name
  });

  thisMarker.bindPopup(data.name);

  // add the marker to the layergroup
  freeLayerGroup.addLayer(thisMarker);
  
});

var notfreeLayerGroup = L.layerGroup();

notfree.forEach(function(data) {
  var thisCircleMarker = L.circleMarker(data.coord, {
    color: 'white',
    fillColor: 'steelblue',
    fillOpacity: .9,
    weight: 1,
  })
    .bindPopup(data.name)
    .addTo(map)

    notfreeLayerGroup.addLayer(thisCircleMarker);
});

freeLayerGroup.addTo(map);
notfreeLayerGroup.addTo(map);

var boroughs = {
  "Free for NYU Student": freeLayerGroup,
  "Not Free for NYU Student": notfreeLayerGroup,
}

L.control.layers(null, boroughs, {
  collapsed: false
}).addTo(map);

