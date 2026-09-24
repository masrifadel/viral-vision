"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { target: 4000, prefix: "$", label: "spent on Google Ads" },
  { target: 70, prefix: "", label: "leads come in" },
  { target: 20, prefix: "", label: "customers get booked" },
  { target: 25000, prefix: "$", label: "in revenue" },
];

export function MathBand() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(metrics.map((metric) => Math.round(metric.target * eased)));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section className="math" aria-label="Performance metrics" ref={sectionRef}>
      <div className="wrap">
        <h2>When ads pay for themselves, the agency fee is easy to justify</h2>
        <p className="sub">
          Here&apos;s how the numbers can look for a local service business
          running Google Ads.
        </p>
        <div className="flow">
          {metrics.map((metric, index) => (
            <div className="step" key={metric.label}>
              <b>
                {metric.prefix}
                {values[index].toLocaleString("en-US")}
              </b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <p className="fine">
          An illustrative example, not a client result. Your numbers will depend
          on your market and budget.
        </p>
      </div>
    </section>
  );
}
