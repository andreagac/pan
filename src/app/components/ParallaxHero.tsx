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
        src="/marraquetas.jpg"
        alt="Marraquetas recién horneadas"
        fill
        className="object-cover opacity-30"
        priority
      />
    </div>
  );
}
