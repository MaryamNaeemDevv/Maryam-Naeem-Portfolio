import { experience } from "@/data/experience";
import { SectionShell } from "@/components/ui/SectionShell";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import TiltedCard from "@/components/ui/TiltedCard";

export function Experience() {
  return (
    <SectionShell
      id="experience"
      label="Experience"
      title="Where I've grown"
      variant="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((item, index) => (
          <ScrollReveal key={`${item.role}-${item.org}`} delay={index * 0.08}>
            <TiltedCard className="h-full" rotateAmplitude={20} scaleOnHover={1.00} showTooltip={false} showMobileWarning={false}>
              <article className="flex h-full flex-col rounded-4xl p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{item.role}</h3>
                    <p className="mt-1 text-burgundy">{item.org}</p>
                  </div>
                  <span className="shrink-0 text-sm text-grey">{item.period}</span>
                </div>
                <p className="mt-4 flex-1 text-grey">{item.summary}</p>
                <span className="mt-6 self-end text-burgundy" aria-hidden="true">
                  ↗
                </span>
              </article>
            </TiltedCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionShell>
  );
}
