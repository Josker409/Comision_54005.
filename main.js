



// Mi 1er trabajo practico consta de un sistema que te dice cuanto tiempo de salida le falta a cada comanda en un restaurante.

//
//
//


alert ("Bienvenido al turno, escribe tu nombre");

const nombre = prompt("ingresa tu nombre");


if ((nombre == "Josker") || (nombre == "Maria")) {
    alert ("hola, bienvenido/a " + nombre);
} else {
    alert("hola, binevenido/a");
}

let tiempodesalida;

do{
    tiempodesalida = parseInt(prompt("ingresa el numero de mesa: \n\n1. mesa 14\n2. mesa 1\n3. mesa 8\n4. mesa 5\n\npara salir, ingresa 0"));
    
    switch (tiempodesalida) {
        case 0:
            alert("vuelve si necesitas saber el tiempo de tus comandas");
            break;
        case 1:
            alert("tiempo de salida: 8minutos");
            break;
        case 2:
            alert("tiempo de salida: 15minutos");
            break;
        case 3:
            alert("tiempo de salida: 29minutos");
            break;
        case 4:
            alert("tiempo de salida: 35minutos");
            break;
        default:
            alert("la mesa que ingresaste no tiene pedidos, intentalo de nuevo");
            break;
    }
} while(tiempodesalida !== 0);
