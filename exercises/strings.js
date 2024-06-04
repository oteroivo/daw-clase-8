// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var originalString = "hello world";
var uppercaseString = originalString.toUpperCase();
console.log(uppercaseString);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var originalString = "hello world";
var first5Chars = originalString.substring(0, 5);
console.log(first5Chars);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var originalString = "hello world";
var last3Chars = originalString.substring(originalString.length - 3);
console.log(last3Chars);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var originalString = "hello world";
var capitalizedString = originalString.substring(0, 1).toUpperCase() + originalString.substring(1).toLowerCase();
console.log(capitalizedString);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var originalString = "hello world";
var firstSpaceIndex = originalString.indexOf(" ");
console.log(firstSpaceIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var originalString = "hello world";
var spaceIndex = originalString.indexOf(" ");
var firstWord = originalString.substring(0, spaceIndex);
var secondWord = originalString.substring(spaceIndex + 1);
var result = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1).toLowerCase() + " " + 
             secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1).toLowerCase();
console.log(result);