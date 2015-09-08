// Este codigo ejecuta sin problemas
// debido a que la function declaration
// es cargada antes de que cualquier
// otro codigo cargue, por lo tanto
// carga antes de que saluda sea invocada
// por primera vez
saluda("Daniiel");
function saluda(name){
	console.log("Hola " + name);
}

// Este codigo marca error debido a que solo
// podemos usar la function expressions despide
// despues de haberla creado
 despide("Brenda");
var despide = function(name){
	console.log("Adios " + name);
};