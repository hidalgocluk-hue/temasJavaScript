let numeros2 = [10, 20, 30, 40];

for (let i = 0; i < numeros2.length; i++) {
    console.log(`El número es: ${numeros2[i]}`);
};

//•	i es el índice 
//•	numeros.length es el tamaño del array 

//3Ejemplo con condicional
let edades = [15, 22, 17, 30];

for (let i = 0; i < edades.length; i++) {

    if (edades[i] >= 18) {
        console.log(`Edad ${edades[i]}: Mayor de edad`);
    } else {
        console.log(`Edad ${edades[i]}: Menor de edad`);
    }
};

// Contar aprobados
//•	Contar cuántos aprobaron (>= 3) 
///•	Mostrar el total 


let notas2 = [2.5, 3.0, 4.5, 1.8, 3.7, 4];

let contador = 0;

for (let nota of notas2) {
    if (nota >= 3) {
        contador++;
    }
}

console.log(`Cantidad de aprobados: ${contador}`);

