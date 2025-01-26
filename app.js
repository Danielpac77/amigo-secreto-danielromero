// variables a utilizar 

let amigos = [];
let contador = 0;
let nombreParticipante = document.getElementById('amigo');




// funciones a utilizar

function tomarDatos () {

/* Esta funcion valida los datos y sj todo es correcto 
a las funciones que realizan el registro y limpian los datos
y llevar un contador de los nombres validos */


let nombre = nombreParticipante.value.trim();

if (nombre == ""){
    alert("Por favor ingrese un nombre valido")
    return;
}

if (nombre.length > 50) {
    alert("El nombre no puede tener más de 20 caracteres");
    limpiarDatos();
    return;
}

amigos.push(nombre);

contador++;
console.log(`Número de participantes: ${contador}`);

listaDatos();

limpiarDatos();

}


function listaDatos () {

/* Esta funcion se encarga de tomar los datos que se esciben en el 
HTML y lo traspasa a la lista que saldra abajo de donde se escriben
los mombres */    


let lista = document.getElementById('listaAmigos');
lista.innerHTML = "";

amigos.forEach((amigo) => { 
    let listado = document.createElement('li'); 
    listado.textContent = amigo; 
    lista.appendChild(listado); 
});


}


function limpiarDatos () {

/* Esta funcion limpia los datos para ingresar el nuevo participante,
se coloco como funcion por si en un futuro se desea que realice mas acciones 
ademas */    

nombreParticipante.value = "";
nombreParticipante.focus();
  
}


function sorteo () {

    // Esta funcion lleva a cabo el sorteo e indica cuando no hay al menos 2 perosnas para realizarlo

    if (amigos.length < 2) {
        alert("No hay suficientes participantes para realizar el sorteo, por favor ingresa al menos 2 nombres")
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[numeroAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nombreGanador}</li>`;

}

function sorteoNuevo () {

    // Por medio de un boton añadido permite hacer un nuevo sorteo sin tener que recargar la pagina

    location.reload();
    window.scrollTo(0,0);   
}





