/* Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

Si el número ingresado no es positivo, muestra un mensaje indicando que el número debe ser positivo.
*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Introduce un número entero positivo: ")); 

if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingresa un número entero positivo.");
}
else {
    console.log(`Múltiplos de ${numero} entre 1 y 100:`);
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i);
        }
    }
}