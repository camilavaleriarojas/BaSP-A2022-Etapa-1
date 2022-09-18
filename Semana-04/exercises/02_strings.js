console.log('--EXERCISE 2: STRINGS');

// a Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('\n-Exercise 2.a');

var text = 'dolorem ipsum quia dolor sit amet';
var myUpperText = text.toUpperCase();

console.log(myUpperText);

// b Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b');

var lorem = 'Lorem ipsum dolor sit amet'; 
var subString = lorem.substring(0,5);

console.log(subString);

// c Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c');

var phrase = 'Curabitur eu ipsum quis arcu vulputate';
var lastCharacters = phrase.substring(phrase.length -3);

console.log(lastCharacters);