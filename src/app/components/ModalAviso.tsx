"use client";

import { useEffect, useState } from "react";
import { AVISO_ENCARGOS } from "../aviso";

const CLAVE = "aviso-encargos-visto";

// Cuadro que tapa la página al entrar. Se cierra con el botón (o tocando
// afuera) y no vuelve a aparecer en la misma visita.
export default function ModalAviso() {
  const [abierto, setAbierto] = useState(false);
  const { etiqueta, titulo, detalle, boton } = AVISO_ENCARGOS.ventana;

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(CLAVE)) setAbierto(true);
    } catch {
      setAbierto(true);
    }
  }, []);

  function cerrar() {
    setAbierto(false);
    try {
      sessionStorage.setItem(CLAVE, "1");
    } catch {
      // Sin almacenamiento (modo privado): se muestra de nuevo y no pasa nada.
    }
  }

  if (!abierto) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="aviso-titulo"
      onClick={cerrar}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-brown-dark/80 px-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-cream p-8 text-center shadow-2xl"
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
          {etiqueta}
        </p>
        <h2
          id="aviso-titulo"
          className="mt-3 font-serif text-3xl font-bold leading-snug text-brown-dark"
        >
          {titulo}
        </h2>
        <p className="mt-4 leading-relaxed text-brown-dark/70">{detalle}</p>
        <button
          onClick={cerrar}
          autoFocus
          className="mt-6 rounded-full bg-brown-dark px-8 py-3 font-semibold text-cream transition-colors hover:bg-brown"
        >
          {boton}
        </button>
      </div>
    </div>
  );
}
