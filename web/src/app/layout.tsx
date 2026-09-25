import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Interactions } from "@/components/Interactions";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "VBC Limited — IT Staffing, Recruitment & Technology Solutions",
    template: "%s · VBC Limited",
  },
  description: site.description,
  keywords: [
    "IT staffing",
    "HR recruitment",
    "recruitment consultancy",
    "contract staffing",
    "permanent placement",
    "IT jobs",
    "SAP job openings",
    "software development",
    "mobile app development",
    "web development",
    "quality assurance",
    "test automation",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "VBC Limited — Smart people. Smarter solutions.",
    description: site.description,
    images: [{ url: "/images/cta-banner.jpg", width: 1920, height: 597, alt: "VBC Limited" }],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  verification: { google: "SPvH6k-fWYKi9R0QxHDYnzY1xZj7aDs2VoNWOA4R7Hc" },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${inter.variable} ${grotesk.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}.bar{transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Interactions />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
