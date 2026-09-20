// El número de WhatsApp vive acá y no repetido por el sitio: si cambia, cambia
// en un solo lugar y no queda una versión vieja escondida en alguna sección.

/** Cómo se muestra, con los espacios que la gente espera leer. */
export const WHATSAPP_VISIBLE = "+56 9 7278 3539";

/** Como lo pide wa.me: solo dígitos, sin el + ni espacios. */
const WHATSAPP_DIGITOS = "56972783539";

// Saludo neutro a propósito: el WhatsApp es un canal de contacto, no un
// formulario de pedidos, y el mensaje no debe prometer que se toman.
const SALUDO = "Hola! Les escribo desde la página web.";

/** Abre el chat con el saludo ya escrito, así el cliente solo aprieta enviar. */
export const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_DIGITOS}?text=${encodeURIComponent(SALUDO)}`;

/** El fijo del local, que sigue existiendo para quien prefiere llamar. */
export const TELEFONO_FIJO_VISIBLE = "(2) 2403 6861";
export const TELEFONO_FIJO_LINK = "tel:+56224036861";
