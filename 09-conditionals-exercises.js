/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 'Dariel'
if (nombre == 'Dariel') {
    console.log(`Hola ${nombre}`);

}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = 'dariel';
let pass = 'pass';
if (user === 'Dariel' && pass === 'pass') {
    console.log(`Hola ${nombre}`);

}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 1;
if (numero > 0) {
    console.log('número positivo');
}
else if (numero < 0) {
    console.log('número negativo');
}
else {
    console.log('número es 0');
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 20;
if (edad >= 18) {
    console.log('Puede hacer el voto');
}
else {
    console.log('No puede hacer el voto');
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let valor = edad >= 18 ? 'adulto' : 'menor';
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 10;
if (mes === 12 || mes <= 2) {
    console.log("Invierno");
} else if (mes >= 3 && mes <= 5) {
    console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano");
} else {
    console.log("Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
switch (mes) {
    case 1:
        console.log(31);
        break;
    case 2:
        console.log(28);
        break;
    case 3:
        console.log(31);
        break;
    case 4:
        console.log(30);
        break;
    case 5:
        console.log(30);
        break;
    case 6:
        console.log(31);
        break;
    case 7:
        console.log(31);
        break;
    case 8:
        console.log(30);
        break;
    case 9:
        console.log(31);
        break;
    case 10:
        console.log(30);
        break;
    case 11:
        console.log(31);
        break;
    case 12:
        console.log(31);
        break;

    default:
        console.log('No existe el mes');
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'spanish'
switch (idioma) {
    case 'spanish':
        console.log('hola');
        break;
    case 'english':
        console.log('hello');
        break;

    default:
        console.log('No se reconoce el idioma');
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case (mes === 12 || mes <= 2):
        console.log("Invierno");
        break;

    case (mes >= 3 && mes <= 5):
        console.log("Primavera");
        break;
    case (mes >= 6 && mes <= 8):
        console.log("Verano");
        break;
    default:
        console.log("Otoño");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7