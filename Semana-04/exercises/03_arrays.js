console.log('--EXERCISE 3: ARRAYS');

/* a Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('\n-Exercise 3.a');

var months = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre']

console.log(months[4], months[10]);

// b Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('\n-Exercise 3.b');

var sortMonths = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre']

sortMonths.sort();

console.log(sortMonths);

// c Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('\n-Exercise 3.c');

months.unshift('start');
months.push('end');

console.log(months);

// d Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('\n-Exercise 3.d');

var deleteMonths = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre']

deleteMonths.shift();
deleteMonths.pop();

console.log(deleteMonths);

// e Invertir el orden del array (utilizar reverse).

console.log('\n-Exercise 3.e');

var reverseMonths = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre']

reverseMonths.reverse();

console.log(reverseMonths);

// f Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('\n-Exercise 3.f');

var joinArray = months.join('-');

console.log(joinArray);

// g Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('\n-Exercise 3.g');

var copyMonths = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre']

var arraySlice = copyMonths.slice(4, 11);

console.log(arraySlice);
