import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { facebook, site } from "@/lib/content";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${lato.variable} ${cormorant.variable} ${oswald.variable} h-full`}
    >
      <body className="flex min-h-dvh flex-col bg-surface antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
