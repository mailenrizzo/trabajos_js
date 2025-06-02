/* •	Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras. 

Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara dos variables y asígnales valores numéricos de tu elección.
2. Utiliza un método de tu elección para intercambiar los valores de las dos variables.
*/

// Declaración y Asignación de Variables

let variable1 = 10; // Asignamos el valor 10 a la variable variable1
let variable2 = 20; // Asignamos el valor 20 a la variable variable2

// Mostrar valores antes del intercambio
console.log("Antes del intercambio:"); // Mensaje antes del intercambio
console.log("Variable 1:", variable1); // Imprimimos el valor de variable1
console.log("Variable 2:", variable2); // Imprimimos el valor de variable2

// Intercambio de valores usando una variable temporal
let temp = variable1; // Guardamos el valor de variable1 en una variable temporal
variable1 = variable2; // Asignamos el valor de variable2 a variable1   
variable2 = temp; // Asignamos el valor de la variable temporal a variable2

// Mostrar valores después del intercambio
console.log("Después del intercambio:"); // Mensaje después del intercambio
console.log("Variable 1:", variable1); // Imprimimos el nuevo valor de variable1
console.log("Variable 2:", variable2); // Imprimimos el nuevo valor de variable2
// Alternativa: Intercambio de valores usando asignación simultánea     

