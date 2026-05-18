import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { PageHero } from "@/components/PageHero";
import { images, thePath } from "@/lib/content";

export const metadata: Metadata = {
  title: thePath.title,
  description: thePath.subtitle,
};

export default function ThePathPage() {
  return (
    <>
      <PageHero
        title={thePath.title}
        subtitle={thePath.subtitle}
        image={images.homeBg}
      />
      <div className="page-container mx-auto max-w-3xl space-y-6 py-16 pt-20">
        {thePath.sections.map((section, index) => (
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
