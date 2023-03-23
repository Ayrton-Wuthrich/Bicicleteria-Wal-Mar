// FETCH

let bicicletas = [];

fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => {
        bicicletas = data;
        cargarProductos(bicicletas);
        const nuevaBicicleta = {
            id: 22,
            marca: "Volta",
            color: "blanca",
            rodado: "29",
            precio: "135000",
            imagen: "assets/Volta-blanca-29.jpg",
        };
        bicicletas.push(nuevaBicicleta);
    });

//COMPRAS

const contenedorProductos = document.querySelector("#contenedor-productos");

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#btn-form");
const catalogo = document.querySelector("#catalogo");

let botonesAgregar = document.querySelectorAll(".producto-agregar");

const numerito = document.querySelector("#numerito");

function cargarProductos() {
    contenedorProductos.innerHTML = "";

    const texto = formulario.value.toLowerCase();

    for (let bicicleta of bicicletas) {
        let nombre = bicicleta.marca.toLowerCase();
        let nombreColor = bicicleta.color.toLowerCase();
        let nombreRodado = bicicleta.rodado.toLowerCase();
        let nombrePrecio = bicicleta.precio.toLowerCase();

        if (
            nombre.indexOf(texto) !== -1 ||
            nombreColor.indexOf(texto) !== -1 ||
            nombreRodado.indexOf(texto) !== -1 ||
            nombrePrecio.indexOf(texto) !== -1
        ) {
            contenedorProductos.innerHTML += `<div class="producto">
                <img class="producto-imagen" src="${bicicleta.imagen}" alt="Imagen de ${bicicleta.marca}">
                <div class="producto-detalles">
                    <h3 class="producto-marca">${bicicleta.marca}</h3>
                    <p class="producto-color">${bicicleta.color}</p>
                    <p class="producto-rodado">${bicicleta.rodado}</p>
                    <p class="producto-precio">$${bicicleta.precio}</p>
                    <button class="producto-agregar" id=${bicicleta.id}>Agregar</button>     
                </div>
            </div>`;
        }
    }
    if (contenedorProductos.innerHTML === "") {
        contenedorProductos.innerHTML += `
            <li>No se encontro ningun producto...</li>
        `;
    }
    actualizarBotonesAgregar();
}

const ordenar = (orden) => {
    if (orden === "asc") {
        bicicletas.sort((a, b) => a.precio - b.precio);
    } else if (orden === "desc") {
        bicicletas.sort((a, b) => b.precio - a.precio);
    }
    cargarProductos();
};

const botonOrden = document.querySelector("#boton-orden");
let ordenActual = "asc";

botonOrden.addEventListener("change", () => {
    if (ordenActual === "asc") {
        ordenar("desc");
        ordenActual = "desc";
    } else {
        ordenar("asc");
        ordenActual = "asc";
    }
});

boton.addEventListener("click", cargarProductos);
formulario.addEventListener("keyup", cargarProductos);

let guardarBicicletas = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

guardarBicicletas("listaBicicletas", JSON.stringify(bicicletas));

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("producto-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    Toastify({
        text: "Bicicleta agregada al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #013f61, #5892b0)",
            borderRadius: "1rem",
        },
        onClick: function () {},
    }).showToast();

    const idBoton = parseInt(e.currentTarget.id);
    const productosAgregados = bicicletas.find(
        (producto) => producto.id === idBoton
    );

    if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(
            (producto) => producto.id === idBoton
        );
        productosEnCarrito[index].cantidad++;
    } else {
        productosAgregados.cantidad = 1;
        productosEnCarrito.push(productosAgregados);
    }

    actualizarNumerito();

    localStorage.setItem(
        "producto-en-carrito",
        JSON.stringify(productosEnCarrito)
    );
}

function actualizarNumerito() {
    let numeroCarro = productosEnCarrito.reduce(
        (acc, producto) => acc + producto.cantidad,
        0
    );
    numerito.innerText = numeroCarro;
}

// DESCUENTO DE LOS JUEVES

setTimeout(() => {
    Swal.fire({
        title: "Todos los jueves tenes un 10% en nuestros productos con tarjetas de credito. <br>¿Vas a dejar ir esta oportunidad?",
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
    });
}, 10000);

// PRESENTACION HEADER

let inicio = document.querySelector(".inicio");
let logo = document.querySelector(".logo-header");
let logoTitulo = document.querySelectorAll(".logoTitulo");
let imgHeader = document.querySelector(".img-header");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        logoTitulo.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("activeHeader");
            }, (idx + 1) * 400);
        });
        setTimeout(() => {
            logoTitulo.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove("activeHeader");
                    span.classList.add("fade");
                }, (idx + 1) * 50);
            });
        }, 2000);
        setTimeout(() => {
            inicio.style.top = "-100vh";
        }, 2800);
    });
});
