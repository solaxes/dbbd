import Image from "next/image";
import Link from "next/link";
import { FacebookPageEmbed } from "@/components/FacebookPageEmbed";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { facebook, site, spiritualLineage } from "@/lib/content";

export function FacebookSection() {
  return (
    <section className="section-full bg-gradient-to-b from-surface-alt to-surface py-20">
      <div className="page-container">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Connect on Facebook"
          description={facebook.about}
          align="center"
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="card card-elevated p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <div className="portrait-glow relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={facebook.profileImage}
                  alt={facebook.title}
                  fill
                  className="object-contain object-center bg-surface-alt p-1"
                  sizes="96px"
                />
              </div>
              <div>
                <p className="font-heading text-xl text-foreground">{site.name}</p>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gold transition hover:text-gold-dark"
                >
                  Visit our page
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="section-eyebrow mb-4">Spiritual Lineage</h3>
              <ol className="space-y-3">
                {spiritualLineage.map((name, index) => (
                  <li
                    key={name}
                    className="flex items-start gap-3 rounded-lg bg-surface-alt/80 px-4 py-3 transition hover:bg-gold/5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold-dark">
                      {index + 1}
                    </span>
                    <span className="text-muted pt-0.5 text-sm leading-relaxed">{name}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="card overflow-hidden p-2">
            <FacebookPageEmbed height={480} />
          </div>
        </div>
      </div>
    </section>
  );
}
