/* •	Ejercicio 5 – Operadores:
Vimos cómo declarar una variable y asignarle un valor, y probablemente surgió la siguiente pregunta: ¿para qué sirve almacenar datos en variables? Las variables nos permiten reutilizar el dato asignado en la misma con solo invocar su nombre.
También, algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números, podemos hacer lo mismo con las variables que las referencian.

Pasos a seguir:
Declaración y Asignación de Variables:
1.	Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.
Operaciones Matemáticas:

2.	Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision.
3.	Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables primerNumero y segundoNumero.

Mostrar Resultados:

1.	Utiliza console.log(nombreDeLaVariable) para imprimir cada uno de los resultados y ver cómo se ven los mismos.
Pista 1: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
Pista 2: Para asignar el valor a una variable utilizamos el operador "=" seguido del valor que queremos asignarle.
*/

// Declaración y Asignación de Variables
let primerNumero = 10; // Asignamos el valor 10 a la variable primerNumero
let segundoNumero = 5; // Asignamos el valor 5 a la variable segundoNumero

// Operaciones Matemáticas
let resultadoSuma = primerNumero + segundoNumero; // Suma de primerNumero y segundoNumero
let resultadoResta = primerNumero - segundoNumero; // Resta de primerNumero y segundoNumero
let resultadoMultiplicacion = primerNumero * segundoNumero; // Multiplicación de primerNumero y segundoNumero
let resultadoDivision = primerNumero / segundoNumero; // División de primerNumero y segundoNumero

// Mostrar Resultados
console.log("Resultado de la suma:", resultadoSuma); // Imprimimos el resultado de la suma
console.log("Resultado de la resta:", resultadoResta); // Imprimimos el resultado de la resta
console.log("Resultado de la multiplicación:", resultadoMultiplicacion); // Imprimimos el resultado de la multiplicación
console.log("Resultado de la división:", resultadoDivision); // Imprimimos el resultado de la división

