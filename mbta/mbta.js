var map, infoWindow;

function initMap() {
	
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
	//initiate map at user's location
   	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.4082, lng: -71.1160}, zoom: 14});
   	infoWindow = new google.maps.InfoWindow;
   	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
      	var my_location = new google.maps.Marker({
      		position: {lat: position.coords.latitude, lng: position.coords.longitude},
      		map: map
      	});
      	my_location.addListener('click', function() {
      		infoWindow.open(map, my_location);
      	});

      	for(int i = 0; i < 22; i++) {
      		findDistance(sstat, davis);
      	}
      	
      	map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        } else {
          // Browser doesn't support Geolocation
        	handleLocationError(false, infoWindow, map.getCenter());
        }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    	infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
    
    //mark stations w icon
    var a_stops = [17];
    for(i = 0; i < 17; i++) {
    	a_stops[i] = new google.maps.Marker({position: ashmont[i], map: map, icon: 'icon.png'});
    }
    var b_stops = [6];
    for(j = 0; j < 6; j++) {
    	b_stops[j] = new google.maps.Marker({position: braintree[j], map: map, icon: 'icon.png'});
    }
    //render polyline
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

function findDistance(coords1, coords2) {
	Number.prototype.toRad = function() {
   	return this * Math.PI / 180;
	}
	key2 = Object.keys(coords2);
	key1 = Object.keys(coords1);
	var lat2 = coords2[key2[0]]; 
	var lon2 = coords2[key2[1]]; 
	var lat1 = coords1[key1[0]]; 
	var lon1 = coords1[key1[1]];

	var R = 6371; // km 
//has a problem with the .toRad() method below.
	var x1 = lat2-lat1;
	var dLat = x1.toRad();  
	var x2 = lon2-lon1;
	var dLon = x2.toRad();  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; 

	console.log(d);
}