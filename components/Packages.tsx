const packages = [
  {
    title: "Launch",
    subtitle: "For newer businesses wanting a sharper first impression",
    price: "$1,200",
    note: "one-time setup",
    items: [
      "Up to 5 custom pages",
      "Responsive design",
      "Basic SEO setup",
      "Lead capture form",
    ],
  },
  {
    title: "Growth",
    subtitle: "For businesses ready to scale visibility and leads",
    price: "$2,500",
    note: "monthly retainers available",
    items: [
      "Everything in Launch",
      "Local SEO & page optimisation",
      "Landing page funnel strategy",
      "Ongoing content direction",
    ],
    featured: true,
  },
  {
    title: "Momentum",
    subtitle: "For businesses that want strategic growth support",
    price: "$4,000",
    note: "monthly growth system",
    items: [
      "Everything in Growth",
      "Google and Meta ad setup",
      "Analytics and reporting",
      "Conversion optimisation",
    ],
  },
];

export function Packages() {
  return (
    <section className="paper sec" id="packages">
      <div className="wrap">
        <h2>Flexible packages for steady growth.</h2>
        <p className="sub">
          Choose the level that fits your current stage and growth goals.
        </p>

        <div className="packs">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`pk ${pkg.featured ? "main" : ""}`}
            >
              {pkg.featured && <span className="badge">Most popular</span>}
              <h3>{pkg.title}</h3>
              <p className="who">{pkg.subtitle}</p>
              <div className="price">
                {pkg.price}
                <small>{pkg.note}</small>
              </div>
              <ul className="ticks">
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="only">
          <p>
            <b>Need a custom plan?</b> We also build tailored growth systems for
            multi-location or high-intent service businesses.
          </p>
          <a className="btn" href="#contact">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
