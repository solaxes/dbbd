type ContentSectionProps = {
  heading: string;
  body: string;
  index?: number;
};

export function ContentSection({ heading, body, index = 0 }: ContentSectionProps) {
  return (
    <section
      className={`card group p-6 sm:p-8 ${
        index % 2 === 1 ? "sm:translate-x-4" : ""
      }`}
    >
      <div className="accent-border">
        <span className="section-eyebrow mb-2 block opacity-70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="font-heading text-2xl text-foreground transition-colors group-hover:text-gold-dark sm:text-3xl">
          {heading}
        </h2>
        <p className="text-muted mt-4 leading-relaxed">{body}</p>
      </div>
    </section>
  );
}
