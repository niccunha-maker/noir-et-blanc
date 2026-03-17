"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn, TextReveal } from "./TextReveal";

const miniStats = [
  { value: "7", label: "projetos entregues" },
  { value: "100%", label: "clientes satisfeitos" },
  { value: "5★", label: "avaliação média" },
];

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="bg-blanc py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Photo with parallax */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-5 relative"
          >
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] bg-[#E4E4E4] relative overflow-hidden">
                  <Image
                    src="/about-photo.png"
                    alt="Nicolas Cunha — Noir & Blanc"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-noir/[0.05] -z-10" />
              </div>
            </FadeIn>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <FadeIn>
              <p className="overline text-gris-clair mb-5">Sobre</p>
            </FadeIn>

            <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[40px] font-semibold text-noir leading-[1.1] mb-8">
              <TextReveal>Seu site é o seu melhor vendedor</TextReveal>
            </h2>

            <FadeIn delay={0.2}>
              <div className="editorial-rule mb-8" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-[15px] text-gris leading-[1.85] mb-6">
                Cliente pesquisa no Google → encontra seu site → entra em
                contato. Simples assim. Sem site, esse cliente vai pro
                concorrente.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[15px] text-gris leading-[1.85] mb-6">
                Eu crio sites rápidos, otimizados pro Google e prontos pra
                converter visitante em cliente. Você cuida do seu negócio.
                O site cuida do resto.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <p className="text-[15px] text-gris leading-[1.85] mb-14">
                São Paulo, SP — atendendo a Grande SP e região.
              </p>
            </FadeIn>

            {/* Mini stats */}
            <FadeIn delay={0.5}>
              <div className="flex items-start gap-0">
                {miniStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex-1 ${
                      i > 0 ? "border-l border-argent/60 pl-6" : ""
                    } ${i < miniStats.length - 1 ? "pr-6" : ""}`}
                  >
                    <div className="font-[family-name:var(--font-cormorant)] text-[28px] font-light text-noir leading-none mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-gris-clair tracking-[0.04em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
