// Blocking Model
/*var fs = require('fs');

var manejador = function(err, data){
	if(err){
		console.log('> Error al leer archivo...');
		return;
	}
	console.log(data);
};
*/
// Lectura asincrona de archivos
// 1. Ruta del archivo a leer
// 2. Codificación
// 3. Qué función quieres que invoque a la hora de terminar la lectura del archivo
fs.readFile('\hola.html', 'utf-8', function(err, data){
	if(err){
		console.log('> Error al leer archivos...');
		return;
	}
	console.log(data);
});

// Finalizar con mensaje
console.log("> El programa ha finalizado...");