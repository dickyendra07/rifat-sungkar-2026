import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const tungsten = localFont({
  src: "../public/fonts/tungsten-black.otf",
  variable: "--font-tungsten",
  weight: "900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inside-rs.com"),
  title: {
    default: "Rifat Sungkar 2026 | The Legend Continues",
    template: "%s",
  },
  description:
    "Official campaign website of Rifat Sungkar 2026, featuring motorsport legacy, family stories, events, lifestyle, and campaign updates.",
  openGraph: {
    title: "Rifat Sungkar 2026 | The Legend Continues",
    description:
      "Official campaign website of Rifat Sungkar 2026, featuring motorsport legacy, family stories, events, lifestyle, and campaign updates.",
    type: "website",
    images: ["/images/hero-rifat.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifat Sungkar 2026 | The Legend Continues",
    description:
      "Official campaign website of Rifat Sungkar 2026, featuring motorsport legacy, family stories, events, lifestyle, and campaign updates.",
    images: ["/images/hero-rifat.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tungsten.variable} antialiased`}>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
