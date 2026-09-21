const services = [
  {
    number: "01",
    title: "Service One",
    description: "Service details will be added when the approved company content is shared.",
  },
  {
    number: "02",
    title: "Service Two",
    description: "Service details will be added when the approved company content is shared.",
  },
  {
    number: "03",
    title: "Service Three",
    description: "Service details will be added when the approved company content is shared.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#home" aria-label="Colombo Design House home">
            <span className="brand-mark">CDH</span>
            <span className="brand-copy">
              <strong>Colombo</strong>
              <span>Design House</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-grid" />

        <div className="shell hero-inner">
          <p className="eyebrow light">Colombo Design House</p>

          <h1>
            Thoughtful design.
            <span>Built with purpose.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              A modern digital presence for Colombo Design House. Final company
              messaging and detailed service content will be incorporated as the
              project develops.
            </p>

            <a className="button button-light" href="#about">
              Discover more <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section section-white">
        <div className="shell split">
          <div>
            <p className="eyebrow">About us</p>
          </div>

          <div>
            <h2>Professional, clear and considered.</h2>
            <p className="lead">
              Colombo Design House is being presented with a clean, modern
              identity built around the company&apos;s deep green brand palette.
              This section is ready for the approved company profile once it is
              supplied.
            </p>

            <div className="about-line">
              <span>01</span>
              <p>Modern visual language</p>
            </div>
            <div className="about-line">
              <span>02</span>
              <p>Clear information hierarchy</p>
            </div>
            <div className="about-line">
              <span>03</span>
              <p>Responsive by default</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Our services</h2>
            </div>
            <p>
              This area is intentionally structured so approved service content
              can be dropped in without redesigning the page.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow light">Contact</p>
            <h2>Let&apos;s start a conversation.</h2>
          </div>

          <div className="contact-details">
            <div>
              <span>Contact person</span>
              <strong>Nuwan Samarakkody</strong>
              <p>Director: Sales and Operations</p>
            </div>

            <div>
              <span>Telephone</span>
              <a href="tel:+94112562018">+94 11 256 2018</a>
            </div>

            <div>
              <span>Mobile</span>
              <a href="tel:+94778875181">+94 77 887 5181</a>
            </div>

            <div>
              <span>Email</span>
              <a href="mailto:nuwan@ariyainternational.com">
                nuwan@ariyainternational.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <p>© 2026 Colombo Design House (Pvt) Ltd.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
