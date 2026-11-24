"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.4}px)`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={imgRef} className="absolute inset-0">
      <Image
        src="/portada-horno.jpg"
        alt="Pan horneándose en el horno de la panadería"
        fill
        className="object-cover object-[center_38%] opacity-30"
        priority
      />
    </div>
  );
}
