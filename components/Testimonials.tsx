"use client";

import { FadeIn } from "./TextReveal";

const testimonials = [
  {
    initial: "L",
    name: "Lucas Ferreira",
    business: "Personal Trainer",
    neighborhood: "Vila Mariana",
    text: "Antes eu dependia só de indicação. Agora o site aparece quando alguém pesquisa 'personal trainer Vila Mariana'. O investimento se pagou no primeiro mês.",
    result: "3 novos clientes/semana pelo Google",
  },
  {
    initial: "C",
    name: "Camila Rodrigues",
    business: "Advogada Trabalhista",
    neighborhood: "Pinheiros",
    text: "Meu escritório não tinha presença online. Em duas semanas o site ficou pronto e profissional. Hoje recebo consultas direto pelo formulário de contato.",
    result: "+40% de consultas em 2 meses",
  },
  {
    initial: "R",
    name: "Rafael Santos",
    business: "Cabeleireiro",
    neighborhood: "Moema",
    text: "Queria algo que mostrasse meu trabalho e passasse credibilidade. O site ficou elegante, rápido e os clientes elogiam. Melhor decisão que tomei pro salão.",
    result: "Agenda lotada às sextas e sábados",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-blanc-casse py-28 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <FadeIn>
          <p className="overline text-gris-clair mb-5">Depoimentos</p>
        </FadeIn>

        <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[40px] font-semibold text-noir leading-[1.1] mb-14">
          <FadeIn delay={0.1}>Quem confiou, aprovou</FadeIn>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.2 + i * 0.15}>
              <div className="bg-noir p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full bg-noir-70 flex items-center justify-center shrink-0">
                    <span className="text-blanc text-[13px] font-bold">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-blanc text-[14px] font-medium leading-tight">
                      {t.name}
                    </p>
                    <p className="text-gris-clair text-[11px] tracking-[0.03em]">
                      {t.business} · {t.neighborhood}
                    </p>
                  </div>
                </div>

                <p className="text-argent text-[14px] leading-[1.8] mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                <p className="text-or text-[13px] font-semibold tracking-[0.02em]">
                  {t.result}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
