const metrics = [
  { value: "4x", label: "more visibility" },
  { value: "90+", label: "project launches" },
  { value: "2x", label: "faster lead flow" },
  { value: "100%", label: "tailored strategy" },
];

export function MathBand() {
  return (
    <section className="math" aria-label="Performance metrics">
      <div className="wrap">
        <div className="flow">
          {metrics.map((metric) => (
            <div className="step" key={metric.label}>
              <b>{metric.value}</b>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <p className="fine">
          Built for service businesses that want a cleaner message, stronger
          search presence, and easier conversions.
        </p>
      </div>
    </section>
  );
}
