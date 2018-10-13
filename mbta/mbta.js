var map;

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
	

    map = new google.maps.Map(document.getElementById('map'), 
    	{ center: sstat, zoom: 14});
    //sstat_s = south station stop
    var sstat_s = new google.maps.Marker({position: sstat, map: map});
    var andrw_s = new google.maps.Marker({position: andrw, map: map});
    var portr_s = new google.maps.Marker({position: portr, map: map});
    var harsq_s = new google.maps.Marker({position: harsq, map: map});
    var jfk_s = new google.maps.Marker({position: jfk, map: map});
    var shmnl_s = new google.maps.Marker({position: shmnl, map: map});
    var pktrm_s = new google.maps.Marker({position: pktrm, map: map});
	var brdwy_s = new google.maps.Marker({position: brdwy, map: map});
	var nqncy_s = new google.maps.Marker({position: nqncy, map: map});
	var smmnl_s = new google.maps.Marker({position: smmnl, map: map});
	var davis_s = new google.maps.Marker({position: davis, map: map});
	var alfcl_s = new google.maps.Marker({position: alfcl, map: map});
	var knncl_s = new google.maps.Marker({position: knncl, map: map});
	var chmnl_s = new google.maps.Marker({position: chmnl, map: map});
	var dwnxg_s = new google.maps.Marker({position: dwnxg, map: map});
	var qnctr_s = new google.maps.Marker({position: qnctr, map: map});
	var qamnl_s = new google.maps.Marker({position: qamnl, map: map});
	var asmnl_s = new google.maps.Marker({position: asmnl, map: map});
	var wlsta_s = new google.maps.Marker({position: wlsta, map: map});
	var fldcr_s = new google.maps.Marker({position: fldcr, map: map});
	var cntsq_s = new google.maps.Marker({position: cntsq, map: map});
	var brntn_s = new google.maps.Marker({position: brntn, map: map});
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


