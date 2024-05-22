

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregar-pedido").addEventListener("click", agregarPedido);
    document.getElementById("finalizar-pedido").addEventListener("click", finalizarPedido);
});

let cliente = {
    nombre: "",
    edad: "",
    direccion: ""
};
let pedidos = [];

let nombreCafeteria = "Cafetería El Sabor";

let menu = {
    cafe: { precio: 2.5, imagen: "cafe.jpg" },
    te: { precio: 1.8, imagen: "te.jpg" },
    pastel: { precio: 3.0, imagen: "pastel.jpg" }
};

function procesarPedido(pedidos, cliente) {
    alert("¡Bienvenido a " + nombreCafeteria + "! Por favor, elija su pedido.");

    let historialPedidos = [];

    let total = 0;
    pedidos.forEach(function(pedido) {
        if (pedido.toLowerCase() in menu) {
            total += menu[pedido.toLowerCase()].precio;
            historialPedidos.push({ producto: pedido, precio: menu[pedido.toLowerCase()].precio });
        } else {
            alert("Lo siento, no tenemos " + pedido + " en el menú.");
        }
    });

    function calcularTotalConImpuestos(subtotal) {
        const impuesto = 0.1; // 10% de impuesto
        return subtotal * (1 + impuesto);
    }

    function imprimirFactura(cliente, historial, total) {
        let facturaHTML = "<h2>Factura</h2>" +
            "<p><strong>Cliente:</strong> " + cliente.nombre + "</p>" +
            "<p><strong>Edad:</strong> " + cliente.edad + "</p>" +
            "<p><strong>Dirección:</strong> " + cliente.direccion + "</p>" +
            "<div id='historialPedidos'>" +
            "<h2>Historial de Pedidos</h2>" +
            "<table>" +
            "<thead>" +
            "<tr>" +
            "<th>Producto</th>" +
            "<th>Precio</th>" +
            "<th>Imagen</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
        
        historial.forEach(function(pedido) {
            facturaHTML += "<tr>" +
                "<td>" + pedido.producto + "</td>" +
                "<td>$" + pedido.precio.toFixed(2) + "</td>" +
                "<td><img src='" + menu[pedido.producto.toLowerCase()].imagen + "' alt='" + pedido.producto + "'></td>" +
                "</tr>";
        });
        
        facturaHTML += "</tbody>" +
            "</table>" +
            "</div>" +
            "<p><strong>Total (con impuestos):</strong> $" + calcularTotalConImpuestos(total).toFixed(2) + "</p>" +
            "<h3>Detalle de Productos y Precios:</h3>" +
            "<table>" +
            "<thead>" +
            "<tr>" +
            "<th>Producto</th>" +
            "<th>Precio</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
        
        for (let item in menu) {
            facturaHTML += "<tr>" +
                "<td>" + item + "</td>" +
                "<td>$" + menu[item].precio.toFixed(2) + "</td>" +
                "</tr>";
        }
        
        facturaHTML += "</tbody>" +
            "</table>";
        
        document.getElementById("factura").innerHTML = facturaHTML;
    }

    // JSON
    let facturaJSON = JSON.stringify({ cliente: cliente, historial: historialPedidos, total: calcularTotalConImpuestos(total).toFixed(2) });
    console.log("Factura en formato JSON:");
    console.log(facturaJSON);

    // Storage
    localStorage.setItem("factura", facturaJSON);
}

function agregarPedido() {
    let pedido = document.getElementById("pedido").value;
    pedidos.push(pedido);
    procesarPedido(pedidos, cliente);
}

function finalizarPedido() {
    procesarPedido(pedidos, cliente);

    let resumenCompra = "<h2>Resumen de la Compra</h2>" +
        "<p>Gracias por su compra, " + cliente.nombre + "!</p>" +
        "<p>Resumen de su pedido:</p>" +
        "<ul>";

    pedidos.forEach(function(pedido) {
        resumenCompra += "<li>" + pedido + "</li>";
    });

    resumenCompra += "</ul>";

    document.getElementById("resumenCompra").innerHTML = resumenCompra;
}