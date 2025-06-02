/*•	Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula: 
Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:

let imc = peso / (altura * altura);
*/  

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese su peso
let peso = prompt("Ingrese su peso: ");

// Solicitar al usuario que ingrese su altura  
let altura = prompt("Ingrese su altura: ");

// Calcular el IMC usando la fórmula
let imc = peso / (altura * altura);

console.log("El Índice de Masa Corporal (IMC) es: ", imc); // Imprimir el IMC calculado