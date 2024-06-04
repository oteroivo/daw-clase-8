// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]); // Mayo
console.log(meses[10]); // Noviembre

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
meses.sort();
console.log(meses);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.shift();
meses.pop();
console.log(meses);

// e. Invertir el orden del array (utilizar reverse).
meses.reverse();
console.log(meses);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var mesesString = meses.join("-");
console.log(mesesString);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var mesesMayoNoviembre = meses.slice(4, 11);
console.log(mesesMayoNoviembre);