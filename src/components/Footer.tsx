import Link from "next/link";
import { navItems, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#505152] bg-[#363839] text-[#8c8989]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-[#dddddd]">
            {site.name}
          </h4>
          <p className="text-sm leading-relaxed">{site.tagline}</p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-[#bfbfbf] transition-colors hover:text-gold-light"
          >
            Find us on Facebook →
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-[#dddddd]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#bfbfbf] transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-[#dddddd]">
            Contact Info
          </h4>
          <address className="space-y-2 text-sm not-italic leading-relaxed">
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
              <br />
              {site.address.country}
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[#bfbfbf] hover:text-gold-light"
              >
                {site.email}
              </a>
            </p>
            <p>
              Web:{" "}
              <a
                href={`https://${site.website}`}
                className="text-[#bfbfbf] hover:text-gold-light"
              >
                {site.website}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-[#4b4c4d] bg-[#282a2b] py-4 text-center text-xs text-[#8c8989]">
        © {year} | All Rights Reserved | {site.name}
      </div>
    </footer>
  );
}
