import { FiExternalLink } from "react-icons/fi";

type GitHubProjectPillProps = {
  name: string;
  description: string;
  href: string;
};

export function GitHubProjectPill({ name, description, href }: GitHubProjectPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-4xl border border-grey-light/80 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-burgundy/40 hover:shadow-[0_20px_60px_rgba(18,18,18,0.08)]"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-base font-semibold text-black">{name}</h4>
        <FiExternalLink className="h-4 w-4 text-grey transition group-hover:text-burgundy" />
      </div>
      <p className="text-sm leading-6 text-grey">{description || "A focused GitHub project worth exploring."}</p>
    </a>
  );
}
