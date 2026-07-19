"use client";

import { SkillIcon } from "@/components/icons/SkillIcon";
import {
  getSkillNode,
  skillCategories,
  skillEdges,
  skillNodes,
} from "@/data/skillsGraph";
import { SectionShell } from "@/components/ui/SectionShell";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LightfallBackground } from "@/components/ui/LightfallBackground";

const VIEWBOX = 100;

export function SkillsGraph() {
  return (
    <SectionShell
      id="skills"
      label="Skills"
      title="Connected toolkit"
      variant="dark"
    >
      {/* Background animation (absolute, non-interactive) */}
      <LightfallBackground />

      <ScrollReveal className="relative z-10">
        <h3 className="mb-8 font-display text-3xl font-bold text-white md:text-5xl">
          Skills
        </h3>
        <div className="mb-8 flex flex-wrap gap-2">
          {skillCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-grey/40 px-3 py-1 text-xs uppercase tracking-wide text-grey-light"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="relative aspect-[16/10] min-h-[360px] w-full overflow-hidden rounded-4xl border border-white/10 bg-black md:min-h-[480px]">
          <svg
            viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            {skillEdges.map(({ from, to }) => {
              const start = getSkillNode(from);
              const end = getSkillNode(to);
              return (
                <line
                  key={`${from}-${to}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#6E6E6E"
                  strokeWidth="0.35"
                  strokeOpacity="0.7"
                />
              );
            })}
          </svg>

          {skillNodes.map((node) => (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-grey/50 bg-black text-xl md:h-16 md:w-16 md:text-2xl">
                  <SkillIcon name={node.icon} className="text-burgundy" />
                </div>
                <span className="max-w-[5.5rem] text-[10px] leading-tight text-grey-light md:max-w-none md:text-xs">
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
