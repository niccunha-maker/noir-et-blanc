"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5519991591265?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Noir%20%26%20Blanc%20e%20gostaria%20de%20solicitar%20uma%20proposta.";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past 60% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-noir/95 backdrop-blur-md border-t border-blanc/[0.06] py-3 px-6 md:hidden"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-or text-noir text-[11px] font-bold tracking-[0.08em] uppercase py-3.5 transition-opacity duration-300 active:opacity-80"
          >
            Solicitar proposta gratuita
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
