console.log('--EXERCISE 3: ARRAYS');

/* a Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('\n-Exercise 3.a');

var array = [
  "Enero", 
  "Febrero", 
  "Marzo", 
  "Abril", 
  "Mayo", 
  "Junio", 
  "Julio", 
  "Agosto", 
  "Septiembre", 
  "Octubre", 
  "Noviembre", 
  "Diciembre"]

console.log(array[4], array[10]);

// b Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('\n-Exercise 3.b');

var sortArray = array.sort();
console.log(sortArray);

// c Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('\n-Exercise 3.c');

array.unshift('start');
array.push('end');

console.log(array);

// d Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('\n-Exercise 3.d');

array.shift();
array.pop();

console.log(array);

// e Invertir el orden del array (utilizar reverse).

console.log('\n-Exercise 3.e');

var reverseArray = array.reverse();

console.log(reverseArray);

// f Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('\n-Exercise 3.f');

var joinArray = array.join('-');

console.log(joinArray);

// g Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('\n-Exercise 3.g');

var copyArray = [
  "Enero", 
  "Febrero", 
  "Marzo", 
  "Abril", 
  "Mayo", 
  "Junio", 
  "Julio", 
  "Agosto", 
  "Septiembre", 
  "Octubre", 
  "Noviembre", 
  "Diciembre"]

var arraySlice = copyArray.slice(4, 11);

console.log(arraySlice);