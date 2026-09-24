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

              <svg
                className="ill on"
                viewBox="0 0 420 300"
                aria-label={service.title}
                role="img"
              >
                <defs>
                  <linearGradient id="greenG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0c2a1f" />
                    <stop offset="0.6" stopColor="#153a2b" />
                    <stop offset="1" stopColor="#0a2018" />
                  </linearGradient>
                  <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f0dcb0" />
                    <stop offset="0.5" stopColor="#d4af7a" />
                    <stop offset="1" stopColor="#a9814d" />
                  </linearGradient>
                  <symbol id="vmark" viewBox="0 0 100 100">
                    <polygon
                      points="0.4,12.5 22,12.5 50,79 42,99.5"
                      fill="url(#goldG)"
                    />
                    <polygon
                      points="21.5,0.9 48.6,0.9 73.8,58.4 59,92.9"
                      fill="url(#greenG)"
                      stroke="#d4af7a"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M32 10 L40 32 L37 48 M40 32 L52 44"
                      stroke="#a9814d"
                      strokeWidth="0.6"
                      fill="none"
                      opacity="0.8"
                    />
                    <path
                      d="M67.3 0.4 H100 L73.8 58.4 L76 40 Q75 18 67.3 0.4 Z"
                      fill="url(#goldG)"
                    />
                  </symbol>
                </defs>
                <rect width="420" height="300" rx="18" fill="url(#greenG)" />
                <g>
                  <rect
                    className="wipe"
                    x="52"
                    y="50"
                    width="210"
                    height="22"
                    rx="4"
                    fill="#d4af7a"
                  />
                  <rect
                    className="wipe"
                    x="52"
                    y="88"
                    width="180"
                    height="12"
                    rx="6"
                    fill="#f2e9d8"
                    fillOpacity="0.8"
                  />
                  <rect
                    className="wipe"
                    x="52"
                    y="108"
                    width="160"
                    height="12"
                    rx="6"
                    fill="#f2e9d8"
                    fillOpacity="0.45"
                  />
                  <rect
                    className="pop"
                    x="52"
                    y="146"
                    width="120"
                    height="30"
                    rx="15"
                    fill="#f2e9d8"
                  />
                  <rect
                    className="pop"
                    x="246"
                    y="52"
                    width="120"
                    height="146"
                    rx="12"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.6"
                  />
                  <svg
                    className="pop"
                    x="280"
                    y="82"
                    width="52"
                    height="52"
                    viewBox="0 0 100 100"
                  >
                    <use href="#vmark" />
                  </svg>
                  <rect
                    className="pop"
                    x="52"
                    y="200"
                    width="116"
                    height="46"
                    rx="8"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.4"
                  />
                  <rect
                    className="pop"
                    x="178"
                    y="200"
                    width="116"
                    height="46"
                    rx="8"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.4"
                  />
                </g>
              </svg>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
