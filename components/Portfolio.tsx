"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FadeIn, TextReveal } from "./TextReveal";

const projects = [
  {
    name: "Eduboxs",
    type: "E-commerce",
    caption: "Um ecommerce que simplifica a vida dos pais.",
    href: "https://eduboxs.vercel.app/",
    span: "md:col-span-7",
    accent: "#E8E8E8",
  },
  {
    name: "Zapfy",
    type: "Landing Page",
    caption: "Uma pagina de pré-cadastro para um aplicativo infantil promissor.",
    href: "https://zapfy.app/",
    span: "md:col-span-5",
    accent: "#DCDCDC",
  },
  {
    name: "BatOS",
    type: "Sistema Web",
    caption: "Um sistema operacional pessoal.",
    href: "https://batos-chi.vercel.app/",
    span: "md:col-span-5",
    accent: "#E2E2E2",
  },
  {
    name: "NC Marketing",
    type: "Site Institucional",
    caption: "A primeira tentativa de uma agência de marketing.",
    href: "https://nicolascunha-marketing.lovable.app",
    span: "md:col-span-7",
    accent: "#D8D8D8",
  },
];

function SitePreview({ href }: { href: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setScale(width / 1440);
    }
  }, []);

  useEffect(() => {
    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateScale]);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-10">
      <div ref={containerRef} className="w-full max-w-[90%] relative">
        {/* Browser bar */}
        <div className="bg-blanc flex items-center gap-1.5 px-3 py-2 border-b border-[#eee]">
          <div className="w-[6px] h-[6px] rounded-full bg-[#ddd]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#ddd]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#ddd]" />
          <div className="ml-3 flex-1 h-[14px] bg-blanc-casse rounded-sm" />
        </div>
        {/* Live preview */}
        <div
          className="relative overflow-hidden bg-blanc"
          style={{ height: Math.round(900 * scale) }}
        >
          <iframe
            src={href}
            title="Preview"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            className="absolute top-0 left-0 pointer-events-none border-0"
            style={{
              width: "1440px",
              height: "900px",
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        </div>
        <div className="absolute -bottom-2 left-2 right-2 h-4 bg-noir/[0.03] blur-sm -z-10" />
      </div>
    </div>
  );
}

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-blanc-casse py-28 lg:py-40 relative overflow-hidden"
    >
      {/* Decorative parallax element */}
      <motion.div
        style={{ y: decorY }}
        className="absolute -right-20 top-[20%] w-[300px] h-[300px] border border-noir/[0.03] rotate-45 hidden lg:block pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 relative">
        {/* Header */}
        <FadeIn className="flex items-end justify-between mb-16">
          <div>
            <p className="overline text-gris-clair mb-5">Prova</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[40px] font-semibold text-noir leading-[1.1]">
              <TextReveal>Sites que eu criei. Resultados reais.</TextReveal>
            </h2>
          </div>
          <div className="hidden md:block text-[11px] text-gris-clair tracking-[0.06em] uppercase">
            04 projetos
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease }}
              data-cursor-view
              className={`relative group cursor-pointer overflow-hidden block ${project.span}`}
              style={{ aspectRatio: "16/10" }}
            >
              {/* Background */}
              <div
                className="absolute inset-0"
                style={{ background: project.accent }}
              >
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Preview — slides up on hover */}
              <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[28%]">
                <SitePreview href={project.href} />
              </div>

              {/* Number */}
              <div className="absolute top-5 left-6 z-20 text-[11px] font-medium tracking-[0.1em] text-noir/25 group-hover:text-noir/40 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[28cqh]">
                0{i + 1}
              </div>

              {/* Description — anchored at bottom, revealed as preview slides up */}
              <div className="absolute bottom-0 left-0 right-0 bg-noir p-6 lg:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-blanc/35 mb-1.5">
                      {project.type}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-[24px] lg:text-[30px] font-light text-blanc tracking-[0.02em] leading-[1.1]">
                      {project.name}
                    </p>
                    <p className="text-[12px] text-blanc/40 mt-2 leading-[1.5] max-w-[320px]">
                      {project.caption}
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    className="rotate-[-45deg] flex-shrink-0 opacity-40"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
