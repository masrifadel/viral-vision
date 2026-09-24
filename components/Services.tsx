"use client";

import { useState } from "react";

const services = [
  {
    id: "websites",
    title: "Web design & development",
    description:
      "Modern, conversion-focused websites that make your business look premium, clearer, and easier to trust from the first click.",
    bullets: [
      "Custom brand-led design",
      "Mobile-first responsive layouts",
      "Clear conversion paths",
      "Fast page performance",
    ],
  },
  {
    id: "seo",
    title: "SEO & local visibility",
    description:
      "Search strategy that targets the people actively looking for your service so you show up where it matters most.",
    bullets: [
      "Local SEO optimisation",
      "Google Business Profile guidance",
      "Service-page structure",
      "Ongoing keyword growth",
    ],
  },
  {
    id: "ads",
    title: "Paid ads & funnels",
    description:
      "Campaigns built to create steady lead flow without wasting spend, with landing pages that turn traffic into enquiries.",
    bullets: [
      "Meta and Google campaigns",
      "Landing page testing",
      "Lead tracking & quality control",
      "Ad creative strategy",
    ],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="wrap sec" id="services">
      <h2>Strategy, design, and growth systems for local businesses.</h2>
      <p className="sub">
        We help businesses turn their expertise into stronger visibility,
        sharper messaging, and more consistent leads.
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
