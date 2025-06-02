/* •	Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de conversión es: 
fahrenheit = celsius * 9 / 5 + 32; 

Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32; 
*/

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese la temperatura en grados Celsius
let celsius = prompt("Ingrese la temperatura en grados Celsius: ");

//Muestra el resultado en Fahrenheit
let fahrenheit = parseFloat(celsius) * 9 / 5 + 32; // Convertir Celsius a Fahrenheit usando la fórmula

console.log("La temperatura en grados Fahrenheit es: ", fahrenheit); // Imprimir el resultado


