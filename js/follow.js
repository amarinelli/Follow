$(document).ready(function() {
	initialize()
    $("#mapXY").click(function(){
        var myDataRef = new Firebase('https://followapp.firebaseio.com/');
      
        
		  console.log("enter");
		  var user = $('#userName').val();
          var locX = $('#locationX').val();
          var locY = $('#locationY').val();
          myDataRef.push({
			User: user, 
			X: locX, 
			Y: locY
		  });
          $('#locationX').val('');
          $('#locationY').val('');
        
      
    }); 
})	  

	  
var map;

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}


;


function track(Latlng) {
	var marker = new google.maps.Marker({
      position: Latlng,
      map: map,
      title: 'Hello World!'
	});
}