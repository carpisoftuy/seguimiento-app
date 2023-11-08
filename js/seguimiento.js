let dataGuardada = localStorage.getItem("paquete")

let data = JSON.parse(dataGuardada)[0]

console.log(data)

let codigo_postal = data.codigo_postal
let direccion = data.direccion
let peso = data.peso
let numero_seguimiento = data.id
let conductorNombre = data.nombre
let conductorApellido = data.apellido
let matricula = data.matricula

let txtDireccion = document.getElementById('direccion-txt')
let txtPeso = document.getElementById('peso-txt')
let txtNumeroSeguimiento = document.getElementById('nro-seguimiento')
let txtConductor = document.getElementById('conductor')
let txtCamion = document.getElementById("camion")

txtDireccion.innerHTML +=  " " + direccion
txtPeso.innerHTML += ": " + peso + " KG"
txtNumeroSeguimiento.innerHTML = numero_seguimiento
txtConductor.innerHTML += ": " + conductorNombre + " " + conductorApellido
txtCamion.innerHTML += ": "  + matricula