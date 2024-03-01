function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function jugarCachipun(vecesJugar) {
    for (let i = 0; i < vecesJugar; i++) {
        const jugadaUsuario = obtenerJugadaUsuario();
        const jugadaComputadora = obtenerJugadaComputadora();

        console.log(`Tu jugada: ${jugadaUsuario}`);
        console.log(`Computadora eligió: ${jugadaComputadora}`);

        const resultado = determinarGanador(jugadaUsuario, jugadaComputadora);
        console.log(`Resultado: ${resultado}`);
    }
}

function obtenerJugadaUsuario() {
    const opciones = ["piedra", "papel", "tijera"];
    let opcionUsuario;

    while (true) {
        opcionUsuario = prompt("Elige entre (Piedra, Papel, Tijera): ");

        if (opciones.includes(opcionUsuario.toLowerCase())) {
            break;
        } else {
            console.log("Jugada no válida. Inténtalo de nuevo.");
        }
    }

    return opcionUsuario.toLowerCase();
}

function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = getRandomInt(opciones.length);
    return opciones[indiceAleatorio];
}

function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
        return "Empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
        (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
    ) {
        return "¡Ganaste, eres genial!";
    } else {
        return "Perdiste, pero puedes intentalo otra vez";
    }
}


const vecesJugar = prompt("¿Cuántas veces quieres jugar?");
jugarCachipun(vecesJugar);










