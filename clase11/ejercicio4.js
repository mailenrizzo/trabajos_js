/* Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.
Utiliza estructuras if para resolverlo.
*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Introduce un número: "));
if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
}           
else if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}
