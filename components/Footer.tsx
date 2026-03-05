"use client";

import { FadeIn } from "./TextReveal";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/_nicolas_cunha/" },
  { label: "WhatsApp", href: "https://wa.me/5519991591265?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Noir%20%26%20Blanc%20e%20gostaria%20de%20solicitar%20uma%20proposta." },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nicolas-cunha-7419bb334/" },
];

export default function Footer() {
  return (
    <footer className="bg-noir">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div className="h-px bg-blanc/[0.06]" />

        <FadeIn>
          <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="font-[family-name:var(--font-cormorant)] text-[16px] font-light tracking-[0.12em] text-blanc/30">
                N<span className="opacity-40">&</span>B
              </span>
              <div className="w-px h-3 bg-blanc/8 hidden md:block" />
              <span className="text-[11px] text-blanc/15 tracking-[0.02em]">
                &copy; 2026 Noir &amp; Blanc. Todos os direitos reservados.
              </span>
            </div>

            <div className="flex items-center gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-[11px] text-blanc/25 hover:text-blanc/60 tracking-[0.04em] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
