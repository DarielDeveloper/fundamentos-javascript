/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log('Hola ' + 'Mundo');

// 2. Muestra la longitud de una cadena de texto
console.log('hola'.length);

// 3. Muestra el primer y último carácter de un string
let cadena = 'hola';
console.log(cadena[0]);
console.log(cadena[cadena.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());
// 5. Crea una cadena de texto en varias líneas
let texto = `hola
mundo 
grande
`;
// 6. Interpola el valor de una variable en un string
console.log(`interpolando ${texto}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log('hola mundo javascript'.replaceAll(' ', '-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log('hola mundo'.includes(cadena));

// 9. Comprueba si dos strings son iguales
console.log('hola' === 'hola');

// 10. Comprueba si dos strings tienen la misma longitud
console.log('hola'.length == 'hola'.length);
