const container = document.getElementById("container-productos");

const titulo = document.getElementById("nuestros-productos");

//

const productos = [

    {
        "codigo": 1,
        "nombre": "cafe",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1000px-A_small_cup_of_coffee.JPG",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 2,
        "nombre": "torta chocolate",
        "imagen": "https://cdn2.cocinadelirante.com/sites/default/files/images/2023/08/receta-de-pastel-de-chocolate-facil.jpg",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 3,
        "nombre": "te frio",
        "imagen": "https://www.comedera.com/wp-content/uploads/2022/04/te-frio.jpg",
        "precio": 2500,
        "cantidad": 1,
    },

]

//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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


