var map;

function initMap() {
	directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
	var sstat = {lat: 42.352271, lng: -71.05524200000001};
	var andrw = {lat: 42.330154, lng: -71.057655};
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
	
	var ashmont = [
		alfcl, davis, portr, harsq, cntsq, knncl, chmnl, pktrm, dwnxg, 
		sstat, brdwy, andrw, jfk, shmnl, fldcr, smmnl, asmnl 
		];
		  
	var braintree = [
		shmnl, nqncy, wlsta, qnctr, qamnl, brntn
	];

	var icon = 'icon.png';
    map = new google.maps.Map(document.getElementById('map'), 
    	{ center: sstat, zoom: 14});
    //sstat_s = south station stop
    var a_stops = [17];
    for(i = 0; i < 17; i++) {
    	a_stops[i] = new google.maps.Marker({position: ashmont[i], map: map, icon: 'icon.png'});
    }
    var b_stops = [6];
    for(j = 0; j < 6; j++) {
    	b_stops[j] = new google.maps.Marker({position: braintree[j], map: map, icon: 'icon.png'});
    }

	var ashmont = new google.maps.Polyline({
		path: ashmont,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	var braintree = new google.maps.Polyline({
		path: braintree,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

 	ashmont.setMap(map);
 	braintree.setMap(map);
}