// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Mensajes de Bienvenida al juego
//Funcion para poder manipular el texto del titulo y subtitulo
function asignartextoelemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
}
//Cambiar textos del titulo y subtitulo
asignartextoelemento ("h1", "¡Bienvenidos al juego del amigo secreto!")
asignartextoelemento ("h2", "Ingresen los nombres de los participantes")

//Aqui se almacenan los nombres de los amigos participantes
let listaDeAmigosParticipantes = []

//Accion del boton añadir
function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo");
    //Eliminar espacios
    let nombreCorrecto = nombreIngresado.value.trim();
    
    if (nombreCorrecto === "") {
        alert("Por favor, ingresa el nombre de un amigo");
        return;
    }
    
    // Agregar nombre a la lista
    listaDeAmigosParticipantes.push(nombreCorrecto);
    nombreIngresado.value = "";
    listavisualizada();
}

// Codigo para que la lista sea visualizada
function listavisualizada() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigosParticipantes.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaDeAmigosParticipantes[i];
        lista.appendChild(li);
    }
}

//Esta funcion es la que hara que el boton de "sortear" funcione
function sortearAmigo () {
    //Si el usuario solo pone un nombre, mandar un mensaje de alerta
    if(listaDeAmigosParticipantes.length < 2) {
        alert("Debe de haber al menos dos participantes");
        return;
    }

    //Generar un número aleatorio es necesario para que ese numero se le asigne a un nombre y poder 
    //crear la funcion de elegir un nombre random
    let numeroAleatorio = Math.floor(Math.random()* listaDeAmigosParticipantes.length);
    let amigoGanador = listaDeAmigosParticipantes[numeroAleatorio]

     const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <li class="resultado-ganador">
             ¡El amigo secreto es: ${amigoGanador}<!
        </li>
    `;
    
}



