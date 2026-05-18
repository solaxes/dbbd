import Link from "next/link";
import { SaintImage } from "@/components/SaintImage";

type SaintCardProps = {
  name: string;
  image: string;
  imageFallback: string;
  href: string;
  title?: string;
};

export function SaintCard({ name, image, imageFallback, href, title }: SaintCardProps) {
  return (
    <article className="card group flex flex-col items-center overflow-hidden p-6 text-center">
      <Link href={href} className="block w-full max-w-[260px]">
        <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gold/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-alt">
            <SaintImage
              src={image}
              fallbackSrc={imageFallback}
              alt={name}
              className={
                image.includes("baba-braham-dass")
                  ? "object-contain object-center p-3 transition-transform duration-500 group-hover:scale-105"
                  : "object-cover object-top transition-transform duration-500 group-hover:scale-105"
              }
              sizes="(max-width: 768px) 100vw, 260px"
            />
          </div>
        </div>
      </Link>
      <h2 className="font-heading mt-6 text-xl font-medium text-foreground">
        <Link href={href} className="transition-colors hover:text-gold">
          {name}
        </Link>
      </h2>
      {title && (
        <p className="text-muted mt-1.5 text-sm font-medium tracking-wide">{title}</p>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-gold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100">
        Learn more
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </article>
  );
}
