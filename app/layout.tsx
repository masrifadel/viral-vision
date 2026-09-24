import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://viralvision.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Viral Vision | Websites, SEO and ads for local businesses",
    template: "%s | Viral Vision",
  },
  description:
    "Viral Vision builds conversion-focused websites, local SEO strategies, and paid ad campaigns for service businesses that want more visibility and qualified leads.",
  keywords: [
    "local business website",
    "SEO for local business",
    "paid ads management",
    "digital marketing agency",
    "website design",
    "service business marketing",
    "web design for local business",
  ],
  applicationName: "Viral Vision",
  authors: [{ name: "Viral Vision" }],
  creator: "Viral Vision",
  publisher: "Viral Vision",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Viral Vision | Websites, SEO and ads for local businesses",
    description:
      "Turn your business into a local growth engine with conversion-focused websites, search visibility, and ad campaigns.",
    url: siteUrl,
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
