import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:maryam.naeem.iqbal@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/MaryamNaeemDevv",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maryam-naeemlinked/",
    icon: FaLinkedin,
  },
];

export function Contact() {
  return (
    <footer id="contact" className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grey">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-grey-light">
            Open to collaborations, internships, and ambitious AI-driven product ideas.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-grey/40 text-burgundy transition hover:border-burgundy hover:bg-burgundy hover:text-white"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>

          <p className="mt-12 text-sm text-grey">
            © {new Date().getFullYear()} Maryam. Built with Next.js &amp; Tailwind CSS.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
