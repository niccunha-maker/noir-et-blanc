"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FadeIn, TextReveal } from "./TextReveal";

const contactInfo = [
  {
    icon: Phone,
    label: "(19) 99159-1265",
    sub: "WhatsApp",
    href: "https://wa.me/5519991591265?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Noir%20%26%20Blanc%20e%20gostaria%20de%20solicitar%20uma%20proposta.",
  },
  {
    icon: Mail,
    label: "nic_cunha@icloud.com",
    sub: "E-mail",
    href: "mailto:nic_cunha@icloud.com",
  },
  {
    icon: MapPin,
    label: "São Paulo, SP",
    sub: "Localização",
    href: undefined,
  },
];

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xdawnpzg", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="py-16"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-[32px] lg:text-[40px] font-light text-blanc leading-[1.15] mb-4">
              Mensagem enviada.
            </p>
            <p className="text-[14px] text-blanc/40 leading-[1.7] mb-8">
              Obrigado pelo contato. Retornaremos em breve.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="link-hover text-[11px] text-blanc/30 hover:text-blanc/60 tracking-[0.06em] uppercase transition-colors duration-300"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
          >
            {[
              { name: "name", label: "Nome", type: "text" },
              { name: "email", label: "E-mail", type: "email" },
              { name: "phone", label: "Telefone", type: "tel" },
            ].map((field, i) => (
              <div key={field.name} className="float-label mb-2">
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder=" "
                  required
                />
                <label htmlFor={field.name}>{field.label}</label>
                <span className="absolute right-0 top-[22px] text-[10px] text-blanc/8 font-medium tracking-[0.1em]">
                  0{i + 1}
                </span>
              </div>
            ))}

            <div className="float-label mb-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder=" "
                className="resize-none"
              />
              <label htmlFor="message">Mensagem</label>
              <span className="absolute right-0 top-[22px] text-[10px] text-blanc/8 font-medium tracking-[0.1em]">
                04
              </span>
            </div>

            <div className="pt-10 flex items-center gap-6">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-fill btn-fill-or bg-blanc text-noir text-[11px] font-medium tracking-[0.06em] uppercase px-10 py-4 transition-colors duration-500 disabled:opacity-50"
              >
                <span>{status === "sending" ? "Enviando..." : "Enviar mensagem"}</span>
              </button>
              {status === "error" && (
                <span className="text-[12px] text-red-400">
                  Erro ao enviar. Tente novamente.
                </span>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="bg-noir relative overflow-hidden"
    >
      {/* Ghost watermark with parallax */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute top-0 right-0 font-[family-name:var(--font-cormorant)] text-[200px] lg:text-[320px] font-light text-blanc/[0.015] leading-none select-none pointer-events-none"
      >
        N&B
      </motion.div>

      <div className="py-28 lg:py-40 relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <FadeIn>
              <p className="overline text-gris mb-5">Contato</p>
            </FadeIn>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(40px,7vw,64px)] font-light text-blanc leading-[1.05] mb-5">
              <TextReveal>Cada dia sem site é um cliente perdido.</TextReveal>
            </h2>
            <FadeIn delay={0.3}>
              <p className="text-[15px] text-gris-clair max-w-[400px]">
                Me manda uma mensagem agora. Semana que vem, seus clientes te encontram no Google.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Form with floating labels */}
            <FadeIn delay={0.2} className="lg:col-span-7">
              <ContactForm />
            </FadeIn>

            {/* Contact info */}
            <FadeIn
              delay={0.4}
              className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-10"
            >
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease }}
                    className="flex items-start gap-4 group/item"
                  >
                    <Icon
                      className="w-4 h-4 text-gris mt-0.5 flex-shrink-0 group-hover/item:text-or transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-blanc/20 mb-1.5">
                        {item.sub}
                      </p>
                      <p className="text-[14px] text-blanc/70 group-hover/item:text-blanc transition-colors duration-300">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:translate-x-1 transition-transform duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
