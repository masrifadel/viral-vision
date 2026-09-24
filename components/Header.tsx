export function Header() {
  return (
    <header className="wrap">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Viral Vision home">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <use href="#vmark" />
          </svg>
          <span>VIRAL VISION</span>
        </a>

        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#packages">Packages</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
        </ul>

        <a className="btn solid small" href="#contact">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
