// Texto base para la matriz evolutiva
const textoBase = `
  Estamos ubicados en Cerezos 19, Nezahualcóyotl. Vendemos arreglos, regalos y diferentes tipos de plantas.
  Puedes encontrar plantas como suculentas, cactus y plantas de sombra.
  Para cuidar tus plantas, riégalas moderadamente, dales buena luz y limpia sus hojas.
  Regalos personalizados como terrarios y kits de jardinería están disponibles.
  Centros de mesa únicos para eventos como bodas, cumpleaños y XV años.
    Contamos con servicio de envío a domicilio en la CDMX y área metropolitana.
    Hola, buenas tardes. ¿En qué puedo ayudarte?.
    Hola que tal, ¿en qué puedo ayudarte hoy?.
    Buenos dias, ¿en qué puedo ayudarte?.
    Buenas noches, ¿en qué puedo ayudarte?.
    El horario de atención es de lunes a sábado de 12:00 a 6:00 p.m
    Contamos con servicio de envío a domicilio.
    Nochebuenas, hortencias, begonias y más solo en tu tienda de confianza 
    Los centros de mesa con plantas son una tendencia
     elegante y sostenible que puede añadir un toque natural y fresco a cualquier celebración. Para bodas, las suculentas como Echeveria elegans y Crassula ovata son perfectas por su durabilidad y estética minimalista, mientras que las orquídeas mini en macetas transparentes ofrecen una opción delicada. En cumpleaños, las plantas con personalidad colorida como Kalanchoe y Anturios brindan vibrantes floraciones, y los terrarios individuales pueden convertirse en un regalo especial. Para graduaciones, plantas que simbolizan crecimiento como el Bambú de la suerte o el Ficus benjamina representan desarrollo y éxito.
Las plantas se pueden clasificar según su nivel
 de cuidado: las de cuidado mínimo como suculentas y 
 cactus miniatura son ideales para eventos, mientras que las de cuidado básico como Pothos y Sansevierias requieren atención simple. Las de cuidado moderado como Orquídeas y Anturios demandan un poco más de dedicación.
    Un detalle extraordinario es que estos centros de mesa pueden convertirse en recuerdos únicos que los invitados pueden cultivar posteriormente, añadiendo un valor sentimental al evento.
Para espacios interiores con mucha luz natural, recomendamos plantas como el Ficus Lyrata que genera un impacto decorativo espectacular, o la Monstera Deliciosa que no solo se adapta perfectamente sino que crea un ambiente tropical inmediato. Si tu espacio tiene poca iluminación, nuestras aliadas serán las Sansevierias, Pothos y Zamioculcas, plantas increíblemente resistentes que prosperan en condiciones de sombra.
En espacios reducidos como apartamentos pequeños o cubículos de oficina, apostamos por 
terrarios miniatura y plantas colgantes como los Pothos o Senecio que aprovechan la verticalidad sin ocupar espacio en el suelo. Para balcones y terrazas con exposición directa al sol, seleccionamos cactus, suculentas gruesas y plantas aromáticas mediterráneas que adoran recibir luz intensa.
  No solo vendemos plantas, ofrecemos asesoría personalizada. Conocemos los microclimas de nuestra localidad,
   sabemos cómo afecta la humedad, el calor y la luz en cada tipo de vivienda. Te acompañamos no solo en la compra, sino en el cuidado de tu nueva planta. Cada cliente se va con instrucciones claras y precisas para que su planta prospere.
  Realizamos entregas a domicilio en toda Nezahualcóyotl y áreas cercanas. Si no puedes venir a la tienda, nosotros 
  llegamos hasta tu puerta con tu nueva planta compañera. También tenemos un servicio de consulta rápida por WhatsApp para resolver dudas de cuidado y mantenimiento.
Nuestro horario es de lunes a sábado de 12:00 a 6:00 p.m. Estamos ubicados en Cerezos 19, frente al parque principal. 
Puedes encontrarnos por Facebook como Kedros Plantas y suculentas, donde compartimos consejos, promociones y el mundo verde que nos apasiona.
    Las plantas se pueden clasificar según su nivel
 de cuidado: las de cuidado mínimo como suculentas y 
 cactus miniatura son ideales para eventos, mientras que las de cuidado básico como Pothos y Sansevierias requieren atención simple. Las de cuidado moderado como Orquídeas y Anturios demandan un poco más de dedicación.
    Un detalle extraordinario es que estos centros de mesa pueden convertirse en recuerdos únicos que los invitados pueden cultivar posteriormente, añadiendo un valor sentimental al evento.
Para espacios interiores con mucha luz natural, recomendamos plantas como el Ficus Lyrata que genera un impacto decorativo espectacular, o la Monstera Deliciosa que no solo se adapta perfectamente sino que crea un ambiente tropical inmediato. Si tu espacio tiene poca iluminación, nuestras aliadas serán las Sansevierias, Pothos y Zamioculcas, plantas increíblemente resistentes que prosperan en condiciones de sombra.
En espacios reducidos como apartamentos pequeños o cubículos de oficina, apostamos por 
terrarios miniatura y plantas colgantes como los Pothos o Senecio que aprovechan la verticalidad sin ocupar espacio en el suelo. Para balcones y terrazas con exposición directa al sol, seleccionamos cactus, suculentas gruesas y plantas aromáticas mediterráneas que adoran recibir luz intensa.
  No solo vendemos plantas, ofrecemos asesoría personalizada. Conocemos los microclimas de nuestra localidad,
   sabemos cómo afecta la humedad, el calor y la luz en cada tipo de vivienda. Te acompañamos no solo en la compra, sino en el cuidado de tu nueva planta. Cada cliente se va con instrucciones claras y precisas para que su planta prospere.
  Realizamos entregas a domicilio en toda Nezahualcóyotl y áreas cercanas. Si no puedes venir a la tienda, nosotros 
  llegamos hasta tu puerta con tu nueva planta compañera. También tenemos un servicio de consulta rápida por WhatsApp para resolver dudas de cuidado y mantenimiento.
Nuestro horario es de lunes a sábado de 12:00 a 6:00 p.m. Estamos ubicados en Cerezos 19, frente al parque principal. 
Puedes encontrarnos por Facebook como Kedros Plantas y suculentas, donde compartimos consejos, promociones y el mundo verde que nos apasiona.
    La hortensia es de resolana
Contamos con sustrato para anturio, así mismo, contamos con macetas de barro, plástico y de cerámica.
    si, Contamos con servicio de envío a domicilio
    si, Contamos con tierra preparada para todo tipo de planta
    si, Contamos con servicio de envío a domicilio

`;



// Construcción de la matriz evolutiva
function construirMatrizEvolutiva(texto) {
  const palabras = texto.toLowerCase().replace(/[.,]/g, '').split(/\s+/);
  const matriz = {};

  for (let i = 0; i < palabras.length - 1; i++) {
    const palabraActual = palabras[i];
    const palabraSiguiente = palabras[i + 1];

    if (!matriz[palabraActual]) {
      matriz[palabraActual] = {};
    }

    matriz[palabraActual][palabraSiguiente] = (matriz[palabraActual][palabraSiguiente] || 0) + 1;
  }

  // Convertir a probabilidades
  for (const palabra in matriz) {
    const total = Object.values(matriz[palabra]).reduce((sum, count) => sum + count, 0);
    for (const siguiente in matriz[palabra]) {
      matriz[palabra][siguiente] /= total;
    }
  }

  return matriz;
}

// Predicción de la próxima palabra
function predecirPalabra(matriz, palabraActual) {
  const transiciones = matriz[palabraActual];
  if (!transiciones) return null;

  const aleatorio = Math.random();
  let acumulado = 0;

  for (const [palabra, probabilidad] of Object.entries(transiciones)) {
    acumulado += probabilidad;
    if (aleatorio <= acumulado) {
      return palabra;
    }
  }
  return null;
}

// Generar respuesta basada en la matriz
function generarRespuesta(pregunta, matriz, limite = 20) {
  const palabrasPregunta = pregunta.toLowerCase().split(' ');
  let palabraActual = palabrasPregunta[palabrasPregunta.length - 1];

  if (!matriz[palabraActual]) {
    return "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
  }

  let respuesta = [];
  for (let i = 0; i < limite; i++) {
    palabraActual = predecirPalabra(matriz, palabraActual);
    if (!palabraActual) break;
    respuesta.push(palabraActual);
  }

  return respuesta.length ? respuesta.join(' ') : "No tengo información suficiente para responder.";
}

// Lista de frases aleatorias para respuestas menos precisas
const frasesAleatorias = [
  "Recuerda que las plantas necesitan luz y amor. 🌱",
  "¡Los cactus son una excelente opción para principiantes!",
  "Te recomiendo explorar nuestras opciones de suculentas y cactus.",
  "No olvides revisar el nivel de humedad de tus macetas.",
  "Estamos para ayudarte con cualquier duda sobre plantas.",
  "¿Sabías que los terrarios son tendencia para regalar? 🌵",
  "Las plantas colgantes son perfectas para espacios pequeños.",
  "Consulta nuestro horario para visitarnos en persona.",
  "Las suculentas se riegan cada dos semanas, aproximadamente.",
  "Prueba con un Ficus Lyrata, ¡es ideal para interiores iluminados!",
  "Revisamos nuestras promociones en redes sociales regularmente. 😊",
  "Si necesitas tierra preparada, nosotros la tenemos.",
  "Estamos ubicados en Cerezos 19",
  "Contamos con servicio de envío a domicilio",
  "Tenemos un horario de 12pm a 6pm de lunes a sábado",
  "¿En qué más puedo ayudarte hoy?",
  "¡Gracias por tu pregunta! 🌿",
];

// Generar respuesta con precisión ajustada
function generarRespuestaConAjuste(pregunta, matriz, limite = 20) {
  const probabilidadExactitud = 0.8; // 80% de responder según la matriz
  const esRespuestaPrecisa = Math.random() < probabilidadExactitud;

  if (esRespuestaPrecisa) {
    // Responder según la matriz evolutiva
    return generarRespuesta(pregunta, matriz, limite);
  } else {
    // Responder con una frase aleatoria
    const indiceAleatorio = Math.floor(Math.random() * frasesAleatorias.length);
    return frasesAleatorias[indiceAleatorio];
  }
}

// Enviar preguntas y generar respuestas
function sendCustomQuestion() {
  const input = document.getElementById('questionInput');
  const pregunta = input.value.trim();
  if (pregunta) {
    addMessage(pregunta, true);

    setTimeout(() => {
      const limiteDinamico = 15; 
      const respuesta = generarRespuestaConAjuste(pregunta, matrizEvolutiva, limiteDinamico);
      addMessage(respuesta, false);
    }, 500);

    input.value = '';
  }
}

// Mostrar mensajes en el chat
function addMessage(text, isUser) {
  const chatContainer = document.getElementById('chatContainer');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.textContent = text;
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Inicializar chatbot
window.onload = function () {
  addMessage("¡Hola! Soy Leafi, tu asistente virtual de plantas. ¿En qué puedo ayudarte hoy? 🌱", false);
};

// Construir matriz evolutiva con el texto base
const matrizEvolutiva = construirMatrizEvolutiva(textoBase);
