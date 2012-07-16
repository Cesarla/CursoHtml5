$().ready(function() {

	var box = document.getElementById('box');
	
	box.addEventListener('dragover', cancel);
	
	box.addEventListener('dragenter', cancel);
	
	box.addEventListener('drop', function(event) {
	
		if (event.preventDefault) {
			event.preventDefault();
		}
		
		files = event.dataTransfer.files;
		
		for(i = 0; i < files.length; i++){
			cargarImagen(files[i]);
		}
		
		return false;
	});
	
	function cancel(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		return false;
	}
	
	function cargarImagen(file){
		añadirHtml('<div class="file">'
			+'<p><span class="bold">Fichero:</span> '+file.name+'</p>'
			+'<p><span class="bold">Tamaño:</span> '+file.size +' bytes</p>'
			+'<p><span class="bold">Tipo:</span> '+file.type+'</p>'
			+'</div>');
	}
	
	function añadirHtml(html) {
		$('#result').html(function(index, val) {
			return $('#result').html() + html;
		});
	}
});