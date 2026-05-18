import Link from "next/link";
import { FacebookPageEmbed } from "@/components/FacebookPageEmbed";
import { navItems, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gradient-to-b from-[#2a2826] to-[#1f1d1b] text-[#a8a4a0]">
      <div className="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <h4 className="font-heading mb-4 text-lg text-[#f0ebe3]">{site.name}</h4>
          <p className="text-sm leading-relaxed">{site.tagline}</p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4a4744] px-4 py-2 text-sm text-[#d4cfc8] transition hover:border-gold/50 hover:text-gold-light"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>

        <div>
          <h4 className="section-eyebrow mb-4 text-[#8a8580]">Quick Links</h4>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#c4bfb8] transition hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="section-eyebrow mb-4 text-[#8a8580]">Contact</h4>
          <address className="space-y-3 text-sm not-italic leading-relaxed">
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}, {site.address.line3}
              <br />
              {site.address.country}
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-[#c4bfb8] transition hover:text-gold-light"
              >
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={`https://${site.website}`}
                className="text-[#c4bfb8] transition hover:text-gold-light"
              >
                {site.website}
              </a>
            </p>
          </address>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="section-eyebrow mb-4 text-[#8a8580]">Facebook</h4>
          <FacebookPageEmbed variant="compact" />
        </div>
      </div>

      <div className="border-t border-[#3a3836] py-5 text-center">
        <p className="text-xs tracking-wide text-[#6b6661]">
          © {year} {site.name} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
