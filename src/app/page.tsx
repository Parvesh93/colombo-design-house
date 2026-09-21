const values = [
  {
    number: "01",
    title: "Humility",
    text: "A grounded approach to people, partnerships and progress.",
  },
  {
    number: "02",
    title: "Passion for Excellence",
    text: "A commitment to quality and efficient processes in everything we do.",
  },
  {
    number: "03",
    title: "Trust",
    text: "Building lasting relationships through consistency and responsibility.",
  },
  {
    number: "04",
    title: "Mutual Respect",
    text: "Creating a people-centered culture where individuals can contribute and grow.",
  },
];

const leadership = [
  { role: "Chairman", name: "R.P Ariyarathna Samarakkody" },
  { role: "Director", name: "R.P Nuwan Samarakkody" },
  { role: "Head of Operations", name: "Jaanaka Perera" },
  { role: "Finance Manager", name: "Suraj Dasanayake" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#home" aria-label="Colombo Design House home">
            <span className="brand-symbol">CDH</span>
            <span className="brand-name">
              Colombo
              <small>Design House</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#purpose">Purpose</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-contact" href="#contact">
            Contact us
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-weave" aria-hidden="true" />
        <div className="hero-circle hero-circle-one" aria-hidden="true" />
        <div className="hero-circle hero-circle-two" aria-hidden="true" />

        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span>Colombo, Sri Lanka</span>
              <span>Established 2018</span>
            </div>

            <h1>
              Fast fashion.
              <span>Menswear focus.</span>
              <em>Built on experience.</em>
            </h1>

            <div className="hero-intro">
              <p>
                Colombo Design House was established to introduce fast fashion
                to Sri Lanka&apos;s menswear sector, bringing together apparel
                experience, qualified talent and a clear ambition for growth.
              </p>

              <a className="round-link" href="#about" aria-label="Discover our story">
                <span>Discover</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-note">
            <span className="hero-note-index">01 / CDH</span>
            <p>
              A modern clothing company supplying readymade goods to a portfolio
              of recognised clients.
            </p>
          </aside>
        </div>

        <div className="hero-footer">
          <div className="shell hero-stats">
            <div>
              <strong>2018</strong>
              <span>Company established</span>
            </div>
            <div>
              <strong>35+</strong>
              <span>Years of apparel experience</span>
            </div>
            <div>
              <strong>Menswear</strong>
              <span>Fast-fashion focus</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="story section">
        <div className="shell">
          <div className="section-label">
            <span>01</span>
            <p>Company overview</p>
          </div>

          <div className="story-grid">
            <div className="story-title">
              <p className="eyebrow">Our story</p>
              <h2>Experience shaped into a modern clothing business.</h2>
            </div>

            <div className="story-copy">
              <p className="story-lead">
                Colombo Design House (Pvt) Ltd. began in 2018 with the goal of
                introducing fast fashion to the menswear sector in Sri Lanka.
              </p>

              <p>
                The company&apos;s leadership brings over 35 years of recognised
                experience in the apparel industry. Today, CDH manages a
                portfolio of well-recognised clients in the country and supplies
                readymade goods.
              </p>

              <p>
                Its workforce is composed of qualified and talented individuals
                who share one goal: making Colombo Design House a market leader
                in the clothing industry.
              </p>
            </div>
          </div>

          <div className="story-statement">
            <span>Our ambition</span>
            <p>
              To build Colombo Design House into a market leader in the clothing
              industry.
            </p>
            <div className="statement-mark" aria-hidden="true">CDH</div>
          </div>
        </div>
      </section>

      <section id="purpose" className="purpose">
        <div className="shell">
          <div className="purpose-top">
            <div className="section-label section-label-light">
              <span>02</span>
              <p>Purpose & direction</p>
            </div>

            <p className="purpose-sidecopy">
              Creativity, quality, efficiency and sustainable growth form the
              foundation of the company&apos;s direction.
            </p>
          </div>

          <div className="purpose-list">
            <article className="purpose-row">
              <span className="purpose-number">01</span>
              <p className="purpose-name">Vision</p>
              <h3>
                To be the most compelling global clothing &amp; lifestyle brand.
              </h3>
            </article>

            <article className="purpose-row">
              <span className="purpose-number">02</span>
              <p className="purpose-name">Mission</p>
              <h3>
                To create value through rare and inimitable creativity, and
                quality efficient processes that enable human-centered
                sustainable growth.
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="shell">
          <div className="values-heading">
            <div>
              <div className="section-label">
                <span>03</span>
                <p>Core values</p>
              </div>
              <h2>The principles behind how we work.</h2>
            </div>

            <p>
              Four values guide the culture and direction of Colombo Design
              House.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="leadership section">
        <div className="shell">
          <div className="leadership-heading">
            <div>
              <div className="section-label">
                <span>04</span>
                <p>Leadership</p>
              </div>
              <h2>Management team</h2>
            </div>

            <p>
              The leadership structure presented in the company profile.
            </p>
          </div>

          <div className="team-list">
            {leadership.map((person, index) => (
              <article className="team-row" key={person.role}>
                <span className="team-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{person.role}</p>
                <h3>{person.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-pattern" aria-hidden="true" />

        <div className="shell contact-layout">
          <div className="contact-main">
            <div className="section-label section-label-light">
              <span>05</span>
              <p>Contact</p>
            </div>

            <h2>
              Start a
              <span>conversation.</span>
            </h2>

            <a
              className="contact-email"
              href="mailto:nuwan@ariyainternational.com"
            >
              nuwan@ariyainternational.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-card">
            <p className="contact-card-label">Primary contact</p>

            <div className="contact-person">
              <strong>Nuwan Samarakkody</strong>
              <span>Director: Sales and Operations</span>
              <span>Colombo Design House (Pvt) Ltd.</span>
            </div>

            <div className="contact-lines">
              <a href="tel:+94112562018">
                <span>Tel</span>
                +94 11 256 2018
              </a>
              <a href="tel:+94778875181">
                <span>Mob</span>
                +94 77 887 5181
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <span>CDH</span>
            <p>Colombo Design House (Pvt) Ltd.</p>
          </div>

          <p>© {new Date().getFullYear()} All rights reserved.</p>

          <a href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
