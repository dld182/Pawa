// Closures
function retornaFuncionSaludo(){
	var mensaje = "Hola a todos";
	var funcionSaludo = function(){
		console.log(mensaje);
	};
	return funcionSaludo;
};
var saludando = retornaFuncionSaludo();

// Ejecutando funcion saludando
saludando();