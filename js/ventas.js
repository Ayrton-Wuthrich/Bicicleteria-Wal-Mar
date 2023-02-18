function recibir(){
    let marcaBici = document.getElementById("marcaBici").value || "Dato no ingresado";
    let colorBici = document.getElementById("colorBici").value || "Dato no ingresado";
    let rodadoBici = document.getElementById("rodadoBici").value;
    rodadoBici = parseInt(rodadoBici)
    let precioBici = document.getElementById("precioBici").value;
    precioBici = parseInt(precioBici)

    let precioIva = precioBici * 0.21;
    let precioMantenimiento = precioBici * 0.05;
    let precioTotal = precioBici - precioIva - precioMantenimiento;

    let texto = document.createElement('h3');

    texto.innerHTML = "La marca de la bicicleta es: "+ marcaBici + "<br> El color de su bicicleta es: "+colorBici + "<br> El rodado ingresado es: "+ rodadoBici+ "<br> El precio de venta ingresado es: $" + precioBici

    texto.innerHTML += "<br> El precio del IVA de la bicicleta es de: $"+precioIva + "<br> El costo de envio mas mantenimiento de la bicicleta es de : $" +precioMantenimiento + "<br> El precio de compra de tu bicicleta es de : $"+precioTotal

    document.getElementById('divVenta').appendChild(texto)

}