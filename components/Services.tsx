"use client";

import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "./TextReveal";

const WHATSAPP_URL = "https://wa.me/5519991591265?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Noir%20%26%20Blanc%20e%20gostaria%20de%20solicitar%20uma%20proposta.";

type Feature = { text: string; included: boolean };

interface Package {
  name: string;
  price: string;
  installment: string;
  ideal: string;
  popular?: boolean;
  features: Feature[];
}

const packages: Package[] = [
  {
    name: "Pacote Inicial",
    price: "R$ 997",
    installment: "12x de R$ 97",
    ideal: "Para profissionais que precisam de presença online",
    features: [
      { text: "Site one-page responsivo (mobile-first)", included: true },
      { text: "Até 5 seções (Início, Sobre, Serviços, Depoimentos, Contato)", included: true },
      { text: "Botão WhatsApp flutuante", included: true },
      { text: "Integração Google Maps", included: true },
      { text: "Configuração Google Meu Negócio", included: true },
      { text: "Certificado SSL (HTTPS)", included: true },
      { text: "Domínio .com.br (1º ano)", included: true },
      { text: "Hospedagem (1º ano)", included: true },
      { text: "Blog", included: false },
      { text: "E-commerce", included: false },
      { text: "Sistema de agendamento", included: false },
    ],
  },
  {
    name: "Pacote Pro",
    price: "R$ 1.997",
    installment: "12x de R$ 197",
    ideal: "Para empresas que querem gerar clientes",
    popular: true,
    features: [
      { text: "Site multi-página (até 8 páginas)", included: true },
      { text: "Design personalizado com identidade visual", included: true },
      { text: "SEO básico (meta tags, sitemap, velocidade)", included: true },
      { text: "Blog pronto para SEO (3 artigos iniciais)", included: true },
      { text: "Formulário de contato + WhatsApp", included: true },
      { text: "Google Meu Negócio otimizado", included: true },
      { text: "Integração redes sociais", included: true },
      { text: "Domínio + Hospedagem + SSL (1 ano)", included: true },
      { text: "Painel admin para editar conteúdo", included: true },
      { text: "1 mês de suporte pós-entrega", included: true },
      { text: "E-commerce", included: false },
      { text: "Sistema de agendamento avançado", included: false },
    ],
  },
  {
    name: "Pacote Gold",
    price: "R$ 3.497",
    installment: "12x de R$ 347",
    ideal: "Para negócios que querem escalar marketing",
    features: [
      { text: "Tudo do Pacote Pro +", included: true },
      { text: "Até 15 páginas completas", included: true },
      { text: "Sistema de agendamento online", included: true },
      { text: "Área de depoimentos dinâmica", included: true },
      { text: "Blog completo com estratégia SEO", included: true },
      { text: "Google Analytics integrado", included: true },
      { text: "Landing pages para campanhas", included: true },
      { text: "Otimização avançada de velocidade", included: true },
      { text: "Treinamento em vídeo para o cliente", included: true },
      { text: "3 meses de suporte + ajustes", included: true },
      { text: "E-commerce completo", included: false },
    ],
  },
];

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Services() {
  return (
    <section id="servicos" className="bg-blanc py-28 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <FadeIn className="mb-20 max-w-[520px]">
          <p className="overline text-gris-clair mb-5">Investimento</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[40px] font-semibold text-noir leading-[1.1] mb-4">
            <TextReveal>
              Escolha seu plano. Comece a atrair clientes.
            </TextReveal>
          </h2>
          <p className="text-[13px] text-gris-clair mb-6">
            Entrega em até 7 dias. Sem mensalidade surpresa. Cancele quando quiser.
          </p>
          <div className="editorial-rule" />
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease }}
              whileHover={
                pkg.popular
                  ? {}
                  : { y: -4, transition: { duration: 0.3 } }
              }
              className={`group relative p-8 lg:p-10 transition-shadow duration-500 ${
                pkg.popular
                  ? "bg-noir text-blanc lg:-my-6 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  : "border border-[#E8E8E8] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              }`}
            >
              {/* Gold top line for popular */}
              {pkg.popular && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-or" />
              )}
              {pkg.popular && (
                <div className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase text-or mb-6">
                  Mais Popular
                </div>
              )}

              <h3
                className={`text-[13px] font-bold tracking-[0.04em] uppercase mb-6 ${
                  pkg.popular ? "text-blanc/50" : "text-gris"
                }`}
              >
                {pkg.name}
              </h3>

              <div
                className={`font-[family-name:var(--font-cormorant)] text-[48px] font-light leading-none mb-2 tracking-[-0.02em] ${
                  pkg.popular ? "text-blanc" : "text-noir"
                }`}
              >
                {pkg.price}
              </div>

              <p
                className={`text-[13px] mb-1 ${
                  pkg.popular ? "text-blanc/40" : "text-gris-clair"
                }`}
              >
                {pkg.installment}
              </p>

              <p
                className={`text-[12px] italic mb-8 ${
                  pkg.popular ? "text-blanc/30" : "text-gris-clair"
                }`}
              >
                {pkg.ideal}
              </p>

              <div
                className={`w-full h-px mb-8 ${
                  pkg.popular ? "bg-blanc/8" : "bg-[#F0F0F0]"
                }`}
              />

              {/* Features with micro-stagger */}
              <ul className="space-y-3.5 mb-10">
                {pkg.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1 + j * 0.03,
                      duration: 0.4,
                      ease,
                    }}
                    className={`flex items-start gap-3 text-[13px] leading-[1.5] ${
                      pkg.popular
                        ? feature.included
                          ? "text-blanc/75"
                          : "text-blanc/15"
                        : feature.included
                        ? "text-noir"
                        : "text-argent"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 text-[12px] ${
                        pkg.popular && feature.included ? "text-or" : ""
                      }`}
                    >
                      {feature.included ? "✓" : "—"}
                    </span>
                    {feature.text}
                  </motion.li>
                ))}
              </ul>

              {/* CTA with fill hover */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-fill block w-full text-center text-[11px] font-medium tracking-[0.06em] uppercase py-4 transition-colors duration-500 ${
                  pkg.popular
                    ? "btn-fill-or bg-blanc text-noir"
                    : "btn-fill-noir border border-noir text-noir hover:text-blanc"
                }`}
              >
                <span>Solicitar proposta</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
