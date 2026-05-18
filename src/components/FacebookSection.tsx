import Image from "next/image";
import Link from "next/link";
import { FacebookPageEmbed } from "@/components/FacebookPageEmbed";
import { facebook, site, spiritualLineage } from "@/lib/content";

export function FacebookSection() {
  return (
    <section className="border-t border-border bg-surface-alt px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <h2 className="font-heading text-2xl text-foreground sm:text-3xl">
            Connect on Facebook
          </h2>
          <p className="text-muted mt-4 leading-relaxed">{facebook.about}</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-gold shadow-md">
              <Image
                src={facebook.profileImage}
                alt={facebook.title}
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            <div>
              <p className="font-heading text-lg text-foreground">{facebook.title}</p>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-medium text-gold transition hover:text-gold-dark"
              >
                Visit our Facebook page →
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-bold tracking-wide text-foreground uppercase">
              Spiritual Lineage
            </h3>
            <ol className="space-y-2 border-l-2 border-gold pl-4">
              {spiritualLineage.map((name, index) => (
                <li key={name} className="text-muted text-sm leading-relaxed">
                  <span className="mr-2 font-medium text-gold">{index + 1}.</span>
                  {name}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-border bg-white p-2 shadow-sm">
          <FacebookPageEmbed height={480} />
        </div>
      </div>
    </section>
  );
}
