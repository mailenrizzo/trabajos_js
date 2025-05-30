/* v•	Ejercicio 3 – Constantes / Validación de Edad: 
Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último, Deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.

Desglosando el ejercicio deberás:

1.	Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
2.	Pide al usuario que ingrese su edad.
3.	Usa “parseInt” para convertir la entrada del usuario a un número entero.
4.	Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

Pista: Las constantes se declaran con la palabra reservada const y es buena práctica que sus nombres sean declarados siempre con letras mayúsculas. Utiliza parseInt para convertir la entrada del usuario a un número entero.
*/

const prompt = require('prompt-sync')();

// 1. Creamos constantes EDAD_MINIMA y EDAD_MAXIMA
const EDAD_MINIMA = 18; // Asignamos el valor 18 a la constante EDAD_MINIMA
const EDAD_MAXIMA = 99; // Asignamos el valor 99 a la constante EDAD_MAXIMA

// 2. Pedimos al usuario que ingrese su edad
let edadIngresada = prompt("Por favor, ingresa tu edad: ");

// 3. Usamos parseInt para convertir la entrada del usuario a un número entero
let edad = parseInt(edadIngresada);
// 4. Validamos si la edad ingresada está dentro del rango permitido
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log(`Tu edad ${edad} es válida. ¡Bienvenido!`); // Mensaje si la edad es válida
}
else {
    console.log(`Tu edad ${edad} no es válida. Debes tener entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años.`); // Mensaje si la edad no es válida
}
