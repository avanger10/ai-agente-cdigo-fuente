let fraseAleatoria = 0;

let frasesHola = [" §c§l¡Hola, amigo!", " §c§l¡Qué tal!", " §c§l¡Buenos días!", " §c§l¡Hola, ¿cómo estás?", " §c§l¡Hola, encantado de verte!", " §c§l¡Hola, qué gusto verte!", " §c§l¡Hola, espero que estés teniendo un buen día!", " §c§l¡Hola, siempre es un placer verte!", " §c§l¡Hola, qué alegría verte!", " §c§l¡Hola, espero que estés bien!"];
let frasesVen = [" §c§lYa voy", " §c§lDame un segundo", " §c§lEstoy aquí", " §c§l¿En qué te puedo ayudar?", " §c§l¿De esto se trata mi vida ahora? En fin, llegué", " §c§lEstoy en camino", " §c§lYa casi llego", " §c§lEstoy llegando", " §c§lNo tardaré", " §c§lEstoy yendo hacia allí"];
let frasesAdiós = [" §c§l¡Hasta luego!", " §c§l¡Adiós, amigo!", " §c§l¡Nos vemos!", " §c§l¡Hasta la próxima!", " §c§l¡Que tengas un buen día!", " §c§l¡Adiós, cuídate!", " §c§l¡Adiós, fue un placer verte!", " §c§l¡Adiós, hasta la próxima vez!", " §c§l¡Adiós, que tengas un buen día!", " §c§l¡Adiós, nos vemos pronto!"];
let frasesVete = [" §c§lNo tardo", " §c§lSoy Franshesco FIIIIAAAUUM", " §c§lAhora me ves, ahora no me ves", " §c§lNo voy a extrañarte, adiós", " §c§lHasta la vista, baby", " §c§lYa me voy", " §c§lEstoy en camino", " §c§lYa casi llego", " §c§lEstoy yendo hacia allí", " §c§lEstoy en camino"];

let frasesConstruye = [" §c§l¡Construyendo, amigo!", " §c§l¡En marcha!", " §c§l¡Construcción iniciada!", " §c§l¡Hora de construir!", " §c§l¡Allá vamos!", " §c§l¡Poniendo manos a la obra!", " §c§l¡Construcción en proceso!", " §c§l¡Vamos a darle forma!", " §c§l¡A trabajar!", " §c§l¡Construyendo con estilo!"];
let frasesExcava = [" §c§l¡Excavando, amigo!", " §c§l¡Abriendo camino!", " §c§l¡Haciendo espacio!", " §c§l¡Hora de excavar!", " §c§l¡Vamos a explorar!", " §c§l¡Cavando sin parar!", " §c§l¡Tierra va!", " §c§l¡A excavar se ha dicho!", " §c§l¡Por aquí abajo!", " §c§l¡Profundizando en la tierra!"];

player.onChat("Hola", function () {
    fraseAleatoria = Math.randomRange(0, frasesHola.length - 1);
    player.say(frasesHola[fraseAleatoria]);
});

player.onChat("Adiós", function () {
    fraseAleatoria = Math.randomRange(0, frasesAdiós.length - 1);
    player.say(frasesAdiós[fraseAleatoria]);
});

player.onChat("Ven", function () {
    fraseAleatoria = Math.randomRange(0, frasesVen.length - 1);
    player.say(frasesVen[fraseAleatoria]);
    let playerPosition = player.position();
    agent.teleport(playerPosition, NORTH); // Asume que quieres que el Agente mire hacia el norte
});

player.onChat("Vete", function () {
    fraseAleatoria = Math.randomRange(0, frasesVete.length - 1);
    player.say(frasesVete[fraseAleatoria]);
    let destino = positions.create(100, 64, 100); // Reemplaza 100, 64, 100 con las coordenadas a las que quieres que vaya el Agente
    agent.teleport(destino, NORTH); // Asume que quieres que el Agente mire hacia el norte
});
