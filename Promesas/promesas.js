//Una promesa es un objeto que representa un valor que:
//•	 Puede resolverse (éxito) → resolve 
//•	 Puede fallar → reject 


let promesa = new Promise((resolve, reject) => {

    let exito = true;

    if (exito) {
        resolve("Operación exitosa");
    } else {
        reject("Ocurrió un error");
    }
});
