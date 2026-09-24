import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://viralvision.example"),
  title: {
    default: "Viral Vision | Websites, SEO and ads for local businesses",
    template: "%s | Viral Vision",
  },
  description:
    "Viral Vision builds high-converting websites, SEO growth, and paid ad campaigns for local businesses that want more leads and visibility.",
  keywords: [
    "local business website",
    "SEO for local business",
    "paid ads management",
    "digital marketing agency",
    "website design",
  ],
  openGraph: {
    title: "Viral Vision | Websites, SEO and ads for local businesses",
    description:
      "Turn your business into a local growth engine with conversion-driven websites, search visibility, and ad campaigns.",
    url: "https://viralvision.example",
    siteName: "Viral Vision",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Vision",
    description:
      "Websites, SEO and ads that help local businesses grow visibility and consistent leads.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
