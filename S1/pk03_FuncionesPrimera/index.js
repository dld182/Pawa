//Creando dos function expressions
var funcionSaludar = function(name){	
	console.log("Hola %s", name);
};

var funcionDespide = function(name){
	console.log("Adios %s", name);	
};

//Creando una declaración de funcion
//Handler -> Manejador
//Manejador: Es una funcion que procesa dato.
function mensaje(name, handler){
	name = name.toUpperCase();
	handler(name);
};
// Invocar la funcion mensaje
mensaje("itgam", funcionSaludar);