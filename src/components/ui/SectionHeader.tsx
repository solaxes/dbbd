type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-12 max-w-2xl ${alignClass}`}>
      {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-heading text-3xl text-foreground sm:text-4xl">{title}</h2>
      <div className={`gold-line ${align === "left" ? "gold-line-left" : ""}`} />
      {description && (
        <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">{description}</p>
      )}
    </header>
  );
}
