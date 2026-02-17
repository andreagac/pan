import Image from "next/image";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brown-dark px-6 pt-20 text-center">
        <Image
          src="/marraquetas.jpg"
          alt="Marraquetas recién horneadas"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Panadería Antofagasta"
            width={280}
            height={280}
            className="mb-8 h-auto w-72 drop-shadow-lg md:w-96"
            priority
          />
          <p className="mx-auto max-w-xl text-2xl leading-relaxed text-cream/80">
            Más de 80 años de tradición panadera en Santiago Centro. Pan
            artesanal horneado con amor, como lo hacía la abuela.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#productos"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-brown-dark transition-colors hover:bg-gold-light"
            >
              Ver nuestros productos
            </a>
            <a
              href="#reparto"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-brown-dark transition-colors hover:bg-gold-light"
            >
              Reparto comercial
            </a>
            <a
              href="#horario"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-brown-dark transition-colors hover:bg-gold-light"
            >
              Visítanos
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 z-10 animate-bounce text-cream/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="bg-cream px-6 py-24">
        <FadeIn className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-2 text-sm tracking-[0.3em] text-gold uppercase">
              Nuestra historia
            </p>
            <h2 className="font-serif text-3xl font-bold text-brown-dark md:text-4xl">
              Tradición que se amasa con las manos
            </h2>
          </div>
          <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/esquina.jpg"
                  alt="Esquina de Antofagasta con San Alfonso"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/horno.webp"
                  alt="Panaderos trabajando en el horno"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-2xl">
                <Image
                  src="/local.jpg"
                  alt="Atención al cliente en la panadería"
                  width={800}
                  height={400}
                  className="h-52 w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
            <div>
              <div className="space-y-4 leading-relaxed text-brown-dark/70">
                <p>
                  Somos Panadería Antofagasta, una panadería tradicional de la
                  comuna de Santiago. Desde 1940 junto a los vecinos del barrio.
                  Ya son casi ocho décadas atendiendo en la esquina San Alfonso
                  con Antofagasta.
                </p>
                <p>
                  Hemos sido testigos de los cambios de la ciudad. Aún
                  recordamos cuando pasaba el tranvía por fuera de nuestro
                  local. Pero hay algo que con el tiempo no ha cambiado, es el
                  cariño y pasión con el que hacemos el pancito.
                </p>
                <p>
                  Atendemos de lunes a domingo para tenerte siempre el pancito
                  fresco y calentito en tu mesa.
                </p>
              </div>
              <div className="mt-10 flex justify-center gap-12">
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-gold">80+</p>
                  <p className="mt-1 text-sm text-brown-dark/60">
                    Años de tradición
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-gold">7 días</p>
                  <p className="mt-1 text-sm text-brown-dark/60">
                    Abiertos a la semana
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-gold">8+</p>
                  <p className="mt-1 text-sm text-brown-dark/60">
                    Variedades de pan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Productos */}
      <section id="productos" className="bg-beige px-6 py-24">
        <FadeIn className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm tracking-[0.3em] text-gold uppercase">
              Lo que horneamos
            </p>
            <h2 className="font-serif text-3xl font-bold text-brown-dark md:text-4xl">
              Nuestros Productos
            </h2>
          </div>
          {/* Productos destacados */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/marraquetas.jpg",
                name: "Pan Fresco del Día",
                desc: "Marraquetas, hallullas, frica, amasado y más. Horneado varias veces al día para que siempre tengas pan calentito y crujiente.",
              },
              {
                image: "/empanadas.webp",
                name: "Empanadas de Pino",
                desc: "Receta familiar con carne, cebolla, huevo y aceituna. Preparadas a mano como manda la tradición chilena.",
              },
              {
                image: "/galletas.webp",
                name: "Dulces y Pasteles",
                desc: "Berlines, cachitos, tortas y pasteles para endulzar tu día. Hechos con recetas que han pasado de generación en generación.",
                position: "object-top",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-2xl border border-gold/10 bg-cream transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform hover:scale-105 ${"position" in product ? product.position : ""}`}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-brown-dark">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brown-dark/60">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Nuestros Panes */}
          <div className="mt-16 text-center">
            <h3 className="font-serif text-2xl font-bold text-brown-dark">
              Nuestros Panes
            </h3>
            <p className="mt-2 text-brown-dark/60">
              Variedad horneada fresca todos los días
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { image: "/marraquetas.jpg", name: "Marraqueta" },
              { image: "/hallullas.jpg", name: "Hallulla" },
              { image: "/lenguas.jpg", name: "Completo (Lengua)" },
              { image: null, name: "Frica" },
              { image: null, name: "Amasado" },
              { image: null, name: "Molde" },
              { image: null, name: "Especial" },
              { image: null, name: "Centeno" },
            ].map((pan) => (
              <div
                key={pan.name}
                className="overflow-hidden rounded-xl border border-gold/10 bg-cream transition-shadow hover:shadow-md"
              >
                {pan.image ? (
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={pan.image}
                      alt={pan.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-32 items-center justify-center bg-beige">
                    <span className="text-4xl">{"\uD83C\uDF5E"}</span>
                  </div>
                )}
                <p className="py-3 text-center font-serif text-sm font-semibold text-brown-dark">
                  {pan.name}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Reparto */}
      <section id="reparto" className="relative overflow-hidden bg-brown-dark px-6 py-24">
        <Image
          src="/panadero.webp"
          alt="Panadero trabajando"
          fill
          className="object-cover opacity-20"
        />
        <FadeIn className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm tracking-[0.3em] text-gold uppercase">
            Para tu negocio
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream md:text-5xl">
            Reparto para almacenes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
            Realizamos reparto todos los días desde 5 kg en adelante con
            mejores precios. Consulta por cobertura y disponibilidad.
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-gold">5 kg</p>
              <p className="mt-1 text-sm text-cream/50">Pedido mínimo</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-gold">7 días</p>
              <p className="mt-1 text-sm text-cream/50">De la semana</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-gold">Mejor</p>
              <p className="mt-1 text-sm text-cream/50">Precio por mayor</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+56224036861"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-brown-dark transition-colors hover:bg-gold-light"
            >
              Llamar: (2) 2403 6861
            </a>
            <a
              href="https://instagram.com/panaderia_antofagasta"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream/30 px-8 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="https://web.facebook.com/PanaderiaAntofagasta/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream/30 px-8 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Facebook
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Horario y Ubicación */}
      <section id="horario" className="bg-cream px-6 py-24">
        <FadeIn className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="mb-2 text-sm tracking-[0.3em] text-gold uppercase">
              Encuéntranos
            </p>
            <h2 className="font-serif text-3xl font-bold text-brown-dark md:text-4xl">
              Horario y Ubicación
            </h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Horario */}
            <div className="rounded-2xl border border-gold/10 bg-beige p-8">
              <h3 className="mb-6 font-serif text-xl font-semibold text-brown-dark">
                Horario de Atención
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Lunes a Sábado", hours: "6:30 — 20:30" },
                  {
                    day: "Domingo",
                    hours: "7:30 — 15:00 / 16:00 — 19:00",
                  },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between border-b border-gold/10 pb-3"
                  >
                    <span className="font-medium text-brown-dark">
                      {row.day}
                    </span>
                    <span className="text-brown-dark/60">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ubicación y Contacto */}
            <div className="rounded-2xl border border-gold/10 bg-beige p-8">
              <h3 className="mb-6 font-serif text-xl font-semibold text-brown-dark">
                Ubicación y Contacto
              </h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="mb-1 font-medium text-brown-dark">Dirección</p>
                  <a
                    href="https://maps.google.com/?q=Antofagasta+2899+Santiago+Centro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-dark/70 underline decoration-gold/30 underline-offset-2 transition-colors hover:text-gold"
                  >
                    Antofagasta 2899, Santiago Centro
                  </a>
                </div>
                <div>
                  <p className="mb-1 font-medium text-brown-dark">Teléfono</p>
                  <a
                    href="tel:+56224036861"
                    className="text-brown-dark/70 transition-colors hover:text-gold"
                  >
                    (2) 2403 6861
                  </a>
                </div>
                <div>
                  <p className="mb-1 font-medium text-brown-dark">
                    Redes Sociales
                  </p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://instagram.com/panaderia_antofagasta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown-dark/70 transition-colors hover:text-gold"
                    >
                      Instagram: @panaderia_antofagasta
                    </a>
                    <a
                      href="https://web.facebook.com/PanaderiaAntofagasta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown-dark/70 transition-colors hover:text-gold"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gold/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.5!2d-70.6595!3d-33.4585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4ff4c000001%3A0x5c0d1e2f3a4b5c6d!2sAntofagasta%202899%2C%20Santiago%20Centro!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Panadería Antofagasta"
            />
          </div>
        </FadeIn>
      </section>

      {/* Reseñas */}
      <section id="resenas" className="bg-beige px-6 py-24">
        <FadeIn className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-2 text-sm tracking-[0.3em] text-gold uppercase">
              Lo que dicen nuestros clientes
            </p>
            <h2 className="font-serif text-3xl font-bold text-brown-dark md:text-4xl">
              Reseñas de Google
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((review) => (
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
        </FadeIn>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-cream px-6 py-24">
        <FadeIn className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="mb-2 text-sm tracking-[0.3em] text-gold uppercase">
              Escríbenos
            </p>
            <h2 className="font-serif text-3xl font-bold text-brown-dark md:text-4xl">
              Contacto
            </h2>
            <p className="mt-4 text-brown-dark/60">
              ¿Tienes alguna consulta o quieres hacer un pedido especial?
              Déjanos tu mensaje.
            </p>
          </div>
          <ContactForm />
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 bg-brown-dark px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Panadería Antofagasta"
                width={40}
                height={40}
                className="h-10 w-auto brightness-150"
              />
              <div>
                <p className="font-serif text-lg font-bold text-cream">
                  Panadería Antofagasta
                </p>
                <p className="text-sm text-cream/50">
                  Antofagasta 2899, Santiago Centro
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-cream/60">
              <a
                href="tel:+56224036861"
                className="transition-colors hover:text-gold"
              >
                (2) 2403 6861
              </a>
              <a
                href="https://instagram.com/panaderia_antofagasta"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram
              </a>
              <a
                href="https://web.facebook.com/PanaderiaAntofagasta/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-cream/10 pt-6 text-center text-xs text-cream/30">
            © {new Date().getFullYear()} Panadería Antofagasta. Todos los
            derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
