import Link from "next/link";
import { SaintImage } from "@/components/SaintImage";

type SaintCardProps = {
  name: string;
  image: string;
  imageFallback: string;
  href: string;
  title?: string;
  featured?: boolean;
};

export function SaintCard({
  name,
  image,
  imageFallback,
  href,
  title,
  featured,
}: SaintCardProps) {
  return (
    <article className="group flex flex-col items-center text-center">
      <Link href={href} className="block w-full max-w-[280px]">
        <div className="overflow-hidden rounded-sm shadow-[2px_3px_7px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="relative aspect-[3/4] w-full bg-surface-alt">
            <SaintImage
              src={image}
              fallbackSrc={imageFallback}
              alt={name}
              className={
                image.includes("baba-braham-dass")
                  ? "object-contain object-center p-2"
                  : "object-cover object-top"
              }
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>
      </Link>
      {featured && (
        <span className="mt-6 inline-block rounded-sm bg-gold/15 px-3 py-1 text-xs font-bold tracking-wide text-gold uppercase">
          Present Gaddi Nashin
        </span>
      )}
      <h2 className="font-heading mt-4 text-xl font-semibold text-foreground">
        <Link href={href} className="transition-colors hover:text-gold">
          {name}
        </Link>
      </h2>
      {title && <p className="text-muted mt-2 text-sm">{title}</p>}
    </article>
  );
}
