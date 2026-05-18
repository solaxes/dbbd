import type { Metadata } from "next";
import { SaintImage } from "@/components/SaintImage";
import { PageHero } from "@/components/PageHero";
import { images, saints } from "@/lib/content";

export const metadata: Metadata = {
  title: "Saints",
  description:
    "The spiritual lineage of Dera Baba Braham Dass — Baba Braham Dass Ji Maharaj, Baba Maule Shah Ji, and Baba Rura Ram Ji.",
};

export default function SaintsPage() {
  return (
    <>
      <PageHero
        title="Saints"
        subtitle="Honouring the masters who lit the lamp of devotion"
        image={images.homeBg}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-muted mb-12 text-center leading-relaxed">
          The saints of our Dera walked the path of truth with humility and courage.
          Their lives remain a beacon for all who seek the Divine.
        </p>

        <div className="space-y-20">
          {saints.map((saint, index) => (
            <article
              key={saint.slug}
              id={saint.slug}
              className="scroll-mt-24 border-b border-border pb-20 last:border-0"
            >
              <div
                className={`flex flex-col gap-8 md:flex-row md:items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-sm shadow-[2px_3px_7px_rgba(0,0,0,0.25)] md:mx-0">
                  <div className="relative aspect-[3/4] w-full bg-surface-alt">
                    <SaintImage
                      src={saint.image}
                      fallbackSrc={saint.imageFallback}
                      alt={saint.name}
                      className={
                        saint.slug === "baba-braham-dass-ji"
                          ? "object-contain object-center p-3"
                          : "object-cover object-top"
                      }
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading mb-2 text-2xl text-foreground sm:text-3xl">
                    {saint.name}
                  </h2>
                  {"title" in saint && saint.title && (
                    <p className="text-gold mb-4 text-sm font-medium">{saint.title}</p>
                  )}
                  <p className="text-muted mb-6 leading-relaxed italic">{saint.intro}</p>
                  <div className="space-y-4">
                    {saint.biography.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
