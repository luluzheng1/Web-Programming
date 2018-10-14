var map;
var sstat;
var andrw;

function initMap() {
	directionsService = new google.maps.DirectionsService();
   directionsDisplay = new google.maps.DirectionsRenderer();
	sstat = {lat: 42.352271, lng: -71.05524200000001};
	andrw = {lat: 42.330154, lng: -71.057655};
	var portr = {lat: 42.3884, lng: -71.11914899999999};
	var harsq = {lat: 42.373362, lng: -71.118956};
	var jfk = {lat: 42.320685, lng: -71.052391};
	var shmnl = {lat: 42.31129, lng: -71.053331};
	var pktrm = {lat: 42.35639457, lng: -71.0624242};
	var brdwy = {lat: 42.342622, lng: -71.056967};
	var nqncy = {lat: 42.275275, lng: -71.029583};
	var smmnl = {lat: 42.29312583, lng: -71.06573796000001};
	var davis = {lat: 42.39674, lng: -71.121815};
	var alfcl = {lat: 42.395428, lng: -71.142483};
	var knncl = {lat: 42.36249079, lng: -71.08617653};
	var chmnl = {lat: 42.361166, lng: -71.070628};
	var dwnxg = {lat: 42.355518, lng: -71.060225};
	var qnctr = {lat: 42.251809, lng: -71.005409};
	var qamnl = {lat: 42.233391, lng: -71.007153};
	var asmnl = {lat: 42.284652, lng: -71.06448899999999};
	var wlsta = {lat: 42.2665139, lng: -71.0203369};
	var fldcr = {lat: 42.300093, lng: -71.061667};
	var cntsq = {lat: 42.365486, lng: -71.103802};
	var brntn = {lat: 42.2078543, lng: -71.0011385};
	
	// var coordinates = [ sstat, andrw
	// ];

	var icon = 'icon.png';
    map = new google.maps.Map(document.getElementById('map'), 
    	{ center: sstat, zoom: 14});
    //sstat_s = south station stop
    var sstat_s = new google.maps.Marker({position: sstat, map: map, icon: 'icon.png'});
    var andrw_s = new google.maps.Marker({position: andrw, map: map, icon: 'icon.png'});
    var portr_s = new google.maps.Marker({position: portr, map: map, icon: 'icon.png'});
    var harsq_s = new google.maps.Marker({position: harsq, map: map, icon: 'icon.png'});
    var jfk_s = new google.maps.Marker({position: jfk, map: map, icon: 'icon.png'});
    var shmnl_s = new google.maps.Marker({position: shmnl, map: map, icon: 'icon.png'});
    var pktrm_s = new google.maps.Marker({position: pktrm, map: map, icon: 'icon.png'});
	var brdwy_s = new google.maps.Marker({position: brdwy, map: map, icon: 'icon.png'});
	var nqncy_s = new google.maps.Marker({position: nqncy, map: map, icon: 'icon.png'});
	var smmnl_s = new google.maps.Marker({position: smmnl, map: map, icon: 'icon.png'});
	var davis_s = new google.maps.Marker({position: davis, map: map, icon: 'icon.png'});
	var alfcl_s = new google.maps.Marker({position: alfcl, map: map, icon: 'icon.png'});
	var knncl_s = new google.maps.Marker({position: knncl, map: map, icon: 'icon.png'});
	var chmnl_s = new google.maps.Marker({position: chmnl, map: map, icon: 'icon.png'});
	var dwnxg_s = new google.maps.Marker({position: dwnxg, map: map, icon: 'icon.png'});
	var qnctr_s = new google.maps.Marker({position: qnctr, map: map, icon: 'icon.png'});
	var qamnl_s = new google.maps.Marker({position: qamnl, map: map, icon: 'icon.png'});
	var asmnl_s = new google.maps.Marker({position: asmnl, map: map, icon: 'icon.png'});
	var wlsta_s = new google.maps.Marker({position: wlsta, map: map, icon: 'icon.png'});
	var fldcr_s = new google.maps.Marker({position: fldcr, map: map, icon: 'icon.png'});
	var cntsq_s = new google.maps.Marker({position: cntsq, map: map, icon: 'icon.png'});
	var brntn_s = new google.maps.Marker({position: brntn, map: map, icon: 'icon.png'});
	calcRoute(alfcl, brntn);
	directionsDisplay.setMap(map);
  // var path = new google.maps.Polyline({
  //         path: coordinates,
  //         geodesic: true,
  //         strokeColor: '#FF0000',
  //         strokeOpacity: 1.0,
  //         strokeWeight: 2
  //       });

  //       path.setMap(map);
}


function calcRoute(s, e) {
	console.log("hi");
var start = s;
var end = e;
 var request = {
    origin: start,
    destination: end,
    travelMode: 'TRANSIT',
    transitOptions: {
  modes: ['SUBWAY']
}	
};
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });

}

// {
//   origin: 'Hoboken NJ',
//   destination: 'Carroll Gardens, Brooklyn',
//   travelMode: 'TRANSIT',
//   transitOptions: {
//     departureTime: new Date(1337675679473),
//     modes: ['BUS'],
//     routingPreference: 'FEWER_TRANSFERS'
//   },
//   unitSystem: google.maps.UnitSystem.IMPERIAL
// }
