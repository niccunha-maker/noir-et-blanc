"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  by?: "word" | "line";
  once?: boolean;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  by = "word",
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);

  if (by === "line") {
    const lines = children.split("\n");
    return (
      <span ref={ref} className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.1,
                ease,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  const words = children.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  amount = 30,
}: FadeInProps) {
  const dirMap = {
    up: { y: amount },
    down: { y: -amount },
    left: { x: amount },
    right: { x: -amount },
    none: {},
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = "",
  speed = 0.1,
}: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: speed * -100 }}
      viewport={{ once: false, margin: "200px" }}
      transition={{ type: "tween", ease: "linear" }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
