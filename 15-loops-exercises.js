/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(`numero ${i}`);

}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
let n = 0;
while (n <= 100) {
  suma += n;
  n++;
}
console.log('la suma es: ' + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  console.log(`numero ${i}`);

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ['nombre1', 'nombre2', 'nombre3', 'nombre4']
for (let n of nombres) {
  console.log(n);

}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const cadena = 'abcdef';
let cant = 0;
for (let v of cadena) {
  if (/^[aeiou]/.test(v)) {
    cant++;
  }
}
console.log(cant);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [2, 3, 4, 5, 6];
let resultM = 1;
for (let i = 0; i < numeros.length; i++) {
  resultM *= numeros[i];

}
console.log(resultM);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i <= 10; i++) {
  console.log(`5 * ${i} = ${i * 5}`);

}
// 8. Usa un bucle para invertir una cadena de texto
let texto = 'qwerty';
let resultInver = '';
for (let i = texto.length - 1; i >= 0; i--) {
  resultInver += texto[i];

}
console.log(resultInver);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
const fibonacci = [0, 1]; //Secuencia inicial
for (let i = 2; i < 10; i++) {
  fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);

}
console.log(fibonacci);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numerosA = [1, 20, 3, 50, 100];
const resultN = [];
for (let i = 0; i < numerosA.length; i++) {
  if (numerosA[i] > 10) {
    resultN.push(numerosA[i])
  }

}