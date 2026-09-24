export function ContactSection() {
  return (
    <section className="contact sec" id="contact">
      <div className="wrap cgrid">
        <div>
          <h2>Tell us about your business</h2>
          <p className="sub">
            Share what you do and where you work. We&apos;ll reply with a plan
            that fits your goals and budget.
          </p>
        </div>

        <form
          action="https://formsubmit.co/hello@viralvision.com"
          method="POST"
        >
          <div className="tworow">
            <label>
              Your name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Business name
              <input type="text" name="business" required autoComplete="organization" />
            </label>
          </div>

          <div className="tworow">
            <label>
              Phone
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              What do you need?
              <select name="service">
                <option>A new website</option>
                <option>Local SEO</option>
                <option>Social media</option>
                <option>Google or Meta Ads</option>
                <option>Full marketing package</option>
              </select>
            </label>
          </div>

          <label>
            Anything else we should know?
            <textarea
              name="message"
            />
          </label>

          <button className="btn solid" type="submit">
            Send message
          </button>
        </form>
        <br />
      </div>

      <footer>
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Viral Vision home">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <use href="#vmark" />
            </svg>
            <span>VIRAL VISION</span>
          </a>
          <span>From Vision to Viral</span>
        </div>
      </footer>
    </section>
  );
}
