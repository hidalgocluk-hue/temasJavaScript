//Queremos validar si una persona puede entrar a una discoteca y además si puede tomar alcohol.

 let edad = prompt("Ingresa tu edad:");

    // Convertimos a número
    edad = parseInt(edad);

    if (edad >= 18) {
        console.log("Puede entrar a la discoteca");

        if (edad >= 21) {
            console.log("Puede tomar alcohol");
        } else {
            console.log("No puede tomar alcohol");
        }

    } else {
        console.log("No puede entrar");
    }
//Explicación:
//Primero verificamos si es mayor de edad. 
//Luego, dentro de ese bloque, verificamos otra condición más específica. 


let nota = parseFloat(prompt("Ingresa la nota del estudiante:"));

    if (nota >= 3) {
        console.log(`La nota ${nota} es APROBADA `);

        if (nota >= 4.5) {
            console.log(`La nota ${nota} es EXCELENTE `);
        }

    } else {
        console.log(`La nota ${nota} es REPROBADA `);
    }