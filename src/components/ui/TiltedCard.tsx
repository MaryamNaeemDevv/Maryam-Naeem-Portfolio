"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltedCardProps = {
  children: React.ReactNode;
  className?: string;
  rotateAmplitude?: number; // degrees
  scaleOnHover?: number;
  showTooltip?: boolean;
  showMobileWarning?: boolean;
  overlayColor?: string; // css color for gradient overlay
};

export function TiltedCard({
  children,
  className = "",
  rotateAmplitude = 8,
  scaleOnHover = 1.04,
  showTooltip = false,
  showMobileWarning = false,
  overlayColor = "rgba(108, 39, 67, 0.14)",
}: TiltedCardProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const isTouchDevice = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  }, []);

  // Motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const overlayOpacity = useMotionValue(0);

  // smooth springs for natural motion
  const springConfig = { damping: 20, stiffness: 160 };
  const rotXSpring = useSpring(rotateX, springConfig);
  const rotYSpring = useSpring(rotateY, springConfig);
  const scaleSpring = useSpring(scale, { damping: 24, stiffness: 300 });
  const overlaySpring = useSpring(overlayOpacity, { damping: 20, stiffness: 300 });

  // subtle shadow intensity derived from scale
  const shadow = useTransform(scaleSpring, (s) =>
    `0 8px 30px rgba(61,15,32,${Math.min(0.35, (s - 1) * 0.7 + 0.08)})`
  );

  React.useEffect(() => {
    if (prefersReducedMotion || isTouchDevice) {
      // keep everything neutral on reduced-motion or touch devices
      rotateX.set(0);
      rotateY.set(0);
      scale.set(1);
      overlayOpacity.set(0);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    let rect = el.getBoundingClientRect();

    const clamp = (v: number, a: number) => Math.max(-a, Math.min(a, v));

    const handlePointerMove = (e: PointerEvent) => {
      if (!rect || rect.width === 0) rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width - 0.5) * 2; // -1..1
      const py = (y / rect.height - 0.5) * 2; // -1..1

      // invert X for more natural tilt
      const ryRaw = -px * (rotateAmplitude / 2);
      const rxRaw = py * rotateAmplitude;

      const ry = clamp(ryRaw, rotateAmplitude);
      const rx = clamp(rxRaw, rotateAmplitude);

      rotateX.set(rx);
      rotateY.set(ry);
      scale.set(scaleOnHover);
      overlayOpacity.set(1);
    };

    const handlePointerLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      scale.set(1);
      overlayOpacity.set(0);
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);
    el.addEventListener("pointercancel", handlePointerLeave);
    window.addEventListener("resize", () => (rect = el.getBoundingClientRect()));

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      el.removeEventListener("pointercancel", handlePointerLeave);
    };
  }, [rotateAmplitude, scaleOnHover, prefersReducedMotion, isTouchDevice, rotateX, rotateY, scale, overlayOpacity]);

  // reference unused props so linters don't complain; these are intentionally no-op toggles
  React.useEffect(() => {
    void showTooltip;
    void showMobileWarning;
  }, [showTooltip, showMobileWarning]);

  // determine final styles; preserve existing layout by default and only change visual container
  return (
    <motion.div
      ref={containerRef}
      className={`tilt-card ${className}`}
      style={{
        perspective: 1000,
        rotateX: rotXSpring,
        rotateY: rotYSpring,
        scale: scaleSpring,
        boxShadow: shadow,
        transformStyle: "preserve-3d",
        willChange: "transform, box-shadow, opacity",
      }}
      initial={false}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      aria-hidden={false}
    >
      {/* card visual: burgundy glassmorphism background */}
      <div
        className="relative h-full w-full rounded-4xl border"
        style={{
          background: "rgba(109,31,59,0.18)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 8px 30px rgba(61,15,32,0.08)",
        }}
      >
        {/* overlay gradient */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 24,
            background: `linear-gradient(180deg, ${overlayColor}, transparent)`,
            opacity: overlaySpring,
            pointerEvents: "none",
          }}
        />

        {/* content container keeps original padding/layout */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </motion.div>
  );
}

export default TiltedCard;
