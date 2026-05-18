import Image from "next/image";
import { ArchiveImage } from "@/components/ArchiveImage";

type SaintImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SaintImage({
  src,
  fallbackSrc,
  alt,
  className = "object-cover object-top",
  sizes = "(max-width: 768px) 100vw, 300px",
  priority = false,
}: SaintImageProps) {
  const isLocal = src.startsWith("/");

  if (isLocal) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <ArchiveImage
      src={src}
      fallbackSrc={fallbackSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
