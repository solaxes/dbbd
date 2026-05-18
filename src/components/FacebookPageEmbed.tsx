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
  height?: number;
  tabs?: "timeline" | "events" | "messages";
  className?: string;
};

export function FacebookPageEmbed({
  height = 500,
  tabs = "timeline",
  className = "",
}: FacebookPageEmbedProps) {
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
  }, []);

  return (
    <div className={className}>
      <div id="fb-root" />
      <div
        className="fb-page mx-auto max-w-full"
        data-href={facebook.pageUrl}
        data-tabs={tabs}
        data-width=""
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
    </div>
  );
}
