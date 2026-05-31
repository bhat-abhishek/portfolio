"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const AmbientBackground = () => {
  // pointer position, normalized to -0.5..0.5 from viewport center
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // laggy springs → the "magnetic" trailing feel
  const springConfig = { stiffness: 40, damping: 18, mass: 1 };
  const sx = useSpring(mx, springConfig);
  const sy = useSpring(my, springConfig);

  // per-blob offsets (px) — different magnitudes & signs give organic parallax
  const ax = useTransform(sx, (v) => v * 120);
  const ay = useTransform(sy, (v) => v * 120);
  const bx = useTransform(sx, (v) => v * -95);
  const by = useTransform(sy, (v) => v * -95);
  const cx = useTransform(sx, (v) => v * 75);
  const cy = useTransform(sy, (v) => v * 75);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // respect reduced-motion: no pointer tracking
    }
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div className="absolute inset-0" style={{ x: ax, y: ay }}>
        <div className="ambient-blob blob-a" />
      </motion.div>
      <motion.div className="absolute inset-0" style={{ x: bx, y: by }}>
        <div className="ambient-blob blob-b" />
      </motion.div>
      <motion.div className="absolute inset-0" style={{ x: cx, y: cy }}>
        <div className="ambient-blob blob-c" />
      </motion.div>
    </div>
  );
};

export default AmbientBackground;
