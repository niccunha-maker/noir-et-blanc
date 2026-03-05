"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "./TextReveal";

const WHATSAPP_URL = "https://wa.me/5519991591265?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Noir%20%26%20Blanc%20e%20gostaria%20de%20solicitar%20uma%20proposta.";
const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for decorative elements
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen lg:min-h-[90vh] flex items-end lg:items-center bg-blanc overflow-hidden"
    >
      {/* Decorative parallax lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: lineY }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 1, ease }}
          className="absolute left-[15%] top-0 bottom-0 w-px bg-noir/[0.03] origin-top hidden lg:block"
        />
        <motion.div
          style={{ y: lineY }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease }}
          className="absolute right-[28%] top-0 bottom-0 w-px bg-noir/[0.03] origin-top hidden lg:block"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 0.8, ease }}
          className="absolute left-0 right-0 top-[38%] h-px bg-noir/[0.03] origin-left hidden lg:block"
        />
        {/* Left-side geometric decoration */}
        {/* Corner bracket — top-left of text area */}
        <motion.svg
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute left-[4%] top-[18%] w-[60px] h-[60px] hidden lg:block"
          viewBox="0 0 60 60"
          fill="none"
        >
          <motion.path
            d="M0 40 L0 0 L40 0"
            stroke="black"
            strokeWidth="0.5"
            strokeOpacity="0.06"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.6, ease }}
          />
        </motion.svg>

        {/* Small circle accent — left side */}
        <motion.div
          style={{ y: lineY }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8, ease }}
          className="absolute left-[8%] top-[55%] w-[6px] h-[6px] rounded-full border border-noir/[0.08] hidden lg:block"
        />

        {/* Diagonal accent line — bottom-left */}
        <motion.svg
          className="absolute left-[2%] bottom-[15%] w-[100px] h-[100px] hidden lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.line
            x1="0"
            y1="100"
            x2="80"
            y2="20"
            stroke="black"
            strokeWidth="0.5"
            strokeOpacity="0.04"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.4, ease }}
          />
        </motion.svg>

        {/* Small cross mark — mid-left */}
        <motion.svg
          style={{ y: circleY }}
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute left-[12%] top-[72%] w-[12px] h-[12px] hidden lg:block"
          viewBox="0 0 12 12"
          fill="none"
        >
          <line x1="6" y1="0" x2="6" y2="12" stroke="black" strokeWidth="0.5" strokeOpacity="0.06" />
          <line x1="0" y1="6" x2="12" y2="6" stroke="black" strokeWidth="0.5" strokeOpacity="0.06" />
        </motion.svg>

        {/* Ghost year number with parallax */}
        <motion.div
          style={{ y: ghostY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute right-[6%] top-[12%] font-[family-name:var(--font-cormorant)] text-[240px] lg:text-[360px] font-light text-noir/[0.015] leading-none select-none hidden lg:block"
        >
          26
        </motion.div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 w-full pb-24 pt-36 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Content — 7 columns for asymmetry */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Overline */}
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                className="overline text-gris-clair"
              >
                Estúdio de criação digital
              </motion.p>
            </div>

            {/* Logo name — text reveal word by word */}
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(44px,8vw,76px)] font-light tracking-[0.1em] text-noir leading-[0.95] mb-6">
              <TextReveal delay={0.5}>
                NOIR
              </TextReveal>
              {" "}
              <span className="text-noir/15">
                <TextReveal delay={0.65}>
                  &
                </TextReveal>
              </span>
              {" "}
              <TextReveal delay={0.7}>
                BLANC
              </TextReveal>
            </h1>

            {/* Editorial rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="w-full max-w-[360px] origin-left mb-8"
            >
              <div className="editorial-rule" />
            </motion.div>

            {/* Tagline — word reveal */}
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(26px,4vw,42px)] font-semibold text-noir leading-[1.15] mb-5">
              <TextReveal delay={1}>
                Seu negócio merece ser encontrado.
              </TextReveal>
            </p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease }}
              className="text-[15px] text-gris leading-[1.8] mb-14 max-w-[440px]"
            >
              Criação de sites profissionais para negócios locais em São Paulo.
              Sites responsivos, otimizados para Google e prontos para atrair
              novos clientes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill btn-fill-or bg-noir text-blanc text-[12px] font-medium tracking-[0.06em] uppercase px-10 py-4 transition-colors duration-500"
              >
                <span>Solicitar Proposta</span>
              </a>
              <a
                href="#portfolio"
                className="link-hover text-noir text-[12px] font-medium tracking-[0.06em] uppercase flex items-center gap-3 py-4"
              >
                Ver portfólio
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="inline-block text-[16px]"
                >
                  ↓
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Stacked project previews with parallax */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <div className="relative w-[380px] h-[420px]">
              {/* Back card — rotated, parallax offset */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                initial={{ opacity: 0, y: 40, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 1, delay: 1, ease }}
                className="absolute top-4 -right-2 w-[300px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="bg-blanc flex items-center gap-1.5 px-3 py-1.5 border-b border-[#eee]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="ml-2 flex-1 h-[10px] bg-blanc-casse rounded-sm" />
                </div>
                <div className="relative overflow-hidden bg-blanc" style={{ height: 180 }}>
                  <iframe
                    src="https://zapfy.app/"
                    title="Zapfy preview"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    className="absolute top-0 left-0 pointer-events-none border-0"
                    style={{
                      width: "1440px",
                      height: "900px",
                      transform: `scale(${300 / 1440})`,
                      transformOrigin: "top left",
                    }}
                  />
                </div>
              </motion.div>

              {/* Middle card — slight tilt, different parallax */}
              <motion.div
                style={{ y: circleY }}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 1, delay: 1.2, ease }}
                className="absolute top-16 -left-4 w-[300px] shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="bg-blanc flex items-center gap-1.5 px-3 py-1.5 border-b border-[#eee]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="ml-2 flex-1 h-[10px] bg-blanc-casse rounded-sm" />
                </div>
                <div className="relative overflow-hidden bg-blanc" style={{ height: 180 }}>
                  <iframe
                    src="https://batos-chi.vercel.app/"
                    title="BatOS preview"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    className="absolute top-0 left-0 pointer-events-none border-0"
                    style={{
                      width: "1440px",
                      height: "900px",
                      transform: `scale(${300 / 1440})`,
                      transformOrigin: "top left",
                    }}
                  />
                </div>
              </motion.div>

              {/* Front card — centered, no rotation, strongest parallax */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4, ease }}
                className="absolute bottom-4 left-8 w-[320px] shadow-[0_16px_60px_rgba(0,0,0,0.12)] z-10"
              >
                <div className="bg-blanc flex items-center gap-1.5 px-3 py-1.5 border-b border-[#eee]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ddd]" />
                  <div className="ml-2 flex-1 h-[10px] bg-blanc-casse rounded-sm" />
                </div>
                <div className="relative overflow-hidden bg-blanc" style={{ height: 195 }}>
                  <iframe
                    src="https://eduboxs.vercel.app/"
                    title="Eduboxs preview"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    className="absolute top-0 left-0 pointer-events-none border-0"
                    style={{
                      width: "1440px",
                      height: "900px",
                      transform: `scale(${320 / 1440})`,
                      transformOrigin: "top left",
                    }}
                  />
                </div>
              </motion.div>

              {/* Accent dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8, ease }}
                className="absolute bottom-0 right-6 w-3 h-3 bg-noir z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-6 lg:left-16 hidden lg:flex items-center gap-3"
      >
        <motion.div
          animate={{ height: [20, 36, 20] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-px bg-noir/20"
        />
        <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-gris-clair">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
