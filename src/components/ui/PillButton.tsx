import Link from "next/link";

type PillButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
  external?: boolean;
};

const variantStyles = {
  primary: "bg-burgundy text-white hover:opacity-90",
  outline:
    "border border-grey-light/40 text-white hover:border-burgundy hover:text-burgundy",
  ghost:
    "border border-black/10 text-black hover:border-burgundy hover:text-burgundy",
};

export function PillButton({
  href,
  variant = "primary",
  children,
  external = false,
}: PillButtonProps) {
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${variantStyles[variant]}`;

  if (external || href.startsWith("http") || href.endsWith(".pdf")) {
    return (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
