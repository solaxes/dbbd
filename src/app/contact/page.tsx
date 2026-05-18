import type { Metadata } from "next";
import { FacebookPageEmbed } from "@/components/FacebookPageEmbed";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { facebook, images, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We welcome your questions and look forward to hearing from you"
        image={images.hero}
      />
      <div className="page-container grid gap-12 py-16 pt-20 lg:grid-cols-2 lg:gap-16">
        <div className="card p-6 sm:p-8">
          <h2 className="font-heading mb-2 text-2xl text-foreground">Get in Touch</h2>
          <p className="text-muted mb-8 text-sm">Reach us at the Dera or online.</p>
          <address className="space-y-6 text-muted not-italic">
            <div className="rounded-lg bg-surface-alt/80 p-4">
              <h3 className="section-eyebrow mb-2 text-[0.65rem]">Address</h3>
              <p className="leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.line3}
                <br />
                {site.address.country}
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="section-eyebrow mb-2 text-[0.65rem]">Email</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-gold transition hover:text-gold-dark"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <h3 className="section-eyebrow mb-2 text-[0.65rem]">Web</h3>
                <a
                  href={`https://${site.website}`}
                  className="font-medium text-gold transition hover:text-gold-dark"
                >
                  {site.website}
                </a>
              </div>
            </div>
            <div>
              <h3 className="section-eyebrow mb-2 text-[0.65rem]">Facebook</h3>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-gold transition hover:text-gold-dark"
              >
                Dera Baba Braham Dass
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </address>
        </div>

        <ContactForm />
      </div>

      <section className="section-full border-t border-border bg-gradient-to-b from-surface-alt to-surface py-16">
        <div className="page-container mx-auto max-w-2xl">
          <SectionHeader
            eyebrow="Social"
            title={`Follow ${site.name}`}
            description={facebook.about}
          />
          <div className="card overflow-hidden p-2">
            <FacebookPageEmbed height={400} />
          </div>
        </div>
      </section>
    </>
  );
}
