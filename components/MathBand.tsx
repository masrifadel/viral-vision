const metrics = [
  { value: "$0", label: "spent on Google Ads" },
  { value: "0", label: "leads come in" },
  { value: "0", label: "customers get booked" },
  { value: "$0", label: "in revenue" },
];

export function MathBand() {
  return (
    <section className="math" aria-label="Performance metrics">
      <div className="wrap">
        <h2>When ads pay for themselves, the agency fee is easy to justify</h2>
        <p className="sub">
          Here&apos;s how the numbers can look for a local service business
          running Google Ads.
        </p>
        <div className="flow">
          {metrics.map((metric) => (
            <div className="step" key={metric.label}>
              <b>{metric.value}</b>
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
