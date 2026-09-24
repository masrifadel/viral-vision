export function ContactSection() {
  return (
    <section className="contact sec" id="contact">
      <div className="wrap cgrid">
        <div>
          <h2>
            Ready to make your business easier to find and easier to trust?
          </h2>
          <p className="sub">
            Tell us what you want to improve — your website, SEO, paid ads, or
            overall lead flow. We’ll map out the next step.
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
              <input type="text" name="business" placeholder="Business name" />
            </label>
          </div>

          <div className="tworow">
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
              Service needed
              <select name="service">
                <option value="Website">Website</option>
                <option value="SEO">SEO</option>
                <option value="Paid ads">Paid ads</option>
                <option value="Full growth system">Full growth system</option>
              </select>
            </label>
          </div>

          <label>
            Project details
            <textarea
              name="message"
              placeholder="Tell us about your goals, timeline, and current challenges."
              required
            />
          </label>

          <button className="btn solid" type="submit">
            Send enquiry
          </button>
        </form>
        <br />
      </div>

      <footer>
        <div className="wrap">
          <span>© 2026 Viral Vision</span>
          <span>
            Helping local businesses grow with clarity and consistency.
          </span>
        </div>
      </footer>
    </section>
  );
}
