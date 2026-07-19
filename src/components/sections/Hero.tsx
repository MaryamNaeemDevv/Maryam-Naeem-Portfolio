import { HeroPhotoSlot } from "@/components/ui/HeroPhotoSlot";
import { PillButton } from "@/components/ui/PillButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { LightfallBackground } from "@/components/ui/LightfallBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black pt-28 text-white md:pt-32">
      <LightfallBackground />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">
            Portfolio
          </p>
          <div className="mt-4">
            <p className="text-xl font-medium text-[#6E6E6E] md:text-2xl">
              Hi, I&apos;m
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[0.95] text-[#6B1E2C] md:text-7xl lg:text-8xl">
              <SplitText
                as="span"
                className=""
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                duration={0.6}
                delay={0.05}
                stagger={0.04}
                ease="power3.out"
                threshold={0.2}
                textAlign="left"
              >
                Maryam
              </SplitText>
              <br />
              <SplitText
                as="span"
                className=""
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                duration={0.6}
                delay={0.15}
                stagger={0.04}
                ease="power3.out"
                threshold={0.2}
                textAlign="left"
              >
                Naeem
              </SplitText>
            </h1>
          </div>
          <p className="mt-6 text-xl text-grey-light md:text-2xl">
            Crafting Full-Stack &amp; AI Solutions
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-grey md:text-lg">
            Building thoughtful web products and exploring AI, from full-stack
            applications to intelligent systems that create real impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillButton href="#projects" variant="primary">
              View Work
            </PillButton>
            <PillButton href="#contact" variant="outline">
              Contact Me
            </PillButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:justify-self-end">
          <HeroPhotoSlot />
        </ScrollReveal>
      </div>
    </section>
  );
}
