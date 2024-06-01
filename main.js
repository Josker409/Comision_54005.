const container = document.getElementById("container-productos");

const titulo = document.getElementById("nuestros-productos");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// La función pedirProductos va a EMULAR el pedido de productos a la Base de Datos.

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    });
};


function mostrarProductos(productos) {

    productos.forEach(el => {

        const card = document.createElement("div");
        card.className = "card-productos";

        const nombre = document.createElement("h2");
        nombre.innerText = el.nombre.toUpperCase();
        nombre.className = "nombre";

        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.className = "img-productos";

        const precio = document.createElement("p")
        precio.innerText = `${el.precio}`;
        precio.className = "precio";

        const boton = document.createElement("button");
        boton.innerText = "Agregar al Carrito";
        boton.className = "boton-productos";
        boton.onclick = () => agregarAlCarrito(el.codigo);

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(boton);

        container.appendChild(card);

    });

};

mostrarProductos(productos);

function agregarAlCarrito(id) {
    const productoAgregado = productos.find(el => el.codigo === id);
    if (carrito.some (el => el.codigo === productoAgregado.codigo)) {
        let indiceProducto = carrito.findIndex(el => el.codigo === productoAgregado.codigo);
        console.log(indiceProducto);
        carrito[indiceProducto].cantidad++;
    } else {
        carrito.push(productoAgregado);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// ------------ De acá para abajo está prohibido usar BD directamente.

pedirProductos()
.then((response) => {
    console.log("RESUELTO", response)
    setTimeout(() => {
        
        const loader = document.getElementById("loader");
        loader.remove();
        response.forEach(el => crearCard(el));
    }, 100);
});