type ContentSectionProps = {
  heading: string;
  body: string;
  index?: number;
};

export function ContentSection({ heading, body, index = 0 }: ContentSectionProps) {
  return (
    <section
      className={`rounded-sm border border-border bg-white p-6 shadow-sm sm:p-8 ${
        index % 2 === 1 ? "sm:ml-8" : ""
      }`}
    >
      <h2 className="font-heading mb-4 text-xl text-foreground sm:text-2xl">{heading}</h2>
      <p className="text-muted leading-relaxed">{body}</p>
    </section>
  );
}
