/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
const animals = ['perro', 'gato', 'conejo', 'paloma', 'leon'];

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift('leopardo');
animals.push('tiburon');

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)

// 4. Crea un set que almacene cinco libros
const books = new Set(['libro1', 'libro2', 'libro3', 'libro4', 'libro5']);

// 5. Añade dos más. Uno de ellos repetido
books.add('libro6');
books.add('libro5');

// 6. Elimina uno concreto a tu elección
books.delete('libro2');
// 7. Crea un mapa que asocie el número del mes a su nombre
let moths = new Map([
  [1, 'enero'],
  [2, 'febrero'],
  [3, 'marzo'],
  [4, 'abril'],
  [5, 'mayo'],
  [6, 'junio'],
  [7, 'julio'],
  [8, 'agosto'],
  [9, 'septiembre'],
  [10, 'octubre'],
  [11, 'noviembre'],
  [12, 'diciembre'],
])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (moths.has(5)) {
  console.log(moths.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
moths.set('verano', ['junio', 'julio', 'agosto']);
console.log(moths);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const arrayTrans = [1, 2, 3, 4, 1, 5];
const setArray = new Set(arrayTrans);
const setMapArray = new Map([
  ['numero', setArray]
])
console.log(setMapArray);
