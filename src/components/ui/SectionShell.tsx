type SectionShellProps = {
  id: string;
  label: string;
  title: string;
  variant: "dark" | "light" | "muted";
  titleClassName?: string;
  children: React.ReactNode;
};

const variantStyles = {
  dark: "bg-black text-white",
  // Keep light and muted visually consistent with dark (black background, white text)
  light: "bg-black text-white",
  muted: "bg-black text-white",
};

export function SectionShell({
  id,
  label,
  title,
  variant,
  titleClassName = "mb-12 font-display text-3xl font-bold md:text-5xl",
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${variantStyles[variant]}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-grey">
          {label}
        </p>
        <h2 className={titleClassName}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
