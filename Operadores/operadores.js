// 1. Operador AND (&&)
//  Se cumple solo si TODAS las condiciones son verdaderas.
   
let edad = parseInt(prompt("Ingresa tu edad:"));
    let tieneID = confirm("¿Tienes documento de identidad?");

    if (edad >= 18 && tieneID) {
    console.log(`Edad ${edad}: Puede ingresar `);
} else {
    console.log(`Edad ${edad}: No puede ingresar `);

//Solo entra si:
//Es mayor de edad Y
//Tiene documento
}

//2. Operador OR ()
// Se cumple si AL MENOS UNA condición es verdadera.

let tieneDescuento = false;
let esClienteVIP = true;

if (tieneDescuento || esClienteVIP) {
    console.log("Aplica descuento");
} else {
    console.log("No aplica descuento");
}

