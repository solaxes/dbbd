import type { Metadata } from "next";
import { SaintImage } from "@/components/SaintImage";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      <div className="page-container mx-auto max-w-4xl py-16 pt-20">
        <SectionHeader
          eyebrow="Spiritual Masters"
          title="Lives of Devotion"
          description="The saints of our Dera walked the path of truth with humility and courage. Their lives remain a beacon for all who seek the Divine."
        />

        <div className="space-y-12">
          {saints.map((saint, index) => (
            <article
              key={saint.slug}
              id={saint.slug}
              className="card scroll-mt-28 overflow-hidden p-6 sm:p-10"
            >
              <div
                className={`flex flex-col gap-10 md:flex-row md:items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-xl bg-surface-alt md:mx-0">
                  <div className="relative aspect-[3/4] w-full">
                    <SaintImage
                      src={saint.image}
                      fallbackSrc={saint.imageFallback}
                      alt={saint.name}
                      className={
                        saint.slug === "baba-braham-dass-ji"
                          ? "object-contain object-center p-4"
                          : "object-cover object-top"
                      }
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="section-eyebrow mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
                    {saint.name}
                  </h2>
                  {"title" in saint && saint.title && (
                    <p className="mt-2 text-sm font-medium tracking-wide text-gold">
                      {saint.title}
                    </p>
                  )}
                  <div className="gold-line gold-line-left my-5" />
                  <p className="text-muted mb-6 text-lg leading-relaxed italic">{saint.intro}</p>
                  <div className="space-y-4 border-t border-border pt-6">
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
