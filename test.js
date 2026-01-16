//Test sencillo
function sumar(a, b) {
	return a + b;
}

//Test
if (sumar(2, 3) === 6) {
	console.log("Todos los tests pasaron");
	process.exit(0);
} else {
	console.error("Test falló y se editó");
	process.exit(1);
}
