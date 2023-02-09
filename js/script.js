//COMPRAS

const bicicletas = [{
    producto: 1,
    marca: "Vairo",
    color: "verde, cian, negro",
    rodado: "29",
    precio: "$78000",
    imagen : "assets/bicicleta1.png"
},
{
    producto: 2,
    marca: "Trek",
    color: "azul",
    rodado: "29",
    precio: "$65000",
    imagen : "assets/Trek-azul-29.webp"
},
{
    producto: 3,
    marca: "Trek",
    color: "roja",
    rodado: "29",
    precio: "$65000",
    imagen : "assets/Trek-roja-29.webp"
},
{
    producto: 4,
    marca: "Vairo/metro",
    color: "blanca",
    rodado: "26",
    precio: "$83000",
    imagen : "assets/Vairo-Metro_Blanca-26.webp"
},
{
    producto: 5,
    marca: "Vairo",
    color: "gris, negro, verde",
    rodado: "26",
    precio: "$45000",
    imagen : "assets/Vairo-gris-negro-verde-26.png"
},
{
    producto: 6,
    marca: "Scott",
    color: "celeste",
    rodado: "29",
    precio: "$77000",
    imagen : "assets/Scott-celeste-29.png"
},
{
    producto: 7,
    marca: "FireBird",
    color: "naranja",
    rodado: "29",
    precio: "$71000",
    imagen : "assets/FireBird_naranja-29.jpg"
},
{
    producto: 8,
    marca: "FireBird",
    color: "negra",
    rodado: "29",
    precio: "$71000",
    imagen : "assets/FireBird_negra-29.jpg"
},
{
    producto: 9,
    marca: "Scott",
    color: "amarilla",
    rodado: "29",
    precio: "$77000",
    imagen : "assets/Scott-amarilla-29.png"
},
{
    producto: 10,
    marca: "Raleigh",
    color: "roja",
    rodado: "29",
    precio: "$82000",
    imagen : "assets/Raleigh-roja-29.jpg"
},
{
    producto: 11,
    marca: "Scott",
    color: "negra",
    rodado: "29",
    precio: "$77000",
    imagen : "assets/Scott-negra-29.png"
},
{
    producto: 12,
    marca: "Raleigh",
    color: "blanca",
    rodado: "26",
    precio: "$41000",
    imagen : "assets/Raleigh-blanca-26.webp"
},
{
    producto: 13,
    marca: "Moove",
    color: "verde",
    rodado: "29",
    precio: "$68000",
    imagen : "assets/Moove-verde-29.jpg"
},
{
    producto: 14,
    marca: "Raleigh",
    color: "azul",
    rodado: "29",
    precio: "$82000",
    imagen : "assets/Raleigh-azul-29.jpg"
},
{
    producto: 15,
    marca: "Moove",
    color: "azul, negra",
    rodado: "29",
    precio: "$68000",
    imagen : "assets/Moove-azul-negra-29.jpg"
},
{
    producto: 16,
    marca: "Vairo",
    color: "negra, naranja",
    rodado: "29",
    precio: "$78000",
    imagen : "assets/Vairo-negro-naranja-29.webp"
},
{
    producto: 17,
    marca: "Vairo",
    color: "negra, verde",
    rodado: "29",
    precio: "$78000",
    imagen : "assets/Vairo-negro-verde-29.webp"
},
{
    producto: 18,
    marca: "Raleigh",
    color: "negra, roja",
    rodado: "29",
    precio: "$82000",
    imagen : "assets/Raleigh-negra-roja-29.jpg"
},
{
    producto: 19,
    marca: "FireBird",
    color: "negra, verde",
    rodado: "29",
    precio: "$71000",
    imagen : "assets/FireBird_negro-verde-29.jpg"
},
{
    producto: 20,
    marca: "FireBird",
    color: "roja",
    rodado: "26",
    precio: "$38000",
    imagen : "assets/FireBird_roja-26.jpg"
},
{
    producto: 21,
    marca: "Moove",
    color: "azul, negra",
    rodado: "29",
    precio: "$68000",
    imagen : "assets/Moove-azul-negra-29.jpg"
}
]

const nuevaBicicleta = {
    producto: 22,
    marca: "Volta",
    color: "blanca",
    rodado: "29",
    precio: "$135000",
    imagen: "assets/Volta-blanca-29.jpg"
}

bicicletas.push(nuevaBicicleta);

const formulario = document.querySelector("#formulario")
const boton = document.querySelector("#btn-form")
const catalogo = document.querySelector("#catalogo")




const filtrar = () => {
    catalogo.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for(let bicicleta of bicicletas){
        let nombre = bicicleta.marca.toLowerCase();
        let nombreColor = bicicleta.color.toLowerCase();
        let nombreRodado = bicicleta.rodado.toLowerCase();
        let nombrePrecio = bicicleta.precio.toLowerCase();

        if(nombre.indexOf(texto) !== -1 || nombreColor.indexOf(texto) !== -1 || nombreRodado.indexOf(texto) !== -1 || nombrePrecio.indexOf(texto) !== -1){
            catalogo.innerHTML += `
            <li class="liBicicletas card">
                <img src="${bicicleta.imagen}" alt="Imagen de ${bicicleta.marca}">
                <div class="descripcion">
                    <p>Marca: ${bicicleta.marca}</p>
                    <p>Color: ${bicicleta.color}</p>
                    <p>Rodado: ${bicicleta.rodado}</p>
                    <p>Precio: ${bicicleta.precio}</p>
                </div>
            </li>
            `
        }
    }
    if(catalogo.innerHTML === ''){
        catalogo.innerHTML += `
            <li>No se encontro ningun producto...</li>
        `
    }
}

boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup", filtrar)

filtrar();

const guardarBicicletas = (clave, valor) => {localStorage.setItem(clave,valor)}

guardarBicicletas("listaBicicletas", JSON.stringify(bicicletas))


// VENTAS


function recibir(){
    let marcaBici = document.getElementById("marcaBici").value;
    let colorBici = document.getElementById("colorBici").value;
    let rodadoBici = document.getElementById("rodadoBici").value;
    rodadoBici = parseInt(rodadoBici)
    let precioBici = document.getElementById("precioBici").value;
    precioBici = parseInt(precioBici)

    let precioIva = precioBici * 0.21;
    let precioMantenimiento = precioBici * 0.05;
    let precioTotal = precioIva + precioBici + precioMantenimiento;

    document.write("La marca de la bicicleta es: "+ marcaBici + "<br> El color de su bicicleta es: "+colorBici + "<br> El rodado ingresado es: "+ rodadoBici+ "<br> El precio de venta ingresado es: $" + precioBici)
    document.write("<br> El precio del IVA de la bicicleta es de: $"+precioIva + "<br> El costo de envio mas mantenimiento de la bicicleta es de : $" +precioMantenimiento + "<br> El total de todo es de : $"+precioTotal)
}


class Usuario {
    constructor(nombre, modoOscuro) {
        this.nombre = nombre
        this.modoOscuro = modoOscuro
    }
    setNombre(nuevoNombre) {
        if (nombre != '') {
            this.nombre = nuevoNombre
        }
    }
    setModoOscuro(nuevoModo) {
        this.modoOscuro = nuevoModo
    }
}

let objectoLocalStorage = JSON.parse(localStorage.getItem("usuario"))

console.log("objectoLocalStorage ===>")
console.log(objectoLocalStorage)

if (objectoLocalStorage) {
    let usuario = new Usuario(objectoLocalStorage.nombre, objectoLocalStorage.modoOscuro)

    console.log("usuario ===>")
    console.log(usuario)

    asignarValoresAlosInputs(usuario)
    activarModoOscuro(objectoLocalStorage.modoOscuro)

} else {
    let usuario = new Usuario('', false)
    asignarValoresAlosInputs(usuario)
}

document.getElementById("modoOscuro").addEventListener('change', activarModoOscuro)
document.getElementById("formGrabarDatos").addEventListener("submit", grabarDatos);
document.getElementById("recargar").addEventListener('click', ()=>{
    location.reload();
})
function grabarDatos(e) {
    e.preventDefault();
    let valorInputNombre = document.getElementById("inputNombre").value
    let valorInputModoOscuro = document.getElementById("modoOscuro").checked
    localStorage.setItem("usuario", JSON.stringify({
        nombre: valorInputNombre,
        modoOscuro: valorInputModoOscuro
    }))
}



function activarModoOscuro() {
    if (document.getElementById("modoOscuro").checked) {
        document.body.className = "oscuro"
    } else {
        document.body.removeAttribute('class');
    }
}

function asignarValoresAlosInputs(usuario) {
    if (usuario.nombre != '') {
        document.getElementById("bienvenida").innerHTML = `Hola de nuevo ${usuario.nombre}, aqui puedes modificar tus datos`
        document.getElementById("inputNombre").value = usuario.nombre
        document.getElementById("modoOscuro").checked = usuario.modoOscuro
    } else {
        document.getElementById("bienvenida").innerHTML = `Hola, por favor dinos tus datos y preferencias de experiencia`
    }
}