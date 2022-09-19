console.log('--EXERCISE 6: FUNCTIONS');

/* a Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola. */

console.log('\n-Exercise 6.a');

function sum(a,b) {
  return a + b;
}

var result = sum(9,5);

console.log(result);

/* b A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error 
y retornar el valor NaN como resultado. */

console.log('\n-Exercise 6.b');

function sum(a,b) {
  if (isNaN(a) || isNaN(b)){
    alert('Error! not a number!')
    return NaN;
  } 
  else {
    return a + b;
  }
}

var number = sum(6,4);
var numberAndString = sum("x",3);

console.log(number);
console.log(numberAndString);

/* c Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero 
si es un número entero. */

console.log('\n-Exercise 6.c');

function validateInteger(c) {
  if (Number.isInteger(c)) {
    return true;
  } 
  else {
    return false;
  }
}

var numberInteger = validateInteger(5); 
var numberFloat = validateInteger(7.2);

/* d A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. 
y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y
retornar el número convertido a entero (redondeado). */

console.log('\n-Exercise 6.d');

function sum(a,b) {
  if (isNaN(a) || isNaN(b)){
    return NaN;
  } 
  else if (validateInteger(a)==false && validateInteger(b)==false) {
    alert("Error! decimal numbers");
    return {
      "a": Math.round(a),
      "b": Math.round(b)
    }
  }
  else if (validateInteger(a)==false) {
    alert("Error! decimal number")
    return Math.round(a);
  }
  else if (validateInteger(b)==false) {
    alert("Error! decimal number")
    return Math.round(b);
  }
  return a + b;
}

var test1 = sum("y", 3);
var test2 = sum(5, 9.6);

console.log(test1);
console.log(test2);

/* e Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de la función suma probando que todo siga funcionando igual. */

console.log('\n-Exercise 6.e');

function validateInt(num1,num2) {
  if (validateInteger(num1)==false && validateInteger(num2)==false) {
    alert("Error! decimal numbers");
    return {
      "num1": Math.round(num1),
      "num2": Math.round(num2)
    }
  }
  else if (validateInteger(num1)==false) {
    alert("Error! decimal number")
    return Math.round(num1);
  }
  else if (validateInteger(num2)==false) {
    alert("Error! decimal number")
    return Math.round(num2);
  }
  else {
    return false;
  }
}

function sum(num1,num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert('Error! not a number!')
    return NaN;
  } 
  else if (validateInt(num1, num2)) {
    return validateInt(num1, num2);
  }
  else {
    return num1 + num2
  }
} 

var test3 = sum(1.6, 2.7);
var test4 = sum(12,5);

console.log(test3);
console.log(test4);

