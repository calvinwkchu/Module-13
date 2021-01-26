var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 2
  });
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    id: 'mapbox/streets-v11',
      accessToken: API_KEY
  }).addTo(myMap);
  
  stores.forEach(store => L.marker(store.location)
                          .bindPopup(`<h2>${store.country}</h2> <b></b> <h3>Store Count: ${store.store_count}</h3>`)
                          .addTo(myMap));