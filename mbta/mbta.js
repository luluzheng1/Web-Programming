var map;

function initMap() {
	var s_station = {lat: 42.352271, lng: -71.05524200000001};
	var andrew = {lat: 42.330154, lng: -71.057655};
	var portersquare = {lat: 42.3884, lng: -71.11914899999999};
	// var harvardsquare = {lat: 42.373362, lng: -71.118956};

    map = new google.maps.Map(document.getElementById('map'), 
    	{ center: s_station, zoom: 14});

    var s_station_stop = new google.maps.Marker({position: s_station, map: map});
    var andrew_stop = new google.maps.Marker({position: andrew, map: map});
    var portersquare_stop = new google.maps.Marker({position: portersquare, map: map});

}

         
// function southStation() {
// 	 // The location of South Station
//   var s_station = {lat: 42.352271, lng: -71.05524200000001};
//   // The map, centered at 
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 14, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
//       }
// }


