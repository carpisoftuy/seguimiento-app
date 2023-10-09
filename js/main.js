const API_URL = 'http://127.0.0.1:8000/api/v1/paquetes/paraEntregar/detalle/';


let btn = document.getElementById('btn-rastreo') 
let idRastreo = document.getElementById('codigo')

btn.addEventListener("click", function(e){

    e.preventDefault();
    let paqueteId = idRastreo.value 

    fetch(API_URL+paqueteId)

    .then(response => {
        if (!response.ok) {
        throw new Error('La solicitud no se pudo completar.');
        }
        return response.json();
    })

    .then(data => {   
        console.log(data);
        localStorage.setItem("paquete", JSON.stringify(data))
    })

    .catch(error => {
        console.error('Error al consultar la API:', error);
    });


})