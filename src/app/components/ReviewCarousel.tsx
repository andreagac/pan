"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Claudia Vargas",
    stars: 5,
    text: "Una de mis panaderías regalonas, es un regreso a los '80 desde la entrada, música ambiental de esa época, atención amable y rápida en general, pan rico y crujiente. 100% recomendable esta panadería de barrio.",
  },
  {
    name: "D. Igor Woldarsky O.",
    stars: 5,
    text: "El pan de muy buen sabor, el integral muy rico, hay galletas de coco de esas que me llevó a la infancia. Las empanadas hay todos los viernes muy ricas, las dobladas son imperdibles.",
  },
  {
    name: "Jose Miguel Figueroa",
    stars: 5,
    text: "La atención esmerada del personal. Un asitero haber pasado y conocido sus berlines y el pan sabroso. Me trajo recuerdo de niño cuando vivía en ese sector.",
  },
  {
    name: "Fabiola Morales",
    stars: 5,
    text: "Una panadería clásica, pan y pastelería fresca. Personal amable. Muy buenos precios.",
  },
  {
    name: "Alex Staley",
    stars: 5,
    text: "Panadería a la antigua, excelente.",
  },
  {
    name: "Antonio Moraga",
    stars: 5,
    text: "Encuentras buen pan, cosas pal pan y dulces para la once.",
  },
  {
    name: "Ingrid Fuentes Rios",
    stars: 5,
    text: "Buena atención tienen de todo. Comida: 5/5, Servicio: 5/5, Ambiente: 5/5.",
  },
  {
    name: "Katherine Osses",
    stars: 5,
    text: "Rico y buenos precios.",
  },
  {
    name: "Salome Rodriguez",
    stars: 5,
    text: "Las mejores galletas caseras, una panadería de muchos años.",
  },
];

export default function ReviewCarousel() {
  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);
  const totalPages = Math.ceil(reviews.length / 3);

  function changePage(next: number) {
    setFading(true);
    setTimeout(() => {
      setPage(next);
      setFading(false);
    }, 300);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changePage(page + 1 >= totalPages ? 0 : page + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, totalPages]);

  const visible = reviews.slice(page * 3, page * 3 + 3);

  return (
    <div>
      <div
        className={`mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
      >
        {visible.map((review) => (
          <div
            key={review.name}
            className="rounded-2xl border border-gold/10 bg-cream p-6"
          >
            <div className="mb-3 flex items-center gap-1 text-gold">
              {Array.from({ length: review.stars }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-brown-dark/70">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-brown-dark">
              {review.name}
            </p>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i)}
            className={`h-2 rounded-full transition-all ${page === i ? "w-6 bg-gold" : "w-2 bg-gold/30"}`}
            aria-label={`Ver reseñas ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
