"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ArchiveImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  fallbackSrc: string;
  alt: string;
};

export function ArchiveImage({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}: ArchiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      unoptimized
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
