import type { Metadata } from "next";
import { FacebookPageEmbed } from "@/components/FacebookPageEmbed";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
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
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading mb-6 text-2xl text-foreground">Get in Touch</h2>
          <address className="space-y-6 text-muted not-italic">
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-wide text-foreground uppercase">
                Address
              </h3>
              <p className="leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
                <br />
                {site.address.country}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-wide text-foreground uppercase">
                Email
              </h3>
              <a href={`mailto:${site.email}`} className="text-gold hover:text-gold-dark">
                {site.email}
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-wide text-foreground uppercase">
                Website
              </h3>
              <a
                href={`https://${site.website}`}
                className="text-gold hover:text-gold-dark"
              >
                {site.website}
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-wide text-foreground uppercase">
                Facebook
              </h3>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-dark"
              >
                Dera Baba Braham Dass on Facebook
              </a>
            </div>
          </address>
        </div>

        <ContactForm />
      </div>

      <section className="border-t border-border bg-surface-alt px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading mb-2 text-center text-2xl text-foreground">
            Follow {site.name}
          </h2>
          <p className="text-muted mb-6 text-center text-sm">{facebook.about}</p>
          <div className="overflow-hidden rounded-sm border border-border bg-white p-2 shadow-sm">
            <FacebookPageEmbed height={400} />
          </div>
        </div>
      </section>
    </>
  );
}
