/* •	Ejercicio 4 – Tipo de Datos: 
Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

Pasos a seguir:
Declaración de Variables:
1.	Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
2.	Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
3.	Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
4.	Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

Operaciones y Validaciones:

1.	Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
2.	Concatena el “string” de la variable texto con otro mensaje adicional.
3.	Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
4.	Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
*/

const prompt = require('prompt-sync')();

// 1. Declaramos una variable llamada verdadero y le asignamos un valor booleano
let verdadero = true;         // Asignamos el valor true a la variable verdadero

// 2. Declaramos una variable llamada texto y le asignamos un string
let texto = "¡Hola, este es un mensaje de texto!";             // Asignamos un string a la variable texto

// 3. Declaramos una variable llamada numero y le asignamos un dato numérico

let numero = 42;                       // Asignamos el número 42 a la variable numero

// 4. Declaramos una variable llamada nada y le asignamos un valor que represente la ausencia de valor
let nada = null;                     // Asignamos null a la variable nada


// Operaciones y Validaciones:
// 1. Realizamos una operación matemática usando la variable numero

let resultado = numero + 8; // Suma 8 al valor de la variable numero
console.log("Resultado de la operación matemática:", resultado); // Imprimimos el resultado de la operación  

// 2. Concatenamos el string de la variable texto con otro mensaje adicional
let mensaje = texto + " ¡Espero que estés teniendo un buen día!"; // Concatenamos un mensaje adicional
console.log("Mensaje concatenado:", mensaje); // Imprimimos el mensaje concatenado

// 3. Verificamos si la variable verdadero es true o false
if (verdadero) {
    console.log("La variable 'verdadero' es true."); // Mensaje si verdadero es true
} else {
    console.log("La variable 'verdadero' es false."); // Mensaje si verdadero es false
}

// 4. Implementamos una condición para verificar si la variable nada es null
if (nada === null) {
    console.log("La variable 'nada' es null."); // Mensaje si nada es null
}   else {
    console.log("La variable 'nada' no es null."); // Mensaje si nada no es null
}




