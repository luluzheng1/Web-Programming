var map, infoWindow;



function initMap() {
	var sstat = {lat: 42.352271, lng: -71.05524200000001, name: "South Station"};
	var andrw = {lat: 42.330154, lng: -71.057655, name: "Andrew"};
	var portr = {lat: 42.3884, lng: -71.11914899999999, name: "Porter Square"};
	var harsq = {lat: 42.373362, lng: -71.118956, name: "Harvard Square"};
	var jfk = {lat: 42.320685, lng: -71.052391, name: "JFK/UMass"};
	var shmnl = {lat: 42.31129, lng: -71.053331, name: "Savin Hill"};
	var pktrm = {lat: 42.35639457, lng: -71.0624242, name: "Park Street"};
	var brdwy = {lat: 42.342622, lng: -71.056967, name: "Broadway"};
	var nqncy = {lat: 42.275275, lng: -71.029583, name: "North Quincy"};
	var smmnl = {lat: 42.29312583, lng: -71.06573796000001, name: "Shawmut"};
	var davis = {lat: 42.39674, lng: -71.121815, name: "Davis"};
	var alfcl = {lat: 42.395428, lng: -71.142483, name: "Alewife"};
	var knncl = {lat: 42.36249079, lng: -71.08617653, name: "Kendall/MIT"};
	var chmnl = {lat: 42.361166, lng: -71.070628, name: "Charles/MGH"};
	var dwnxg = {lat: 42.355518, lng: -71.060225, name: "Downtown Crossing"};
	var qnctr = {lat: 42.251809, lng: -71.005409, name: "Quincy Center"};
	var qamnl = {lat: 42.233391, lng: -71.007153, name: "Quincy Adams"};
	var asmnl = {lat: 42.284652, lng: -71.06448899999999, name: "Ashmont"};
	var wlsta = {lat: 42.2665139, lng: -71.0203369, name: "Wollaston"};
	var fldcr = {lat: 42.300093, lng: -71.061667, name: "Fields Corner"};
	var cntsq = {lat: 42.365486, lng: -71.103802, name: "Central Square"};
	var brntn = {lat: 42.2078543, lng: -71.0011385, name: "Braintree"};
	
	winds = [
	{lat: 42.395428, lng: -71.142483},
	{lat: 42.39674, lng: -71.121815},
	{lat: 42.3884, lng: -71.11914899999999}, 
	{lat: 42.373362, lng: -71.118956},
	{lat: 42.365486, lng: -71.103802},
	{lat: 42.36249079, lng: -71.08617653},
	{lat: 42.361166, lng: -71.070628},
	{lat: 42.35639457, lng: -71.0624242},
	{lat: 42.355518, lng: -71.060225},
	{lat: 42.352271, lng: -71.05524200000001},
	{lat: 42.342622, lng: -71.056967},
	{lat: 42.330154, lng: -71.057655},
	{lat: 42.320685, lng: -71.052391},
	{lat: 42.31129, lng: -71.053331},
	{lat: 42.300093, lng: -71.061667},
	{lat: 42.29312583, lng: -71.06573796000001},
	{lat: 42.284652, lng: -71.06448899999999}
	];

	coordinates = [
		sstat, andrw, portr, harsq, jfk, shmnl, pktrm, brdwy, nqncy, 
		smmnl, davis, alfcl, knncl, chmnl, dwnxg, qnctr, qamnl, asmnl,
		wlsta, fldcr, cntsq, brntn
	];
	//forking purposes
	ashmont = [
		alfcl, davis, portr, harsq, cntsq, knncl, chmnl, pktrm, dwnxg, 
		sstat, brdwy, andrw, jfk, shmnl, fldcr, smmnl, asmnl 
	];	  
	braintree = [
		shmnl, nqncy, wlsta, qnctr, qamnl, brntn
	];

	stop_name = [
		"alfcl", "davis", "portr", "harsq", "cntsq", "knncl", "chmnl", "pktrm", "dwnxg", 
		"sstat", "brdwy", "andrw", "jfk", "shmnl", "fldcr", "smmnl", "asmnl" 
	];
	var icon = 'icon.png';
	//initiate map at user's location
   	map = new google.maps.Map(document.getElementById('map'), {
    center: davis, zoom: 14});
   	infoWindow = new google.maps.InfoWindow;
   	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        //mark current location
      	var my_location = new google.maps.Marker({
      		position: {lat: position.coords.latitude, lng: position.coords.longitude},
      		map: map
      	});
      	//finding nearest station
      	var distance = findDistance(pos, coordinates[0]);
      	var stop_num = 0;
      	for(var i = 0; i < 22; i++) {
      		var temp = findDistance(pos, coordinates[i]);
      		if(temp < distance) {
      			distance = temp;
      			stop_num = i;
      		}
      	}
      	//polyline to nearest station
      	var my_path = [pos, coordinates[stop_num]];
      	var nearest_path = new google.maps.Polyline({
		path: my_path,
		strokeColor: '#00FF00',
		strokeOpacity: 1.0,
		strokeWeight: 2
		});
		nearest_path.setMap(map);
      	//display distance in infowindow
      	var miles = distance /= 1.60934;	//miles
      	miles = miles.toFixed(2);
        infoWindow.setPosition(pos);
       	//display nearest station name in infowindow
        key = Object.keys(coordinates[stop_num]);
        var coords = coordinates[stop_num];
        var content = 'nearest station: ' + coords[key[2]] + ' ' + miles + ' miles';
        infoWindow.setContent(content);

      	my_location.addListener('click', function() {
      		infoWindow.open(map, my_location);
      	});
      	//centers map at current location
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
    a_stops = [17];
	b_stops = [6];
    for(var i = 0; i < 17; i++) {
    	console.log(i);
    	a_stops[i] = new google.maps.Marker({position: ashmont[i], map: map, icon: 'icon.png'});
    	console.log(a_stops[i]);
    	var wind = new google.maps.InfoWindow;
		wind.setPosition(winds[i]);
		a_stops[i].addListener('click', function() {
      			wind.open(map, a_stops[i]);
      		});
		
    	var request = new XMLHttpRequest();
    	placeid = "place-" + stop_name[i];
 		var url = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=" + placeid + "&page[limit]=10&page[offset]=0&sort=departure_time&api_key=6545bf2bfe4e40928aca721593594135";
		request.open("GET", url, true);
		

    	request.onreadystatechange = function() {
    		//console.log(i);
    		console.log("here!");
			if(request.readyState == 4 && request.status == 200) {
				data = request.responseText;
				content = JSON.parse(data);
		
				time = "";
			var total = content.data.length;
			for (j = 0; j < total; j++) {
				word = content.data[j].attributes.arrival_time[11];
				word += content.data[j].attributes.arrival_time[12];
				word += content.data[j].attributes.arrival_time[13];
				word += content.data[j].attributes.arrival_time[14];
				word += content.data[j].attributes.arrival_time[15];
				console.log(word);
				time += word + "<br/>";
			}
			//i = 0;

	 		wind.setContent(time);
	 		
			}
		
		}
	// 	else if (request.readyState == 4 && request.status != 200) {
	// 		time = "Error";
	// 	}
	// 	else if (request.readyState == 3) {
	// 		time = "Loading...";
	// 	}

	// }
	request.send();
}
    // var b_stops = [6];
    // for(j = 0; j < 6; j++) {
    // 	b_stops[j] = new google.maps.Marker({position: braintree[j], map: map, icon: 'icon.png'});
    // }
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

	var x1 = lat2-lat1;
	var dLat = x1.toRad();  
	var x2 = lon2-lon1;
	var dLon = x2.toRad();  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; 
	return d;
}

// function loadContent(map) {
// 	console.log("1");
// 	var wind = new google.maps.InfoWindow;
	
// 	request = new XMLHttpRequest();
// 	// placeid = "place-davis";
// 	// var url = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=" + placeid + "&page[limit]=10&page[offset]=0&sort=departure_time&api_key=6545bf2bfe4e40928aca721593594135";
// 	// console.log(url);
// 	request.open("GET", 
// 		"https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-davis&page[limit]=10&page[offset]=0&sort=departure_time&api_key=6545bf2bfe4e40928aca721593594135",
// 		 true);
	
// 	request.onreadystatechange = function() {
// 	if(request.readyState == 4 && request.status == 200) {
// 		data = request.responseText;
// 		content = JSON.parse(data);
		
// 		time = "";
// 		var total = content.data.length;
// 		for (i = 0; i < total; i++) {
			
// 			word = content.data[i].attributes.arrival_time[11];
// 			word += content.data[i].attributes.arrival_time[12];
// 			word += content.data[i].attributes.arrival_time[13];
// 			word += content.data[i].attributes.arrival_time[14];
// 			word += content.data[i].attributes.arrival_time[15];

// 			time += word + "<br/>";
// 		}
// 		pos = {lat: 42.39674, lng: -71.121815};
		

// 	 	a_stops[1].addListener('click', function() {
//       		wind.setPosition(pos);
// 	 		wind.setContent(time);
//       		wind.open(map, pos);
//       	});
// 	}
// 	else if (request.readyState == 4 && request.status != 200) {
// 		time = "Error";
// 	}
// 	else if (request.readyState == 3) {
// 		time = "Loading...";
// 	}

// 	}
// 	request.send();

// }