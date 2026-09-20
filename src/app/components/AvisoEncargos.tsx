import { AVISO_ENCARGOS } from "../aviso";

// Franja angosta pegada arriba de la barra. Café oscuro sobre la barra crema
// para que se lea sin competir con el botón de WhatsApp, que sigue igual: la
// gente sigue escribiendo por otras cosas y comprando en vitrina.
export default function AvisoEncargos() {
  return (
    <div
      role="status"
      className="bg-brown-dark px-4 py-3 text-center text-sm leading-snug text-cream sm:text-base"
    >
      <span className="mr-2 font-semibold tracking-[0.2em] text-gold uppercase">
        Aviso
      </span>
      {AVISO_ENCARGOS.texto}
    </div>
  );
}
