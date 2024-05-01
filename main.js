// Mi 1er trabajo practico consta de un sistema que te dice cuanto tiempo de salida le falta a cada comanda en un restaurante.

//
//
//


/*alert ("Bienvenido al turno, escribe tu nombre");

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

//Si no es problema, dejé la primera pre-entrega ahí arriba, ya que quise probar haciendo algo diferente para la segunda pre-entrega. 

/**  Mi 2do trabajo practico consta de un autoservicio a traves de la app (tipo automac pero a traves de autoservicio)*/ 


function procesarPedido(pedidos, cliente) {

    let nombreCafeteria = "Cafetería El Sabor";

    let menu = {
        cafe: 2.5,
        te: 1.8,
        pastel: 3.0
    };

    alert("¡Bienvenido a " + nombreCafeteria + "! Por favor, elija su pedido.");

    let historialPedidos = [];

    let total = 0;
    pedidos.forEach(function(pedido) {
        if (pedido.toLowerCase() in menu) {
            total += menu[pedido.toLowerCase()];
            historialPedidos.push({ producto: pedido, precio: menu[pedido.toLowerCase()] });
        } else {
            alert("Lo siento, no tenemos " + pedido + " en el menú.");
        }
    });


    function calcularTotalConImpuestos(subtotal) {
        const impuesto = 0.1; // 10% de impuesto
        return subtotal * (1 + impuesto);
    }

    function imprimirFactura(cliente, historial, total) {
        console.log("Cliente: " + cliente.nombre);
        console.log("Edad: " + cliente.edad);
        console.log("Dirección: " + cliente.direccion);
        console.log("Historial de Pedidos:");
        historial.forEach(function(pedido, index) {
            console.log((index + 1) + ". " + pedido.producto + ": $" + pedido.precio.toFixed(2));
        });
        console.log("Total (con impuestos): $" + calcularTotalConImpuestos(total).toFixed(2));
    }

    imprimirFactura(cliente, historialPedidos, total);
}

let cliente = {
    nombre: prompt("Ingrese su nombre"),
    edad: parseInt(prompt("Ingrese su edad")),
    direccion: prompt("Ingrese su dirección")
};
let pedidos = [];
let seguirPedido = true;

while (seguirPedido) {
    let pedido = prompt("¿Qué le gustaría ordenar? (cafe, te, pastel)\nPara terminar de pedir, escriba '0'");
    if (pedido.toLowerCase() === "0") {
        seguirPedido = false;
    } else {
        pedidos.push(pedido);
    }
}

procesarPedido(pedidos, cliente);
