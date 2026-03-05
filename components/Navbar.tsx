"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5519991591265?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Noir%20%26%20Blanc%20e%20gostaria%20de%20solicitar%20uma%20proposta.";
const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-blanc/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 flex items-center justify-between h-[80px]">
          {/* Text logo */}
          <a
            href="#"
            className="relative z-50 font-[family-name:var(--font-cormorant)] text-[18px] font-light tracking-[0.12em] group"
          >
            <span className={menuOpen ? "text-blanc" : "text-noir"}>
              N
              <span className="opacity-20 group-hover:opacity-50 transition-opacity duration-500">
                &
              </span>
              B
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease }}
                className="link-hover text-[11px] font-medium tracking-[0.08em] uppercase text-gris hover:text-noir transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="w-px h-4 bg-argent" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill btn-fill-or bg-noir text-blanc text-[11px] font-medium tracking-[0.06em] uppercase px-6 py-2.5 transition-colors duration-500"
              >
                <span>Solicitar Proposta</span>
              </a>
            </motion.div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={`block h-[1px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen
                  ? "w-5 rotate-45 translate-y-[3px] bg-blanc"
                  : "w-5 bg-noir"
              }`}
            />
            <span
              className={`block h-[1px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen
                  ? "w-5 -rotate-45 -translate-y-[3px] bg-blanc"
                  : "w-3.5 bg-noir"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 bg-noir"
          >
            <div className="flex flex-col items-start justify-center h-full px-10">
              {navLinks.map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      duration: 0.6,
                      ease,
                    }}
                    className="block font-[family-name:var(--font-cormorant)] text-[52px] font-light text-blanc tracking-[0.03em] leading-[1.3] hover:text-or transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}

              <div className="overflow-hidden mt-14">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "110%" }}
                  transition={{ delay: 0.4, duration: 0.6, ease }}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block border-b border-blanc/20 text-blanc text-[12px] font-medium tracking-[0.1em] uppercase pb-2 hover:border-or hover:text-or transition-colors duration-300"
                >
                  Solicitar Proposta
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 left-10 right-10 flex items-center justify-between text-[10px] text-blanc/15 tracking-[0.1em] uppercase"
              >
                <span>Noir & Blanc</span>
                <span>São Paulo, SP</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
