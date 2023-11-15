function initMap() {
  const myLatLng = { lat: 41.92183194594532, lng: -87.658470190136 };

  var mapOptions = {
    zoom: 20,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    tilt: 45,
    styles: [
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "simplified" },
          { "color": "#ffffff" }
        ]
      },      
    ]
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const contentString =
    '<h1>Old Pueblo Cantina</h1>' + 
    '<p>Classic fare of Mexico & Arizona is offered in a quaint, low-lit space with craft cocktails & beer.</p>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Old Pueblo",
  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Old Pueblo",
    animation: google.maps.Animation.BOUNCE,
    icon: "../project3/images/beer.png",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
