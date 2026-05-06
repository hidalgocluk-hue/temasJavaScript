//Un array es una estructura que nos permite guardar varios valores en una sola variable.
//Ejemplo básico:

let frutas = ["manzana", "banana", "uva"];
console.log(frutas);

//Ejemplo práctico 1: Recorrer un array

let numeros = [1, 2, 3, 4];

for (let i = 0; i < numeros.length; i++) {
    console.log(`El número es: ${numeros[i]}`);
}

//Aquí usamos:
//•	Un ciclo for 
//•	.length para saber cuántos elementos hay 

//ejemplo 2

let notas = [2.5, 3.8, 4.2, 1.9];

for (let i = 0; i < notas.length; i++) {
    
    if (notas[i] >= 3) {
        console.log(`La nota ${notas[i]} es aprobada`);
    } else {
        console.log(`La nota ${notas[i]} es reprobada`);
    }
}

