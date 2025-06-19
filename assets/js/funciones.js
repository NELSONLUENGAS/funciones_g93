/***
 * Funciones en JavaScript
 * Definición de función:
 * function saludar(nombre) {
 *   console.log(`Hola ${nombre}, que tal!`)
 * }
 *
 * Expresión de función:
 * función anonima:
 * const saludar = function(nombre) {
 *   console.log(`Hola ${nombre}, que tal!`)
 * }
 *
 *  Arrow function:
 * const saludar_2 = (nombre) => {
 *   console.log(`Hola ${nombre}, que tal!`)
 * }
 * Función anónima:
 *  function(nombre) {
 *   console.log(`Hola ${nombre}, que tal!`)
 * }
 *
 * Funciones de retorno:
 *  function pastelero (ingredientes){
 *  return `Tu pastel está listo`
 * }
 *
 *
 * Operador rest: ...args
 */

let message;
// -----------------------Parametros -------------------
function crearPastel(nombrePastel, tipoPastel, ...ingredientes) {
	message = `Tu pastel de ${tipoPastel} con los ingredientes ${ingredientes.join(
		', '
	)} está listo, con el nombre de ${nombrePastel}`;

	return message;
}

// Arrow function de una línea
const suma = (a, b) => a + b;

// -------argumentos
// const miPastel = crearPastel(
// 	'Paquita',
// 	'Torta tres leches',
// 	'Fresa',
// 	'Chocolate',
// 	'Polvo de hornear',
// 	'Leche condensada'
// );

// ----Parametros por default \n  => salto de línea
/**
 * 1 resultado = ''
 * 2 resultado = '5 x 1 = 5 \n'
 * 3 resultado = `5 x 1 = 5
 *  5 x 2 = 10
 *  5 x 3 = 15
 *
 * `
 *
 * .resultado += 'siguiente'
 *
 * resultado = resultado + 'siguiente'
 */
// expresión de función
const tablaDeMultiplicar = (numero, limite = 12) => {
	let resultado = '';
	for (let i = 1; i <= limite; i++) {
		resultado += `${numero} x ${i} = ${numero * i}\n`;
	}
	console.log(resultado);

	return resultado;
};

// tablaDeMultiplicar(6);
