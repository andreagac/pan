// Aviso temporal del sitio: franja arriba de la barra y ventana al entrar.
// Vive acá, junto al contacto, para que cambiar el texto o la fecha no
// obligue a buscar por las secciones.
//
// Se apaga solo cuando pasa `VENCE`: la página se regenera cada hora (ver
// `revalidate` en page.tsx), así que no hay que acordarse de sacarlo.

/** Primer instante en que el aviso deja de mostrarse (Chile, UTC-3 en sept). */
const VENCE = new Date("2026-09-20T00:00:00-03:00");

export const AVISO_ENCARGOS = {
  /** Franja angosta fija arriba de la barra. */
  texto:
    "Hasta el 19 de septiembre no estamos tomando encargos de empanadas. El local atiende normal hasta el jueves 17; el 18 y 19 estamos cerrados.",
  /** Ventana que tapa la página al entrar, una vez por visita. */
  ventana: {
    etiqueta: "Aviso de Fiestas Patrias",
    titulo: "¡Nos quedamos sin cupos!",
    detalle:
      "Le cuento que por ahora no estamos tomando encargos de empanadas para ninguna fecha hasta Fiestas Patrias. El local atiende normal hasta el jueves 17, así que puede pasar a comprar lo que haya en vitrina. El 18 y 19 estamos cerrados.",
    boton: "Entendido",
  },
  /** Fila que se suma a la tabla de horario mientras el aviso esté activo. */
  horario: { day: "18 y 19 de septiembre", hours: "Cerrado" },
};

export function avisoActivo(ahora: Date = new Date()) {
  return ahora < VENCE;
}
