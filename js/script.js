//COMPRAS

const bicicletas = [{
    producto: 1,
    marca: "vairo",
    color: "verde, cian, negro",
    rodado: "29",
    precio: "78000"
},
{
    producto: 2,
    marca: "trek",
    color: "azul",
    rodado: "29",
    precio: "65000"
},
{
    producto: 3,
    marca: "trek",
    color: "roja",
    rodado: "29",
    precio: "65000"
},
{
    producto: 4,
    marca: "vairo metro",
    color: "blanca",
    rodado: "26",
    precio: "83000"
},
{
    producto: 5,
    marca: "vairo",
    color: "gris, negro, verde",
    rodado: "26",
    precio: "45000"
},
{
    producto: 6,
    marca: "scott",
    color: "celeste",
    rodado: "29",
    precio: "77000"
},
{
    producto: 7,
    marca: "firebird",
    color: "naranja",
    rodado: "29",
    precio: "71000"
},
{
    producto: 8,
    marca: "firebird",
    color: "negra",
    rodado: "29",
    precio: "71000"
},
{
    producto: 9,
    marca: "scott",
    color: "amarilla",
    rodado: "29",
    precio: "77000"
},
{
    producto: 10,
    marca: "raleigh",
    color: "roja",
    rodado: "29",
    precio: "82000"
},
{
    producto: 11,
    marca: "scott",
    color: "negra",
    rodado: "29",
    precio: "77000"
},
{
    producto: 12,
    marca: "raleigh",
    color: "blanca",
    rodado: "26",
    precio: "41000"
},
{
    producto: 13,
    marca: "moove",
    color: "verde",
    rodado: "29",
    precio: "68000"
},
{
    producto: 14,
    marca: "raleigh",
    color: "azul",
    rodado: "29",
    precio: "82000"
},
{
    producto: 15,
    marca: "moove",
    color: "azul, negra",
    rodado: "29",
    precio: "68000"
},
{
    producto: 16,
    marca: "vairo",
    color: "negra, naranja",
    rodado: "29",
    precio: "78000"
},
{
    producto: 17,
    marca: "vairo",
    color: "negra, verde",
    rodado: "29",
    precio: "78000"
},
{
    producto: 18,
    marca: "raleigh",
    color: "negra, roja",
    rodado: "29",
    precio: "82000"
},
{
    producto: 19,
    marca: "firebird",
    color: "negra, verde",
    rodado: "29",
    precio: "71000"
},
{
    producto: 20,
    marca: "firebird",
    color: "roja",
    rodado: "26",
    precio: "38000"
},
{
    producto: 21,
    marca: "moove",
    color: "azul, negra",
    rodado: "29",
    precio: "68000"
}
]

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
            <li class="liBicicletas">Marca: ${bicicleta.marca} - Color: ${bicicleta.color} - Rodado: ${bicicleta.rodado} - Precio: ${bicicleta.precio}</li>
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

// // USUARIO 

// class Cliente {
//     constructor(nombre, darkMode){
//         this.nombre = nombre
//         this.darkMode = darkMode
//     }
//     setNombre(nuevoCliente){
//         if(nombre != ''){
//             this.nombre = nuevoCliente
//         }
//     }
//     setDarkMode(newMode){
//         this.darkMode = newMode
//     }
// }

// let objetoLocalStorage = JSON.parse(localStorage.getItem("cliente"))

// if (objetoLocalStorage){
//     let cliente = new Cliente(objetoLocalStorage.nombre, objetoLocalStorage.darkMode)

//     valoresClientes(cliente)
//     activeDarkMode(objetoLocalStorage.darkMode)
// } else{
//     let cliente = new Cliente('', false)
//     valoresClientes(cliente)
// }


// // MODO OSCURO

// document.getElementById("darkMode").addEventListener('change', activeDarkMode)
// document.getElementById("formGrabarDatos").addEventListener("submit", grabarDatos);
// document.getElementById("recargar").addEventListener('click', ()=>{
//     location.reload();
// })
// function activeDarkMode() {
//     if (document.getElementById("darkMode").checked) {
//         document.main.className = "oscuro"
//     } else {
//         document.main.removeAttribute('class');
//     }
// }

// function asignarValoresAlosInputs(cliente) {
//     if (cliente.nombre != '') {
//         document.getElementById("bienvenida").innerHTML = `Gracias por ingresar nuevamente a nuestra pagina ${cliente.nombre}, aqui puedes modificar tus datos`
//         document.getElementById("inputNombre").value = cliente.nombre
//         document.getElementById("darkMode").checked = cliente.modoOscuro
//     } else {
//         document.getElementById("bienvenida").innerHTML = `Hola, bienvenido/a a nuestra pagina de compra y ventas de bicicletas, nos gustaria saber tu nombre.`
//     }
// }



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

let objectoLocalStorage = JSON.parse(localStorage.getItem("usuario")) //busco en localStorage el objeto y hago un parse para que JS me devuelva un objeto

console.log("objectoLocalStorage ===>")
console.log(objectoLocalStorage)

if (objectoLocalStorage) { //Si Nombre tiene contenido, entonces lo muestro
    let usuario = new Usuario(objectoLocalStorage.nombre, objectoLocalStorage.modoOscuro)

    console.log("usuario ===>")
    console.log(usuario)

    asignarValoresAlosInputs(usuario)
    activarModoOscuro(objectoLocalStorage.modoOscuro)

} else {
    let usuario = new Usuario('', false)
    asignarValoresAlosInputs(usuario)
}

document.getElementById("modoOscuro").addEventListener('change', activarModoOscuro) //Ecucho cuando hay cambios en el check de modo oscuro
document.getElementById("formGrabarDatos").addEventListener("submit", grabarDatos);
document.getElementById("recargar").addEventListener('click', ()=>{
    location.reload(); //Con este metodo podemos recargar la pagina
})
function grabarDatos(e) {
    //Cancelamos el comportamiento del evento
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