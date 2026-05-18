"use client";

import { useEffect } from "react";
import { facebook } from "@/lib/content";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (node?: HTMLElement) => void } };
    fbAsyncInit?: () => void;
  }
}

type FacebookPageEmbedProps = {
  /** Header-only embed — fits footer height. Timeline shows full feed. */
  variant?: "compact" | "timeline";
  height?: number;
  className?: string;
};

export function FacebookPageEmbed({
  variant = "timeline",
  height,
  className = "",
}: FacebookPageEmbedProps) {
  const compact = variant === "compact";
  const resolvedHeight = height ?? (compact ? 130 : 500);
  const tabs = compact ? "" : "timeline";

  useEffect(() => {
    const parse = () => window.FB?.XFBML.parse();

    if (document.getElementById("facebook-jssdk")) {
      parse();
      return;
    }

    window.fbAsyncInit = parse;

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v21.0";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [variant]);

  return (
    <div className={className}>
      <div id="fb-root" />
      <div
        className="fb-page max-w-full [&_span]:!align-top"
        data-href={facebook.pageUrl}
        data-tabs={tabs}
        data-width=""
        data-height={resolvedHeight}
        data-small-header={compact ? "true" : "false"}
        data-adapt-container-width="true"
        data-hide-cover={compact ? "true" : "false"}
        data-show-facepile={compact ? "false" : "true"}
      />
    </div>
  );
}
