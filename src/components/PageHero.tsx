import { ArchiveImage } from "@/components/ArchiveImage";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: { src: string; fallback: string };
  overlay?: boolean;
};

export function PageHero({ title, subtitle, image, overlay = true }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {image ? (
        <>
          <ArchiveImage
            src={image.src}
            fallbackSrc={image.fallback}
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {overlay && <div className="absolute inset-0 bg-black/45" />}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gold-dark via-gold to-gold-light" />
      )}
      <div className="relative mx-auto flex min-h-[220px] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[280px] sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
