"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "./TextReveal";

const stats = [
  {
    value: "97",
    suffix: "%",
    label: "dos consumidores pesquisam online antes de visitar um local",
  },
  {
    value: "85",
    suffix: "%",
    label: "das empresas com site aumentam seu faturamento",
  },
  {
    value: "24/7",
    suffix: "",
    label: "seu site trabalha por você sem parar",
  },
  {
    value: "2-3",
    suffix: "",
    label: "meses para o investimento se pagar",
  },
];

function CountUp({ target, suffix }: { target: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    const isNumeric = /^\d+$/.test(target);
    if (!isNumeric) {
      setDisplay(target);
      return;
    }

    const end = parseInt(target);
    const duration = 2200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Quart ease out for dramatic deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * end).toString());
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-blanc-casse relative">
      {/* Top rule */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div className="h-px bg-argent/60" />
      </div>

      <div className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-0">
            {stats.map((stat, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className={`relative text-center lg:text-left px-0 lg:px-8 ${
                  i > 0 ? "lg:border-l lg:border-argent/60" : ""
                }`}
              >
                {/* Large number */}
                <div className="font-[family-name:var(--font-cormorant)] text-[52px] lg:text-[64px] font-light text-noir leading-none mb-4 tracking-[-0.02em]">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Description */}
                <p className="text-[12px] text-gris leading-[1.7] tracking-[0.01em] max-w-[200px] mx-auto lg:mx-0">
                  {stat.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div className="h-px bg-argent/60" />
      </div>
    </section>
  );
}
