/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let varSum = 1 + 0;// Suma
let varSub = 1 - 0; // Resta
let varMult = 1 * 0;// MUltiplicar
let varDiv = 1 / 1;//Dividir
let varMod = 1 % 2;// MOdulo
let varExp = 1 ** 2;//Expotencial



// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
varSum += 2;// Suma
varSub -= 1; // Resta
varMult *= 2;// MUltiplicar
varDiv /= 2;//Dividir
varMod %= 2;// MOdulo
varExp **= 2;//Expotencial
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(1 > 0);
console.log(1 < 2);
console.log(1 == 1);
console.log(1 !== 0);
console.log(1 >= 0);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1 < 0);
console.log(1 > 2);
console.log(1 != 1);
console.log(1 == 0);
console.log(1 <= 0);
// 5. Utiliza el operador lógico and
console.log(1 > 0 && 1 == 1);
// 6. Utiliza el operador lógico or
console.log(1 > 0 || 1 == 1);
// 7. Combina ambos operadores lógicos
console.log(1 > 0 || 1 == 1 && 1 > 2);
// 8. Añade alguna negación
console.log(!(1 > 0 || 1 == 1));
// 9. Utiliza el operador ternario
console.log(1 > 0 ? 1 : 0);
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(varSum *= 2 > 0 && 2 > 1);