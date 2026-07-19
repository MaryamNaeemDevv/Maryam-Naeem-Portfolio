"use client";

import dynamic from "next/dynamic";
import * as React from "react";
import { useMemo } from "react";

const Lightfall = dynamic(
  // prefer named export Lightfall, fallback to default
  async () => {
    // shadcn installer added a local Lightfall component at src/components/Lightfall.jsx
    // import the local file instead of a non-existent package
    const mod = (await import("../Lightfall")) as {
      Lightfall?: React.ComponentType<Props>;
      default?: React.ComponentType<Props>;
    };
    // some packages export under default; cast to the expected component type
    return (mod.Lightfall || mod.default) as React.ComponentType<Props>;
  },
  { ssr: false }
);

type Props = {
  colors?: string[];
  backgroundColor?: string;
  speed?: number;
  streakCount?: number;
  streakWidth?: number;
  streakLength?: number;
  density?: number;
  twinkle?: number;
  glow?: number;
  backgroundGlow?: number;
  zoom?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  mouseRadius?: number;
};

export function LightfallBackground({
  colors = ["#e61919", "#000000", "#4d1a1a"],
  backgroundColor = "#000000",
  speed = 0.5,
  streakCount = 2,
  streakWidth = 1,
  streakLength = 1,
  density = 0.6,
  twinkle = 1,
  glow = 1,
  backgroundGlow = 0.5,
  zoom = 3,
  opacity = 1,
  mouseInteraction = false,
  mouseStrength = 0.5,
  mouseRadius = 1,
}: Props) {
  // Ensure stable props object reference
  const cfg = useMemo(
    () => ({
      colors,
      backgroundColor,
      speed,
      streakCount,
      streakWidth,
      streakLength,
      density,
      twinkle,
      glow,
      backgroundGlow,
      zoom,
      opacity,
      mouseInteraction,
      mouseStrength,
      mouseRadius,
    }),
    [colors, backgroundColor, speed, streakCount, streakWidth, streakLength, density, twinkle, glow, backgroundGlow, zoom, opacity, mouseInteraction, mouseStrength, mouseRadius]
  );

  const lightfallElement = React.useMemo(() => {
    return (
      <div className="h-full w-full">
        {/* Lightfall will size to its container; keep it responsive */}
        {/* @ts-expect-error dynamic component may lack types at runtime */}
        <Lightfall {...cfg} style={{ width: "100%", height: "100%" }} />
      </div>
    );
  }, [cfg]);

  return (
    // place at z-0 so it sits above the section background but behind content
    <div className="absolute inset-0 z-0 pointer-events-none">
      {lightfallElement}
    </div>
  );
}
