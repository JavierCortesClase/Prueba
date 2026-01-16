//Test sencillo
function sumar(a, b) {
	return a + b;
}

//Test
if (sumar(2, 3) === 5) {
	console.log("Todos los tests pasaron");
	process.exit(0);
} else {
	console.error("Test falló");
	process.exit(1);
}
