"use client";

import { useState } from "react";

const services = [
  {
    id: "websites",
    title: "Website design",
    description:
      "Fast, mobile-first, and built around one job: getting people to request a quote.",
    bullets: [
      "New WordPress or Shopify site",
      "Landing pages and quote or booking forms",
      "Analytics and Search Console setup",
      "Speed, maintenance, hosting and domain help",
    ],
  },
  {
    id: "social",
    title: "Social media",
    description:
      "Instagram and Facebook, with TikTok added when it fits. You send raw photos and video; we turn them into polished posts.",
    bullets: [
      "Content calendar, captions and hashtags",
      "Graphic design, Reels and Stories",
      "Scheduling and comment monitoring",
      "Monthly analytics",
    ],
  },
  {
    id: "local-seo",
    title: "Google and local SEO",
    description:
      'When someone searches "plumber near me", we make sure it is your listing and your pages they find.',
    bullets: [
      "Google Business Profile optimization",
      "Location and service pages, on-page SEO",
      "Citations, reviews strategy and backlinks",
      "Rank tracking and monthly reports",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description:
      "Every dollar is tracked to a call or a form, so you can see what your ad spend brings back.",
    bullets: [
      "Keyword research and campaign builds",
      "Ad copy, negative keywords, local targeting",
      "Conversion and call tracking",
      "Landing pages, A/B tests and reporting",
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description:
      "Facebook and Instagram ads that find the people most likely to need you, then follow up with the ones who did not call yet.",
    bullets: [
      "Audience targeting and retargeting",
      "Creative, video ads and lead forms",
      "Pixel and Conversions API setup",
      "Testing and ongoing optimization",
    ],
  },
];

function ServiceIllustration({ serviceId }: { serviceId: string }) {
  const common = {
    className: "ill on",
    viewBox: "0 0 420 300",
    role: "img" as const,
  };

  if (serviceId === "social") {
    return (
      <svg {...common} aria-label="A phone showing social media posts">
        <rect width="420" height="300" rx="18" fill="#0f2c21" />
        <rect x="140" y="18" width="140" height="264" rx="24" fill="#0a2018" stroke="#d4af7a" strokeWidth="2.5" />
        <circle cx="168" cy="50" r="10" fill="none" stroke="#d4af7a" strokeWidth="2" />
        <circle cx="210" cy="50" r="10" fill="none" stroke="#d4af7a" strokeWidth="2" />
        <circle cx="252" cy="50" r="10" fill="none" stroke="#d4af7a" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <rect key={item} className="pop" x={154 + (item % 3) * 38} y={80 + Math.floor(item / 3) * 38} width="34" height="34" rx="4" fill={item % 2 ? "#17402f" : "#d4af7a"} />
        ))}
        <rect x="156" y="208" width="100" height="7" rx="3.5" fill="#f2e9d8" fillOpacity=".45" />
        <rect x="156" y="222" width="70" height="7" rx="3.5" fill="#f2e9d8" fillOpacity=".25" />
        <rect className="pop" x="42" y="110" width="90" height="34" rx="17" fill="#f2e9d8" />
        <text x="87" y="132" textAnchor="middle" fontSize="14" fill="#241d14">12 posts</text>
      </svg>
    );
  }

  if (serviceId === "local-seo") {
    return (
      <svg {...common} aria-label="A local search map with a number one ranking">
        <rect width="420" height="300" rx="18" fill="#123826" />
        <g fill="none" stroke="#d4af7a" strokeOpacity=".3" strokeWidth="6" strokeLinecap="round">
          <path d="M30 150H390" /><path d="M130 30V270" /><path d="M300 30V270" /><path d="M30 220C120 200 240 240 390 190" />
        </g>
        <rect x="70" y="42" width="280" height="30" rx="15" fill="#f2e9d8" />
        <text x="90" y="62" fontSize="15" fill="#241d14">plumber near me</text>
        <circle className="ping" cx="210" cy="154" r="46" fill="none" stroke="#d4af7a" strokeWidth="2" />
        <path className="bob" d="M210 100a28 28 0 0 1 28 28c0 20-28 48-28 48s-28-28-28-48a28 28 0 0 1 28-28z" fill="#d4af7a" />
        <circle cx="210" cy="130" r="9" fill="#0f2c21" />
        <rect className="pop" x="60" y="218" width="300" height="40" rx="12" fill="#f2e9d8" />
        <circle cx="90" cy="238" r="15" fill="#d4af7a" />
        <text x="90" y="244" textAnchor="middle" fontSize="16" fontWeight="700" fill="#241d14">#1</text>
        <text x="116" y="234" fontSize="15" fontWeight="600" fill="#241d14">Your business</text>
        <text x="116" y="250" fontSize="13" fill="#a9814d">★★★★★ Open now</text>
      </svg>
    );
  }

  if (serviceId === "google-ads") {
    return (
      <svg {...common} aria-label="A Google ad and a growing leads chart">
        <rect width="420" height="300" rx="18" fill="#0f2c21" />
        <rect className="pop" x="30" y="24" width="360" height="86" rx="12" fill="#f2e9d8" />
        <rect x="46" y="40" width="30" height="18" rx="4" fill="#241d14" />
        <text x="61" y="53" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f2e9d8">Ad</text>
        <rect x="88" y="42" width="180" height="14" rx="4" fill="#1c5a42" />
        <line x1="46" y1="270" x2="390" y2="270" stroke="#d4af7a" strokeOpacity=".5" />
        {[30, 50, 72, 96, 124, 156].map((height, index) => (
          <rect key={height} className="rise" x={60 + index * 52} y={270 - height} width="34" height={height} rx="3" fill="#d4af7a" />
        ))}
        <polyline className="draw" points="77,232 129,216 181,198 233,178 285,156 337,126" fill="none" stroke="#f2e9d8" strokeWidth="3" strokeLinecap="round" />
        <text x="46" y="292" fontSize="13" fill="#cbbfa6">Leads per month</text>
      </svg>
    );
  }

  if (serviceId === "meta-ads") {
    return (
      <svg {...common} aria-label="A targeted social media advertisement">
        <rect width="420" height="300" rx="18" fill="#0f2c21" />
        {[104, 72, 40].map((radius) => (
          <circle key={radius} cx="140" cy="150" r={radius} fill="none" stroke="#d4af7a" strokeOpacity=".55" strokeWidth="2" />
        ))}
        <circle className="ping" cx="140" cy="150" r="104" fill="none" stroke="#d4af7a" strokeWidth="2" />
        <circle cx="140" cy="150" r="10" fill="#d4af7a" />
        <path className="draw" d="M250 150h20" stroke="#d4af7a" strokeWidth="3" />
        <rect className="pop" x="274" y="46" width="120" height="208" rx="14" fill="#f2e9d8" />
        <rect x="286" y="62" width="96" height="86" rx="8" fill="#17402f" />
        <circle cx="334" cy="105" r="28" fill="#d4af7a" />
        <rect x="286" y="166" width="86" height="9" rx="4.5" fill="#241d14" fillOpacity=".7" />
        <rect x="286" y="184" width="64" height="7" rx="3.5" fill="#241d14" fillOpacity=".35" />
        <rect x="286" y="210" width="96" height="28" rx="14" fill="#1c5a42" />
        <text x="334" y="229" textAnchor="middle" fontSize="14" fontWeight="600" fill="#f2e9d8">Book now</text>
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="A website page assembling itself">
      <rect width="420" height="300" rx="18" fill="#0f2c21" />
      <rect x="30" y="30" width="360" height="240" rx="14" fill="#0a2018" stroke="#d4af7a" strokeWidth="2" />
      <line x1="30" y1="62" x2="390" y2="62" stroke="#d4af7a" strokeOpacity=".5" />
      <rect className="wipe" x="52" y="84" width="200" height="22" rx="4" fill="#d4af7a" />
      <rect className="wipe" x="52" y="116" width="150" height="9" rx="4.5" fill="#f2e9d8" fillOpacity=".6" />
      <rect className="pop" x="52" y="158" width="78" height="28" rx="14" fill="#f2e9d8" />
      <rect className="pop" x="270" y="82" width="100" height="104" rx="10" fill="#17402f" stroke="#d4af7a" />
      <rect className="pop" x="52" y="206" width="96" height="50" rx="8" fill="#17402f" />
      <rect className="pop" x="162" y="206" width="96" height="50" rx="8" fill="#17402f" />
      <rect className="pop" x="272" y="206" width="98" height="50" rx="8" fill="#17402f" />
    </svg>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="wrap sec" id="services">
      <h2>Five services, one team</h2>
      <p className="sub">
        Pick one, or let us run all of them together. Tap a service to see what
        we handle.
      </p>

      <div className="svc">
        <div className="tabs" role="tablist" aria-label="Service categories">
          {services.map((service, index) => (
            <button
              key={service.id}
              className="tab"
              role="tab"
              type="button"
              aria-selected={index === activeIndex}
              aria-controls={`${service.id}-panel`}
              id={`${service.id}-tab`}
              onClick={() => setActiveIndex(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="panels">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="panel"
              role="tabpanel"
              id={`${service.id}-panel`}
              aria-labelledby={`${service.id}-tab`}
              hidden={index !== activeIndex}
            >
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="ticks">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <ServiceIllustration serviceId={service.id} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
