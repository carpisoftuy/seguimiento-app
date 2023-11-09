let es = document.getElementById("es")
let en = document.getElementById("en")

//navbar
let txtInicio = document.getElementById("inicio")
let txtEnvio = document.getElementById("envios")
let txtContacto = document.getElementById("contacto")
let txtIdioma = document.getElementById("idioma")
let txtTema = document.getElementById("tema")
let txtContactenos = document.getElementById("contactenos")

let txtEstado = document.getElementById("estado")
let txtDetalles = document.getElementById("detalles")
let txtDireccion2 = document.getElementById("direccion-txt")
let txtPeso2 = document.getElementById("peso-txt")
let txtNroSeguimiento = document.getElementById("nro-seguimiento-txt")




function traducirAIngles(){

    //navbar
    txtInicio.innerHTML = "Home"
    txtEnvio.innerHTML = "Shipments"
    txtContacto.innerHTML = "Contact"
    txtIdioma.innerHTML = "Language"
    txtTema.innerHTML = "Theme"
    txtContactenos.innerHTML = "Contact us"

    txtEstado.innerHTML = "Order status"
    txtDetalles.innerHTML = "Package details"
    txtDireccion2.innerHTML = "Address: " + direccion
    txtDireccionAlmacen.innerHTML = "Address: " + direccion_almacen
    txtPeso2.innerHTML = "Weight: " + peso + "KG" 
    txtNroSeguimiento.innerHTML = "Tracking number" 
    txtConductor.innerHTML = "Driver: " + conductorNombre + " " + conductorApellido
    txtCamion.innerHTML = "Truck: " + matricula

}

function traducirAEspanol(){

    //navbar
    txtInicio.innerHTML = "Inicio"
    txtEnvio.innerHTML = "Envios"
    txtContacto.innerHTML = "Contacto"
    txtIdioma.innerHTML = "Idioma"
    txtTema.innerHTML = "Tema"
    txtContactenos.innerHTML = "Contactenos"
    

    txtEstado.innerHTML = "Estado del pedido"
    txtDetalles.innerHTML = "Detalles del paquete"
    txtDireccion2.innerHTML = "Direccion: " + direccion
    txtPeso2.innerHTML = "Peso: " + peso + "KG"
    txtNroSeguimiento.innerHTML = "Número de seguimiento"
    txtConductor.innerHTML = "Conductor: " + conductorNombre + " " + conductorApellido
    txtCamion.innerHTML = "Camión: " + matricula

}

es.addEventListener("click", function(){
    localStorage.setItem("idioma", "es")
    traducirAEspanol()
})

en.addEventListener("click", function(){
    localStorage.setItem("idioma", "en")
    traducirAIngles()
})

idioma = localStorage.getItem("idioma")

if(idioma == "es"){
    traducirAEspanol()
}

if(idioma == "en"){
    traducirAIngles()
}