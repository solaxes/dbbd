import { ArchiveImage } from "@/components/ArchiveImage";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: { src: string; fallback: string };
  overlay?: boolean;
};

export function PageHero({ title, subtitle, image, overlay = true }: PageHeroProps) {
  return (
    <section className="section-full relative w-full overflow-hidden">
      {image ? (
        <>
          <ArchiveImage
            src={image.src}
            fallbackSrc={image.fallback}
            alt=""
            fill
            className="object-cover object-center scale-105"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gold-dark via-gold to-gold-light" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
      <div className="page-container relative flex min-h-[min(50vh,420px)] flex-col items-center justify-center pt-24 pb-16 text-center sm:min-h-[360px]">
        <p className="section-eyebrow mb-4 text-gold-light/90">Dera Baba Braham Dass</p>
        <h1 className="font-heading animate-fade-in-up text-4xl font-medium tracking-wide text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-in-up animate-delay-100 mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        <div className="gold-line mt-6 opacity-80" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
