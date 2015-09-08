//Modelo bloqueante
//de una lectura de archivos

//Cargando 
//file stream module
var fs = require('fs');

// Reading the file
var content = 
	fs.readFileSync("\hola.html", 'utf-8');
// Imprimimos
console.log(content);
// Mensaje final
console.log('This program has finished its execution');