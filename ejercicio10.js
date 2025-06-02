/* •	Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el precio original del producto
let precioOriginal = prompt("Ingrese el precio original del producto: ");

// Solicitar al usuario que ingrese el porcentaje de descuento
let porcentajeDescuento = prompt("Ingrese el porcentaje de descuento: ");

// Calcular el monto del descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// Calcular el precio final después de aplicar el descuento
let precioFinal = precioOriginal - montoDescuento;

// Imprimir el precio final
console.log("El precio final del producto después de aplicar el descuento es: ", precioFinal); // Imprimir el precio final