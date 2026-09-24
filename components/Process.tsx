const process = [
  {
    title: "You sign",
    description: "We agree on scope and start date.",
  },
  {
    title: "You share your info",
    description: "A short questionnaire, plus your logo and photos.",
  },
  {
    title: "We design",
    description: "Our designers build your pages.",
  },
  {
    title: "You review",
    description: "Send changes and we revise.",
  },
  {
    title: "We test and launch",
    description: "Your site goes live and traffic work begins.",
  },
];

export function Process() {
  return (
    <section className="wrap sec" id="process">
      <h2>How a new website comes together</h2>
      <p className="sub">
        A simple, repeatable process, so you always know what happens next.
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
