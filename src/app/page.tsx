import Image from "next/image";
import Link from "next/link";
import { ArchiveImage } from "@/components/ArchiveImage";
import { FacebookSection } from "@/components/FacebookSection";
import { SaintCard } from "@/components/SaintCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { babaBrahamDassPortrait, images, saints, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero — full viewport, header overlays */}
      <section className="section-full relative min-h-dvh w-full overflow-hidden">
        <ArchiveImage
          src={images.hero.src}
          fallbackSrc={images.hero.fallback}
          alt={site.name}
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/40 to-foreground/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,162,39,0.18)_0%,transparent_60%)]" />

        <div className="page-container relative flex min-h-dvh flex-col items-center justify-center py-28 text-center">
          <p className="section-eyebrow animate-fade-in-up mb-4 text-gold-light">
            Welcome to
          </p>
          <h1 className="font-heading animate-fade-in-up animate-delay-100 max-w-4xl text-5xl font-medium leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {site.name}
          </h1>
          <div className="gold-line animate-fade-in-up animate-delay-200 my-6 opacity-90" />
          <p className="animate-fade-in-up animate-delay-200 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {site.tagline}
          </p>
          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/the-path" variant="primary">
              Discover The Path
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
            <div className="h-2 w-1 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* Portrait */}
      <section className="section-full relative overflow-hidden bg-surface py-20">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/5 blur-3xl" />

        <div className="page-container relative flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-20">
          <div className="portrait-glow relative h-72 w-72 shrink-0 overflow-hidden rounded-full sm:h-80 sm:w-80">
            <Image
              src={babaBrahamDassPortrait}
              alt="Baba Braham Dass Ji Maharaj"
              fill
              className="object-contain object-center bg-surface-alt p-3"
              sizes="320px"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <p className="section-eyebrow mb-3">ਧੰਨ ਧੰਨ</p>
            <h2 className="font-heading text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Baba Braham Dass Ji Maharaj
            </h2>
            <div className="gold-line gold-line-left my-5" />
            <p className="text-muted text-lg leading-relaxed lg:text-xl">
              The spiritual light in whose honour Dera Baba Braham Dass was established at
              Phillaur, Jalandhar — guiding seekers on the path of devotion, seva, and inner peace.
            </p>
            <Button href="/saints#baba-braham-dass-ji" variant="outline" className="mt-8">
              Read more
            </Button>
          </div>
        </div>
      </section>

      {/* Saints */}
      <section className="section-full bg-gradient-to-b from-surface-alt to-surface py-20">
        <div className="page-container">
          <SectionHeader
            eyebrow="Our Lineage"
            title="The Saints"
            description="The spiritual lineage of Dera Baba Braham Dass is carried forward by saints whose lives of devotion continue to inspire seekers on the path of truth."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {saints.map((saint) => (
              <SaintCard
                key={saint.slug}
                name={saint.name}
                image={saint.image}
                imageFallback={saint.imageFallback}
                href={`/saints#${saint.slug}`}
                title={"title" in saint ? saint.title : undefined}
              />
            ))}
          </div>
          <p className="mt-14 text-center">
            <Button href="/saints" variant="outline">
              View all saints
            </Button>
          </p>
        </div>
      </section>

      {/* Peace section */}
      <section className="section-full relative overflow-hidden py-24">
        <ArchiveImage
          src={images.homeBg.src}
          fallbackSrc={images.homeBg.fallback}
          alt=""
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface" />

        <div className="page-container relative text-center">
          <SectionHeader
            eyebrow="The Dera"
            title="A Place of Peace and Devotion"
            description="Nestled in Phillaur, Jalandhar, the Dera welcomes all who seek spiritual guidance, inner peace, and the company of fellow devotees. Whether you come to pray, to serve, or simply to rest in sacred stillness—you are welcome here."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/the-aim" variant="outline">
              The Aim
            </Button>
            <Button href="/the-path" variant="primary">
              The Path
            </Button>
          </div>
        </div>
      </section>

      <FacebookSection />
    </>
  );
}
