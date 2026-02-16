"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#reparto", label: "Reparto" },
  { href: "#horario", label: "Horario" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gold/20 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Panadería Antofagasta"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </a>
        {/* Desktop links */}
        <div className="hidden gap-6 text-sm font-medium text-brown-dark/80 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block h-0.5 w-6 bg-brown-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brown-dark transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brown-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gold/10 bg-cream/95 px-6 py-4 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-brown-dark/80">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
