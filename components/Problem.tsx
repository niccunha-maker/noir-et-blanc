"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextReveal } from "./TextReveal";

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Problem() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ghostX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="bg-noir relative overflow-hidden"
    >
      {/* Scrolling ghost text */}
      <motion.div
        style={{ x: ghostX }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-cormorant)] text-[120px] lg:text-[200px] font-light text-blanc/[0.02] leading-none select-none pointer-events-none"
      >
        invisível — invisível — invisível — invisível
      </motion.div>

      <div className="py-28 lg:py-40 relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left — the problem */}
            <div>
              <FadeIn>
                <p className="overline text-or mb-6">O problema</p>
              </FadeIn>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,5vw,52px)] font-light text-blanc leading-[1.1] mb-8">
                <TextReveal>
                  Agora mesmo, alguém pesquisou seu serviço no Google.
                </TextReveal>
              </h2>
              <FadeIn delay={0.3}>
                <p className="font-[family-name:var(--font-cormorant)] text-[clamp(24px,3.5vw,36px)] font-semibold text-or leading-[1.15]">
                  Encontrou o concorrente.
                </p>
              </FadeIn>
            </div>

            {/* Right — the stats as proof */}
            <div className="space-y-0">
              {[
                {
                  value: "97%",
                  text: "dos consumidores pesquisam online antes de visitar um negócio local",
                },
                {
                  value: "85%",
                  text: "das empresas com site profissional aumentam seu faturamento",
                },
                {
                  value: "0",
                  text: "clientes vão te encontrar sem um site otimizado",
                  highlight: true,
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease }}
                  className={`flex items-start gap-6 py-7 ${
                    i > 0 ? "border-t border-blanc/[0.06]" : ""
                  }`}
                >
                  <span
                    className={`font-[family-name:var(--font-cormorant)] text-[44px] lg:text-[56px] font-light leading-none flex-shrink-0 min-w-[100px] ${
                      stat.highlight ? "text-or" : "text-blanc/80"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <p className={`text-[14px] leading-[1.7] pt-3 ${
                    stat.highlight ? "text-blanc/60 font-medium" : "text-blanc/35"
                  }`}>
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
