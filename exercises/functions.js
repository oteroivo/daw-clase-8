// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
  }
  
  var resultado = suma(5, 3);
  console.log(resultado);
  
  // b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
  function sumaConValidacion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Uno de los parámetros tiene error");
      return NaN;
    }
    return a + b;
  }
  
  resultado = sumaConValidacion(5, "3");
  console.log(resultado);
  
  // c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
  function validateInteger(numero) {
    return Number.isInteger(numero);
  }
  
  console.log(validateInteger(5)); // true
  console.log(validateInteger(5.5)); // false
  
  // d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
  function sumaConValidacionEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Uno de los parámetros tiene error");
      return NaN;
    }
  
    if (!validateInteger(a)) {
      alert("El primer número no es entero");
      a = Math.round(a);
    }
  
    if (!validateInteger(b)) {
      alert("El segundo número no es entero");
      b = Math.round(b);
    }
  
    return a + b;
  }
  
  resultado = sumaConValidacionEnteros(5.5, 3);
  console.log(resultado);
  
  // e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
  function validarEntero(numero) {
    if (!validateInteger(numero)) {
      alert(`El número ${numero} no es entero`);
      return Math.round(numero);
    }
    return numero;
  }
  
  function sumaConValidacionEnFuncion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Uno de los parámetros tiene error");
      return NaN;
    }
  
    a = validarEntero(a);
    b = validarEntero(b);
  
    return a + b;
  }
  
  resultado = sumaConValidacionEnFuncion(5.5, 3);
  console.log(resultado);