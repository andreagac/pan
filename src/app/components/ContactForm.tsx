"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdalgrpv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-12 rounded-2xl border border-gold/10 bg-cream p-12 text-center">
        <p className="font-serif text-2xl font-bold text-brown-dark">
          Mensaje enviado
        </p>
        <p className="mt-3 text-brown-dark/60">
          Gracias por escribirnos. Te responderemos a la brevedad.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-brown-dark transition-colors hover:bg-gold-light"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 block text-sm font-medium text-brown-dark"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full rounded-xl border border-gold/10 bg-cream px-4 py-3 text-sm text-brown-dark placeholder:text-brown-dark/40 focus:border-gold focus:outline-none"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-brown-dark"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-gold/10 bg-cream px-4 py-3 text-sm text-brown-dark placeholder:text-brown-dark/40 focus:border-gold focus:outline-none"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="telefono"
          className="mb-2 block text-sm font-medium text-brown-dark"
        >
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="w-full rounded-xl border border-gold/10 bg-cream px-4 py-3 text-sm text-brown-dark placeholder:text-brown-dark/40 focus:border-gold focus:outline-none"
          placeholder="+56 9 1234 5678"
        />
      </div>
      <div>
        <label
          htmlFor="mensaje"
          className="mb-2 block text-sm font-medium text-brown-dark"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className="w-full resize-none rounded-xl border border-gold/10 bg-cream px-4 py-3 text-sm text-brown-dark placeholder:text-brown-dark/40 focus:border-gold focus:outline-none"
          placeholder="Cuéntanos en qué podemos ayudarte..."
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gold px-10 py-3 text-sm font-semibold text-brown-dark transition-colors hover:bg-gold-light disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Hubo un error al enviar. Intenta de nuevo.
          </p>
        )}
      </div>
    </form>
  );
}
