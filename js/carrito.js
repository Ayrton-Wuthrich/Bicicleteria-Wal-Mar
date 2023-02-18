let productosEnCarrito = JSON.parse(localStorage.getItem("producto-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const totalDeCompra = document.querySelector("#totalDeCompra");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoProductos.innerHTML = '';

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.marca}">
            <div class="carrito-producto-titulo carritoAlmacenamiento">
                <small>Marca</small>
                <h3>${producto.marca}</h3>
            </div>
            <div class="carrito-producto-color carritoAlmacenamiento">
                <small>Color</small>
                <p>${producto.color}</p>
            </div>
            <div class="carrito-producto-rodado carritoAlmacenamiento">
                <small>Rodado</small>
                <p>${producto.rodado}</p>
            </div>
            <div class="carrito-pruducto-cantidad carritoAlmacenamiento">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio carritoAlmacenamiento">
                <small>Total</small>
                <p>$ ${producto.precio}</p>
            </div>
            <div class="carrito-producto-precio carritoAlmacenamiento">
                <small>SubTotal</small>
                <p>$ ${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
        `;
            contenedorCarritoProductos.append(div);
        })

    

    } else {

        contenedorCarritoProductos.innerHTML = `
        <p id="carrito-vacio" class="carrito-vacio">Tu carrito esta vacio<i class="bi bi-emoji-frown"></i></p>
        `
    }
    actualizarBotonesEliminar();
}

cargarProductosCarrito();
actualizarTotal();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}


function eliminarDelCarrito(e) {
    const idBoton = parseInt(e.currentTarget.id);

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1)

    cargarProductosCarrito();

    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));
    actualizarTotal();

}

botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
    actualizarTotal();
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;

}


botonComprar.addEventListener('click', comprarCarrito);

function comprarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoComprado.classList.remove("disabled");
    vaciarCarrito();
}
