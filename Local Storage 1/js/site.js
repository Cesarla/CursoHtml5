$().ready(function() {

	if (!localStorage) {
		alert("Tu navegador no soporta Local Storage API");
	}

	$("#add1").click(function(event) {
		addProducto(1);
	});

	$("#add2").click(function(event) {
		addProducto(2);
	});

	$("#add3").click(function(event) {
		addProducto(3);
	});

	$("#rem1").click(function(event) {
		remProducto(1);
	});

	$("#rem2").click(function(event) {
		remProducto(2);
	});

	$("#rem3").click(function(event) {
		remProducto(3);
	});

	updateProducto(1);
	updateProducto(2);
	updateProducto(3);

	function addProducto(producto) {
		cantidad = localStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		localStorage.setItem(producto, parseInt(cantidad) + 1);
		updateProducto(producto);
	}

	function remProducto(producto) {
		cantidad = localStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		if (cantidad > 0)
			localStorage.setItem(producto, parseInt(cantidad) - 1);
		updateProducto(producto);
	}

	function updateProducto(producto) {
		cantidad = localStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		$("#" + producto).val(cantidad);
	}

}); 