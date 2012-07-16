$().ready(function() {
	var monster = document.getElementById("monster");
	var manzana = document.getElementById("manzana").src;
	var pera= document.getElementById("pera").src;
	var platano = document.getElementById("platano").src;
	var galleta = document.getElementById("galleta").src;
	
	monster.addEventListener("dragover", cancel);
	
	monster.addEventListener("dragenter", cancel);
	
	monster.addEventListener("drop", function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		
		switch(event.dataTransfer.getData("Text")){
			case manzana:
				alert("¡Puagh!");
				break;
				break;
			case pera:
				alert("¡Quiero Galletas!");
				break;
				break;
			case platano:
				alert("¡Arghs!");
				break;
			case galleta:
				alert("¡Mmm Galletas!");
				break;
		}
		return false;
	});
	
	function cancel(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		return false;
	}
});