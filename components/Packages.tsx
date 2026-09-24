const packages = [
  {
    title: "Digital Foundation",
    subtitle: "For businesses with weak online marketing.",
    price: "Starting from $1,250",
    note: "per month",
    items: [
      "Website maintenance",
      "Google Business Profile management",
      "Local SEO",
      "About 12 social posts a month",
      "Basic graphic design",
      "Review strategy",
      "Monthly reporting",
    ],
  },
  {
    title: "Growth",
    subtitle: "Paid ads on top of a solid foundation.",
    price: "Starting from $2,250",
    note: "per month, plus ad spend",
    items: [
      "Google Ads management",
      "Meta Ads management",
      "Landing pages",
      "Conversion tracking",
      "Call and lead tracking",
      "More social content",
      "SEO content",
      "Monthly strategy call",
    ],
    featured: true,
  },
  {
    title: "Outsourced Marketing Department",
    subtitle: "Replaces several in-house marketing hires.",
    price: "Starting from $4,000",
    note: "per month, plus ad spend",
    items: [
      "Website management and SEO",
      "Google Ads and Meta Ads",
      "Social media, graphics and video editing",
      "Email and SMS marketing",
      "CRM and automations",
      "Landing pages and reporting",
      "Dedicated account manager",
    ],
  },
];

export function Packages() {
  return (
    <section className="paper sec" id="packages">
      <div className="wrap">
        <h2>Three packages, no menu of 25 services</h2>
        <p className="sub">
          Choose the level that fits where your marketing is today. Ad spend is
          paid separately, straight to Google or Meta.
        </p>

        <div className="packs">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`pk ${pkg.featured ? "main" : ""}`}
            >
              {pkg.featured && (
                <span className="badge">Best fit for most businesses</span>
              )}
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
            <b>Just need a website?</b>
            <br />A one-time website is $2,500. When it is live, you can move to
            a monthly growth plan to start bringing in traffic and leads.
          </p>
          <a className="btn" href="#contact">
            Ask about a website
          </a>
        </div>
      </div>
    </section>
  );
}
