import Image from "next/image";
import Link from "next/link";
import { ArchiveImage } from "@/components/ArchiveImage";
import { FacebookSection } from "@/components/FacebookSection";
import { SaintCard } from "@/components/SaintCard";
import { babaBrahamDassPortrait, images, saints, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
        <ArchiveImage
          src={images.hero.src}
          fallbackSrc={images.hero.fallback}
          alt={site.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-end px-4 pb-16 text-center sm:min-h-[520px] sm:px-6 lg:px-8">
          <p className="font-heading mb-3 text-lg tracking-widest text-gold-light uppercase sm:text-xl">
            Welcome to
          </p>
          <h1 className="font-heading text-4xl font-normal text-white sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/the-path"
              className="rounded-sm bg-gradient-to-b from-gold-light to-gold-dark px-8 py-3 text-sm font-bold text-[#785510] shadow transition hover:from-gold-dark hover:to-gold-light"
            >
              Discover The Path
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border-2 border-white/80 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full shadow-[2px_3px_12px_rgba(0,0,0,0.2)] ring-4 ring-gold/30 sm:h-72 sm:w-72">
            <Image
              src={babaBrahamDassPortrait}
              alt="Baba Braham Dass Ji Maharaj"
              fill
              className="object-contain object-center bg-surface-alt p-2"
              sizes="288px"
              priority
            />
          </div>
          <div>
            <p className="font-heading text-sm tracking-widest text-gold uppercase">ਧੰਨ ਧੰਨ</p>
            <h2 className="font-heading mt-2 text-3xl text-foreground sm:text-4xl">
              Baba Braham Dass Ji Maharaj
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              The spiritual light in whose honour Dera Baba Braham Dass was established at
              Phillaur, Jalandhar — guiding seekers on the path of devotion, seva, and inner peace.
            </p>
            <Link
              href="/saints#baba-braham-dass-ji"
              className="mt-6 inline-block text-sm font-bold tracking-wide text-gold uppercase transition hover:text-gold-dark"
            >
              Read more →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-alt px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-2xl text-foreground sm:text-3xl">Our Saints</h2>
            <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
              The spiritual lineage of Dera Baba Braham Dass is carried forward by saints
              whose lives of devotion continue to inspire seekers on the path of truth.
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="mt-12 text-center">
            <Link
              href="/saints"
              className="text-sm font-bold tracking-wide text-gold uppercase transition hover:text-gold-dark"
            >
              Learn more about our saints →
            </Link>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <ArchiveImage
          src={images.homeBg.src}
          fallbackSrc={images.homeBg.fallback}
          alt=""
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl text-foreground sm:text-3xl">
            A Place of Peace and Devotion
          </h2>
          <p className="text-muted mt-6 leading-relaxed">
            Nestled in Phillaur, Jalandhar, the Dera welcomes all who seek spiritual
            guidance, inner peace, and the company of fellow devotees. Whether you come to
            pray, to serve, or simply to rest in sacred stillness—you are welcome here.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              href="/the-aim"
              className="font-heading text-lg text-gold transition hover:text-gold-dark"
            >
              The Aim
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/the-path"
              className="font-heading text-lg text-gold transition hover:text-gold-dark"
            >
              The Path
            </Link>
          </div>
        </div>
      </section>

      <FacebookSection />
    </>
  );
}
