/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//comentario de una linea

// 2. Escribe un comentario en varias líneas
/*
comentario 
de 
varias 
lineas 
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let varCadena = 'hola'; //String
let varNumber = 1; //Number
let varBoolean = true; //Boolean
let varNull = null; //Null
let varUndefined = undefined; //Undefined
let varBigint = BigInt(20); //BigInt
let varSymbol = Symbol('hola');//Symbol

// 4. Imprime por consola el valor de todas las variables
console.log(varCadena);
console.log(varNumber);
console.log(varBoolean);
console.log(varNull);
console.log(varUndefined);
console.log(varBigint);
console.log(varSymbol);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof varCadena);
console.log(typeof varNumber);
console.log(typeof varBoolean);
console.log(typeof varNull);
console.log(typeof varUndefined);
console.log(typeof varBigint);
console.log(typeof varSymbol);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
varCadena = 'hola1'; //String
varNumber = 2; //Number
varBoolean = false; //Boolean
varNull = null; //Null
varUndefined = undefined; //Undefined
varBigint = BigInt(2444); //BigInt
varSymbol = Symbol('hola3');//Symbol
console.log(varSymbol);


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
varCadena = 1;
varNumber = 'hola';
varBoolean = null;
varNull = true;
varUndefined = BigInt(3);
varBigint = undefined;
varSymbol = null;
console.log(varSymbol);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const varCadena1 = 'hola'; //String
const varNumber1 = 1; //Number
const varBoolean1 = true; //Boolean
const varNull1 = null; //Null
const varUndefined1 = undefined; //Undefined
const varBigint1 = BigInt(20); //BigInt
const varSymbol1 = Symbol('hola');//Symbol

// 9. A continuación, modifica los valores de las constantes
//varCadena1 = 'hola1';
//varNumber1 = 11;
//varBoolean1 = false;
//varNull1 = undefined;
//varUndefined1 = null;
//varBigint1 = BigInt(2025);
//varSymbol1 = Symbol('hola1');

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//varCadena1 = 'hola1';
//varNumber1 = 11;
//varBoolean1 = false;
//varNull1 = undefined;
//varUndefined1 = null;
//varBigint1 = BigInt(2025);
//varSymbol1 = Symbol('hola1');