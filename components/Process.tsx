const process = [
  {
    title: "Audit",
    description:
      "We review your positioning, customer journey, and conversion gaps.",
  },
  {
    title: "Plan",
    description:
      "We shape the message, site structure, and acquisition strategy around your goals.",
  },
  {
    title: "Build",
    description:
      "We design and develop a site that looks credible and works hard for enquiries.",
  },
  {
    title: "Optimise",
    description:
      "We refine SEO, ad targeting, and page flow to improve lead quality and volume.",
  },
  {
    title: "Grow",
    description:
      "We keep the system moving with reporting, updates, and strategic improvements.",
  },
];

export function Process() {
  return (
    <section className="wrap sec" id="process">
      <h2>A simple process built around momentum.</h2>
      <p className="sub">
        From clarity to conversion, every step is designed to keep the growth
        engine moving.
      </p>

      <ol className="steps">
        {process.map((step, index) => (
          <li key={step.title}>
            <div className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                {index === 0 && <path d="M4 18h16M7 15l3-3 3 2 5-6" />}
                {index === 1 && <path d="M5 18V6m0 0h10l4 4v8M5 6l4-4" />}
                {index === 2 && <path d="M4 18V8h16v10M7 12h10M7 16h6" />}
                {index === 3 && <path d="M5 16l4-4 3 3 7-8" />}
                {index === 4 && <path d="M7 17l3-6 4 3 5-9" />}
              </svg>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
