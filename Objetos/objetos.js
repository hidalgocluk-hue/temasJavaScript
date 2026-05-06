//Un objeto es una estructura que guarda información en forma de propiedades (clave: valor).
//Ejemplo básico:
let persona = {
 nombre: "Ana",
edad: 25,
    //ciudad: "Bogotá"
};

console.log(persona.nombre);
console.log(`El nombre es: ${persona.nombre}`);
console.log(`La edad es: ${persona.edad}`);


// Funciones dentro de objetos (métodos)
//Un objeto también puede tener funciones.
//A estas funciones se les llama métodos.

//Ejemplo:

let producto = {
    nombre: "Laptop",
    precio: 3000,

    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} cuesta ${this.precio}`);
    }
};

producto.mostrarInfo();

///Ejemplo práctico usandocondicional)
let estudiante = {
    nombre: "Carlos",
    nota: 2.8,

    evaluar: function() {
        if (this.nota >= 3) {
            console.log(`El estudiante ${this.nombre} aprobó`);
        } else {
            console.log(`El estudiante ${this.nombre} reprobó`);
        }
    }
};

estudiante.evaluar();


///Ejercicio 
/// Crear un objeto llamado auto que tenga:
//•	marca 
//•	modelo 
//•	velocidad 
// Y una función que diga: 
// •	Si la velocidad es mayor a 100 → "Vas muy rápido" 
//•	Si no → "Velocidad segura" 

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    velocidad: 120,

    verificarVelocidad: function() {
        if (this.velocidad > 100) {
            console.log(`Vas muy rápido con ${this.marca} ${this.modelo}`);
        } else {
            console.log(`Velocidad segura`);
        }
    }
};

auto.verificarVelocidad();
