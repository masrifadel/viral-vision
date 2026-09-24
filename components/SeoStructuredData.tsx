export function SeoStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Viral Vision",
    description:
      "Viral Vision helps local service businesses grow with websites, SEO and paid ads that drive more visibility and leads.",
    url: "https://viralvision.example",
    telephone: "+1-555-010-2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Growth Avenue",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78701",
      addressCountry: "US",
    },
    areaServed: "United States",
    sameAs: [],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paid ads management",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
