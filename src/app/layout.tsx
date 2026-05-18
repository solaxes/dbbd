import type { Metadata } from "next";
import { Josefin_Slab, Lato, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { facebook, site } from "@/lib/content";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.website}`),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: facebook.about,
  openGraph: {
    title: facebook.title,
    description: facebook.about,
    images: [{ url: facebook.profileImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${josefinSlab.variable} ${oswald.variable} h-full`}
    >
      <body className="pattern-bg flex min-h-full flex-col antialiased">
        <div className="mx-auto w-full max-w-[1160px] flex-1 bg-white shadow-lg">
          <Header />
          <main className="content-pattern flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
