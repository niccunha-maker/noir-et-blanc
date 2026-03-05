"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">(
    "default"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: -100, y: -100 });

  const springConfig = { damping: 40, stiffness: 800, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mql.matches);
    if (!mql.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const updateCursor = () => {
      cursorX.set(mousePos.current.x);
      cursorY.set(mousePos.current.y);
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const onMouseEnterInteractive = () => setCursorState("hover");
    const onMouseLeaveInteractive = () => setCursorState("default");
    const onMouseEnterView = () => setCursorState("view");
    const onMouseLeaveView = () => setCursorState("default");
    const onMouseLeaveWindow = () => setIsVisible(false);
    const onMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    rafRef.current = requestAnimationFrame(updateCursor);

    // Observe DOM for interactive elements
    const attachListeners = () => {
      document
        .querySelectorAll("a, button, [data-cursor-hover]")
        .forEach((el) => {
          el.addEventListener("mouseenter", onMouseEnterInteractive);
          el.addEventListener("mouseleave", onMouseLeaveInteractive);
        });
      document.querySelectorAll("[data-cursor-view]").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterView);
        el.addEventListener("mouseleave", onMouseLeaveView);
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      document
        .querySelectorAll("a, button, [data-cursor-hover]")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnterInteractive);
          el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        });
      document.querySelectorAll("[data-cursor-view]").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterView);
        el.removeEventListener("mouseleave", onMouseLeaveView);
      });
    };
  }, [cursorX, cursorY, isVisible, isFinePointer]);

  if (!isFinePointer) return null;

  const size =
    cursorState === "view" ? 80 : cursorState === "hover" ? 48 : 12;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 500 }}
        className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          borderRadius: "50%",
          background:
            cursorState === "default"
              ? "white"
              : cursorState === "view"
              ? "rgba(255,255,255,0.9)"
              : "transparent",
          border:
            cursorState === "hover"
              ? "1.5px solid white"
              : cursorState === "view"
              ? "none"
              : "none",
        }}
      >
        {cursorState === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-bold tracking-[0.15em] uppercase text-noir"
          >
            VER
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
