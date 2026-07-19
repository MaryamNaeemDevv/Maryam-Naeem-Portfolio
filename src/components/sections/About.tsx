import { SectionShell } from "@/components/ui/SectionShell";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <SectionShell id="about" label="About me" title="Background & focus" variant="light">
      <ScrollReveal>
        <p className="max-w-3xl text-lg leading-relaxed text-grey">
          I&apos;m a Computer Science student at FAST-NUCES Islamabad, currently
          interning in Full Stack Web Development. Beyond coursework, I&apos;m driven
          to build in AI and create my own opportunities rather than waiting for
          the perfect opening, combining engineering discipline with an
          entrepreneurial mindset.
        </p>
      </ScrollReveal>
    </SectionShell>
  );
}
