"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

type SplitTextProps = {
  as?: "div" | "h1" | "p" | "span";
  children: string;
  splitType?: "chars";
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  threshold?: number;
  className?: string;
  textAlign?: "left" | "center" | "right";
};

type SplitChar = {
  char: string;
  key: string;
};

export function SplitText({
  as: Component = "div",
  children,
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  duration = 0.6,
  delay = 0,
  stagger = 0.035,
  ease = "power3.out",
  threshold = 0.2,
  className = "",
  textAlign = "left",
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const chars = useMemo<SplitChar[]>(() => {
    if (splitType !== "chars") {
      return [{ char: children, key: "text-0" }];
    }
    return children.split("").map((char, index) => ({ char, key: `${char}-${index}` }));
  }, [children, splitType]);

  useEffect(() => {
    const current = containerRef.current;
    if (!current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const targets = current.querySelectorAll(".split-text-char");
        if (targets.length === 0) return;

        gsap.fromTo(targets, from, {
          ...to,
          duration,
          delay,
          ease,
          stagger,
          overwrite: true,
        });

        setHasAnimated(true);
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, ease, hasAnimated, stagger, threshold, from, to]);

  return (
    <Component
      ref={(node) => {
        containerRef.current = node;
      }}
      className={className}
      style={{
        textAlign,
        display: Component === "span" ? "inline-block" : undefined,
      }}
    >
      {chars.map(({ char, key }) => (
        <span key={key} className="inline-block split-text-char">
          {char}
        </span>
      ))}
    </Component>
  );
}
