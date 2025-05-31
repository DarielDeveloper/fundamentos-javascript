/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const suma = (a, b) => a + b;
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayN = [1, 2, 3, 4];
function mayorN(arrayN) {
  let mayor = 0;
  for (let n of arrayN) {
    if (n > mayor) {
      mayor = n;
    }
  }
  return mayor;
}
console.log(mayorN(arrayN));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function cantVocal(cadena) {
  let cont = 0;
  let texto = cadena.toLowerCase();
  for (const element of texto) {
    if (element == 'a') {
      cont++;
      continue;
    }
    if (element == 'e') {
      cont++;
      continue;
    }
    if (element == 'i') {
      cont++;
      continue;
    }
    if (element == 'o') {
      cont++;
      continue;
    }
    if (element == 'u') {
      cont++;

    }

  }
  return cont;

}
console.log(cantVocal('qwerty'));


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let arrayText = ['qwerty', 'asdf', 'zxcvb'];
function mayusculas(arrayText) {
  const mayuscula = [];
  arrayText.forEach(text => {
    mayuscula.push(text.toUpperCase());
  });
  return mayuscula;
}
console.log(mayusculas(arrayText));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
/* 
Los números primos son los números enteros que son divisibles por 1 y por el mismo numero, excepto 1
*/
function numeroPrimo(num) {

  if (num <= 1) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  //Caso Par e Impar el único primo par es el 2 
  if (num % 2 == 0) {
    return false;
  }

  //Para los impares
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(numeroPrimo(10000019));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function comun(array1, array2) {
  const elementComun = [];
  for (let element of array1) {
    if (array2.includes(element)) {
      elementComun.push(element);
    }
  }
  return elementComun;
}
console.log(comun([1, 2, 3], [3, 2, 4]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaNP(arrayN) {
  let suma = 0;
  arrayN.forEach(e => {
    if (e % 2 == 0) {
      suma += e;
    }
  });
  return suma;
};
console.log(sumaNP([1, 2, 3, 4]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function arrayCuadrado(arrayN) {
  let arrayC = [];
  for (const n of arrayN) {
    arrayC.push(n ** 2);
  }

  return arrayC;
};
console.log(arrayCuadrado([1, 2, 3, 4]));
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function inverso(texto) {
  let textoInverso = [];
  for (let l = texto.length - 1; l >= 0; l--) {
    textoInverso.push(texto[l]);
  }
  return textoInverso;
};
console.log(inverso('hola'));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
  if (num < 0) throw new Error("Numero negativo");
  if (num == 1 || num == 2) return num;

  let factorial = 1;
  for (let n = 2; n <= num; n++) {
    factorial *= n;
  }
  return factorial;
};
console.log(factorial(5));