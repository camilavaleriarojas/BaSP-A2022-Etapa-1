console.log('--EXERCISE 2: STRINGS');

// a Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
// (utilizar toUpperCase).

console.log('\n-Exercise 2.a');

var text = 'dolorem ipsum quia dolor sit amet';
var myUpperText = text.toUpperCase();

console.log(myUpperText);

// b Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres 
// guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b');

var lorem = 'Lorem ipsum dolor sit amet'; 
var subString = lorem.substring(0,5);

console.log(subString);

// c Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
// guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c');

var phrase = 'Curabitur eu ipsum quis arcu vulputate';
var lastCharacters = phrase.substring(phrase.length -3);

console.log(lastCharacters);

// d Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
// mayúscula y las demás en minúscula. 
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('\n-Exercise 2.d');

var newString = 'etiam PORTA, dolor posuere pharetra elementum';
var stringChanged = newString.substring(0,1).toUpperCase() + newString.substring(1, newString.length).toLowerCase();

console.log(stringChanged);

// e Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n-Exercise 2.e');

var myPhrase = 'fermentum bibendum';
var mySpace = myPhrase.indexOf(" ");

console.log(mySpace);

/* f Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga 
  la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
  (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */ 

console.log('\n-Exercise 2.f');

var myString = 'pellentesque nonmaurist';
var firstWord = myString.substring(0,1).toUpperCase() + myString.substring(1, myString.indexOf(' ')).toLowerCase();
var secondWord = myString.substring(myString.indexOf(' ') +1, myString.indexOf(' ') +2).toUpperCase() + 
myString.substring(myString.indexOf(' ') +2, myString.length).toLowerCase();

var phraseComplete = firstWord + ' '+ secondWord;

console.log(phraseComplete);

