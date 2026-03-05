"use client";

import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "./TextReveal";

const steps = [
  {
    number: "01",
    title: "Você me conta sobre seu negócio",
    desc: "Uma conversa rápida no WhatsApp. Me diz o que faz, quem são seus clientes e o que precisa.",
    time: "15 min",
  },
  {
    number: "02",
    title: "Eu crio seu site do zero",
    desc: "Design exclusivo, otimizado pro Google, rápido e pronto pra converter visitante em cliente.",
    time: "5-7 dias",
  },
  {
    number: "03",
    title: "Clientes te encontram no Google",
    desc: "Seu site vai ao ar. Quem pesquisar seu serviço na região, encontra você — não o concorrente.",
    time: "Imediato",
  },
];

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function HowItWorks() {
  return (
    <section className="bg-noir py-28 lg:py-40 relative overflow-hidden">
      {/* Ghost text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-cormorant)] text-[180px] lg:text-[300px] font-light text-blanc/[0.015] leading-none select-none pointer-events-none whitespace-nowrap">
        1 → 2 → 3
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 relative">
        <FadeIn className="mb-20">
          <p className="overline text-or mb-5">Como funciona</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[40px] font-semibold text-blanc leading-[1.1]">
            <TextReveal>Do zero ao Google em 3 passos</TextReveal>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease }}
              className={`relative p-8 lg:p-10 ${
                i < steps.length - 1 ? "lg:border-r lg:border-blanc/[0.06]" : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-cormorant)] text-[56px] font-light text-or leading-none">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-blanc/[0.06]" />
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-blanc/20">
                  {step.time}
                </span>
              </div>

              <h3 className="text-[16px] font-medium text-blanc mb-3 leading-[1.4]">
                {step.title}
              </h3>
              <p className="text-[13px] text-blanc/40 leading-[1.7]">
                {step.desc}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blanc/10 text-[20px]">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <p className="text-[13px] text-blanc/30 mb-6">
            Sem burocracia. Sem reuniões longas. Sem surpresas.
          </p>
          <a
            href="#contato"
            className="btn-fill btn-fill-or bg-blanc text-noir text-[11px] font-medium tracking-[0.06em] uppercase px-10 py-4 transition-colors duration-500 inline-block"
          >
            <span>Quero começar agora</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
