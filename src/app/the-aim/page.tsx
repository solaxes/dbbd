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
      <PageHero
        title={theAim.title}
        subtitle={theAim.subtitle}
        image={images.hero}
      />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
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
