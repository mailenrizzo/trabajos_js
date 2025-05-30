/* •	Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.

Desglosando el ejercicio deberás:
1.	Pide al usuario que ingrese su nombre.
2.	Pide al usuario que ingrese su edad.
3.	Pide al usuario que ingrese su peso.
4.	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca pedir datos al usuario, por lo que usaremos prompt-sync para solicitar esta información.
*/

const prompt = require('prompt-sync')();

// 1. Pedimos al usuario que ingrese su nombre  
let nombre = prompt("Por favor, ingresa tu nombre: ");
// 2. Pedimos al usuario que ingrese su edad
let edad = prompt("Por favor, ingresa tu edad: ");
// 3. Pedimos al usuario que ingrese su peso
let peso = prompt("Por favor, ingresa tu peso: ");

// 4. Mostramos un mensaje personalizado que incluya el nombre, la edad y el peso del usuario
console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`); // Imprimimos el mensaje personalizado
