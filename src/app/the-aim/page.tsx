import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { images, theAim } from "@/lib/content";

export const metadata: Metadata = {
  title: theAim.title,
  description: theAim.subtitle,
};

export default function TheAimPage() {
  return (
    <>
      <PageHero title={theAim.title} subtitle={theAim.subtitle} image={images.hero} />
      <div className="page-container mx-auto max-w-3xl space-y-6 py-16 pt-20">
        {theAim.sections.map((section, index) => (
          <ContentSection
            key={section.heading}
            heading={section.heading}
            body={section.body}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
