"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// PCB substrate: a static dot-pitch grid plus a faint copper "probe light"
// that trails the pointer. Reduced-motion → grid only, probe stays parked.
const AmbientBackground = () => {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 1 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 1 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <div className="substrate" aria-hidden="true">
      <div className="substrate-grid" />
      <motion.div className="substrate-probe" style={{ x: sx, y: sy }} />
    </div>
  );
};

export default AmbientBackground;
