/**
 * Espera hasta la carga completa del DOM
 */
var map;
$().ready(function() {
	/**
	 * Calcula la geolocalización al lanzarse un evento de click
	 * sobre el botón con id="geo"
	 */
	$("button#geo").click(
		function(){
			getGeolocation();
		}
	);
	
	/**
	 * Calcula la Geolocalización
	 */
	function getGeolocation() {
		return navigator.geolocation.getCurrentPosition(handleGeolocation, handleErrors);
	}
	
	/**
	 * Muestra un mapa, Google Maps, con los datos de la Geolocalización.
	 * @param {Object} position Objeto contenedor de los resultados de la Geolocalizacion.
	 */
	function handleGeolocation(position) {
		map = new GMaps({
			div: '#map',
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			height: '500px',
		});
		
		map.addMarker({
  			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: 'Tu'
		});
	} 
	
	/**
	 * Controla los errores, imprimiendolos en un alert.
	 * @param {Object} error Objeto que contiene información relativa al error.
	 */
	function handleErrors(error){
		switch(error.code)
		{
			case error.PERMISSION_DENIED:
				alert("The location acquisition process failed because the document does not have permission to use the Geolocation API.");
				break;
			case error.POSITION_UNAVAILABLE:
				break;
				alert("The position of the device could not be determined");
			case error.TIMEOUT:
				alert("Timeout");
				break;
			default:
				alert("Something bad - and unknown - happened");
				break;
		}
	}
	
});
