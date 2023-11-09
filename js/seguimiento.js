let dataGuardada = localStorage.getItem("paquete")

let data = JSON.parse(dataGuardada)[0]

console.log(data)

let codigo_postal = data.codigo_postal
let direccion = data.direccion
let direccion_almacen = data.direccion_almacen
let peso = data.peso
let numero_seguimiento = data.id
let conductorNombre = data.nombre
let conductorApellido = data.apellido
let matricula = data.matricula

let tipoPedido = document.getElementById("tipo_pedido")

let txtDireccion = document.getElementById('direccion-txt')
let txtDireccionAlmacen = document.getElementById('direccion-txt-almacen')
let txtPeso = document.getElementById('peso-txt')
let txtNumeroSeguimiento = document.getElementById('nro-seguimiento')
let txtConductor = document.getElementById('conductor')
let txtCamion = document.getElementById("camion")

txtDireccion.innerHTML +=  " " + direccion
txtPeso.innerHTML += ": " + peso + " KG"
txtNumeroSeguimiento.innerHTML = numero_seguimiento
txtConductor.innerHTML += ": " + conductorNombre + " " + conductorApellido
txtCamion.innerHTML += ": "  + matricula

if(direccion != null){

    txtDireccionAlmacen.style.display = "none"

    txtDireccion.style.display = "block"
    txtCamion.style.display = "block"
    txtConductor.style.display = "block"

    console.log("entrega")
    tipoPedido.innerHTML = "Para entregar"

}

if(direccion == null){

    tipoPedido.style.display = "block"
    txtDireccionAlmacen.style.display = "block"

    tipoPedido.innerHTML = "Para recoger"
    txtDireccionAlmacen.innerHTML += " " + direccion_almacen 

    txtDireccion.style.display = "none"
    txtCamion.style.display = "none"
    txtConductor.style.display = "none"
    
}