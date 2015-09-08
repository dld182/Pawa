var cadena;
var caract= ",";
	for(var i = 2; i < process.argv.length; i++){	
		cadena = process.argv[i];
		};	

console.log("Los números son: " + cadena);
var cadena2 = cadena.split(caract);
var sum = 0;
var total = 0;

	for(var j = 0; j < cadena2.length; j++){
		sum = parseInt(cadena2[j]);
		total += sum;
	};

console.log("La suma de los números escritos es: " + total);