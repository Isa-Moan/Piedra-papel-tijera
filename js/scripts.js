let jugador1Resultado = "";
let jugador2Resultado = "";
let maquinaResultado = "";

// Cambia el modo de juego entre Jugador vs Jugador o Jugador vs Máquina
function cambiarModo() {
    const modoJuego = document.getElementById("modoJuego").value;

    if (modoJuego === "jugador") {
        document.getElementById("jugadorVsJugador").style.display = "block";
        document.getElementById("jugadorVsMaquina").style.display = "none";
    } else {
        document.getElementById("jugadorVsJugador").style.display = "none";
        document.getElementById("jugadorVsMaquina").style.display = "block";
    }

    // Reiniciar el estado del juego
    document.getElementById("resultadoFinal").innerText = "";
    document.getElementById("resultadoJugador1").innerText = "";
    document.getElementById("resultadoJugador2").innerText = "";
    document.getElementById("resultadoMaquina").innerText = "";
    jugador1Resultado = "";
    jugador2Resultado = "";
    maquinaResultado = "";
}

// Función para obtener resultado aleatorio (piedra, papel o tijera)
function obtenerResultadoAleatorio() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function jugarJugador1() {
    jugador1Resultado = obtenerResultadoAleatorio();
    document.getElementById("resultadoJugador1").innerText = `Jugador 1 eligió: ${jugador1Resultado}`;
    document.getElementById("btnJugador1").disabled = true;
    verificarGanador();
}

function jugarJugador2() {
    jugador2Resultado = obtenerResultadoAleatorio();
    document.getElementById("resultadoJugador2").innerText = `Jugador 2 eligió: ${jugador2Resultado}`;
    document.getElementById("btnJugador2").disabled = true;
    verificarGanador();
}

function verificarGanador() {
    if (jugador1Resultado !== "" && jugador2Resultado !== "") {
        let resultado = "";
        
        if (jugador1Resultado === jugador2Resultado) {
            resultado = "Empate";
        } else if (
            (jugador1Resultado === "piedra" && jugador2Resultado === "tijera") ||
            (jugador1Resultado === "papel" && jugador2Resultado === "piedra") ||
            (jugador1Resultado === "tijera" && jugador2Resultado === "papel")
        ) {
            resultado = "¡Jugador 1 gana!";
        } else {
            resultado = "¡Jugador 2 gana!";
        }

        document.getElementById("resultadoFinal").innerText = resultado;
    }
}

// Función para reiniciar el juego "Jugador vs Jugador"
function reiniciarJuegoJugadorVsJugador() {
    jugador1Resultado = "";
    jugador2Resultado = "";
    
    document.getElementById("resultadoJugador1").innerText = "";
    document.getElementById("resultadoJugador2").innerText = "";
    document.getElementById("resultadoFinal").innerText = "";

    // Habilitar botones de nuevo
    document.getElementById("btnJugador1").disabled = false;
    document.getElementById("btnJugador2").disabled = false;
}

function jugarContraMaquina() {
    // Reiniciamos los textos para poder jugar múltiples veces
    document.getElementById("resultadoFinal").innerText = "";
    document.getElementById("resultadoJugador1").innerText = "";
    document.getElementById("resultadoMaquina").innerText = "";

    // Obtenemos los resultados del jugador 1 y la máquina
    jugador1Resultado = obtenerResultadoAleatorio();
    maquinaResultado = obtenerResultadoAleatorio();

    // Mostramos los resultados
    document.getElementById("resultadoJugador1").innerText = `Jugador 1 eligió: ${jugador1Resultado}`;
    document.getElementById("resultadoMaquina").innerText = `La máquina eligió: ${maquinaResultado}`;

    // Verificamos quién gana
    verificarGanadorContraMaquina();

    // Permitimos volver a jugar deshabilitando los botones
    document.getElementById("btnMaquina").disabled = false;
}

function verificarGanadorContraMaquina() {
    if (jugador1Resultado !== "" && maquinaResultado !== "") {
        let resultado = "";
        
        if (jugador1Resultado === maquinaResultado) {
            resultado = "Empate";
        } else if (
            (jugador1Resultado === "piedra" && maquinaResultado === "tijera") ||
            (jugador1Resultado === "papel" && maquinaResultado === "piedra") ||
            (jugador1Resultado === "tijera" && maquinaResultado === "papel")
        ) {
            resultado = "¡Jugador 1 gana!";
        } else {
            resultado = "¡La máquina gana!";
        }

        document.getElementById("resultadoFinal").innerText = resultado;
    }
}
