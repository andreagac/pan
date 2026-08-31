import { TELEFONO_FIJO_VISIBLE } from "../contacto";

/**
 * Las preguntas de empanadas, en un solo lugar.
 *
 * Desde el premio de agosto de 2026 casi todo lo que llega por WhatsApp es por
 * empanadas, y siempre lo mismo: cuánto valen, si quedan, si despachan y con
 * cuánta anticipación hay que encargar. Contestarlas acá es lo que baja el
 * volumen de mensajes repetidos.
 *
 * Las respuestas son las mismas que da el local. Si cambia un precio o un
 * plazo, se cambia en esta lista y queda cambiado también en el JSON-LD que
 * lee Google, porque los dos salen de acá.
 */
export const preguntas = [
  {
    pregunta: "¿Cuánto vale la empanada?",
    respuesta:
      "La de pino vale $2.300 por unidad, y $2.000 cada una si llevas 12 o más. La de queso vale $2.100 cada una y va solo por encargo, con un mínimo de una docena.",
  },
  {
    pregunta: "¿Qué sabores tienen?",
    respuesta:
      "Pino y queso. La de pino es la receta de siempre: carne, cebolla, huevo y aceituna. No hacemos otros sabores.",
  },
  {
    pregunta: "¿Hay empanadas todos los días o hay que encargarlas?",
    respuesta:
      "Las de pino hay todos los días hasta el 18 de septiembre, pero se van muy rápido y no podemos asegurarte que queden a la hora que llegues. Si las quieres seguras, encárgalas. Las de queso son siempre por encargo.",
  },
  {
    pregunta: "¿Con cuánta anticipación tengo que encargar?",
    respuesta:
      "Por estos días, con 2 o 3 días basta. Desde la semana del 7 de septiembre lo ideal es una semana, porque mientras más cerca del 18 más llena está la lista. La fecha exacta te la confirmamos nosotros al tomar el pedido.",
  },
  {
    pregunta: "¿Cómo reservo y cómo se paga?",
    respuesta: `El pedido se reserva con el 50% de abono y el resto se paga al retirar. Escríbenos por WhatsApp o llámanos al ${TELEFONO_FIJO_VISIBLE} y lo coordinamos con alguien del local.`,
  },
  {
    pregunta: "¿Hacen despacho de empanadas?",
    respuesta:
      "No. Las empanadas son solo retiro en el local, en Antofagasta 2899, Santiago Centro. El reparto que hacemos a domicilio es únicamente de pan, para almacenes.",
  },
  {
    pregunta: "¿Atienden para el 18 de septiembre?",
    respuesta:
      "El 17 atendemos con horario normal. El 18 abrimos solo para entregar pedidos, hasta las 12:00 del día. El 19 estamos cerrados. Por eso conviene retirar los encargos el 16 o el 17.",
  },
  {
    pregunta: "Tengo un almacén, ¿me venden empanadas por mayor?",
    respuesta:
      "Conversémoslo directamente por teléfono. El reparto diario desde 5 kg es solo de pan; las empanadas en cantidad se coordinan aparte y con anticipación, sobre todo para la semana del 18.",
  },
];

/** Lo que Google puede mostrar como preguntas desplegables en el resultado. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((p) => ({
    "@type": "Question",
    name: p.pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: p.respuesta,
    },
  })),
};

export default function PreguntasEmpanadas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <details> nativo: se despliega sin JavaScript y el texto queda igual
          en el HTML, que es lo que Google necesita para poder leerlo. */}
      <div className="mt-12 space-y-3">
        {preguntas.map((p) => (
          <details
            key={p.pregunta}
            className="group rounded-2xl border border-gold/10 bg-beige px-6 transition-shadow hover:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-serif text-base font-semibold text-brown-dark md:text-lg [&::-webkit-details-marker]:hidden">
              {p.pregunta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-brown-dark/70">
              {p.respuesta}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
