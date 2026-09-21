import Image from "next/image";

const IMAGE_SUIT =
  "https://images.pexels.com/photos/15561776/pexels-photo-15561776.jpeg?auto=compress&cs=tinysrgb&w=1600";
const IMAGE_STREET =
  "https://images.pexels.com/photos/9431122/pexels-photo-9431122.png?auto=compress&cs=tinysrgb&w=1600";
const IMAGE_EDITORIAL =
  "https://images.pexels.com/photos/15529124/pexels-photo-15529124.jpeg?auto=compress&cs=tinysrgb&w=1600";
const IMAGE_URBAN =
  "https://images.pexels.com/photos/2773216/pexels-photo-2773216.jpeg?auto=compress&cs=tinysrgb&w=1600";
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/6627028/6627028-uhd_4096_2160_25fps.mp4";

const values = [
  "Humility",
  "Passion for Excellence",
  "Trust",
  "Mutual Respect",
];

function ValueIcon({ index }: { index: number }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (index === 0) {
    return (
      <svg {...common}>
        <circle cx="14" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.35" />
        <path d="M7.5 22.5c.8-5 3.1-7.5 6.5-7.5s5.7 2.5 6.5 7.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M5 13.5h4M19 13.5h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M14 3.5l2.15 7.35L23.5 13l-7.35 2.15L14 22.5l-2.15-7.35L4.5 13l7.35-2.15L14 3.5Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
        <path d="M22 5.5v4M24 7.5h-4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg {...common}>
        <path d="M14 3.5 22 7v6.1c0 5.05-3.3 9.25-8 11.4-4.7-2.15-8-6.35-8-11.4V7l8-3.5Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
        <path d="m10 14 2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="19" cy="9" r="3" stroke="currentColor" strokeWidth="1.35" />
      <path d="M3.5 21c.65-4.25 2.5-6.4 5.5-6.4 2.45 0 4.05 1.45 5 4.25.95-2.8 2.55-4.25 5-4.25 3 0 4.85 2.15 5.5 6.4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

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
        <div className="shell nav">
          <a className="brand-logo" href="#home" aria-label="Colombo Design House">
            <Image
              className="brand-logo-full"
              src="/logo/cdh-logo-white.png"
              alt="Colombo Design House"
              width={320}
              height={110}
              priority
            />
            <Image
              className="brand-logo-mark"
              src="/logo/cdh-monogram-white.png"
              alt=""
              width={88}
              height={88}
              priority
              aria-hidden="true"
            />
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#story">Company</a>
            <a href="#vision">Vision</a>
            <a href="#values">Values</a>
            <a href="#leadership">Leadership</a>
          </nav>

          <a className="nav-contact" href="#contact">
            Contact
            <span>↗</span>
          </a>
        </div>
      </header>

      <section id="home" className="fashion-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMAGE_STREET}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div className="hero-shade" />
        <div className="hero-rule hero-rule-one" />
        <div className="hero-rule hero-rule-two" />

        <div className="hero-giant" aria-hidden="true">
          <Image
            src="/logo/cdh-monogram-white.png"
            alt=""
            fill
            sizes="50vw"
            priority
          />
        </div>

        <div className="shell hero-content">
          <div className="hero-meta">
            <span>Colombo / Sri Lanka</span>
            <span>Established 2018</span>
          </div>

          <div className="hero-copy">
            <p className="micro-label">Menswear / Fast Fashion / Apparel</p>
            <h1>
              Fashion that
              <span>moves forward.</span>
            </h1>

            <div className="hero-bottom">
              <p>
                Colombo Design House brings decades of apparel experience into a
                modern menswear business built around speed, quality and a clear
                global ambition.
              </p>

              <a className="hero-explore" href="#story">
                <span>Explore the story</span>
                <i aria-hidden="true">↓</i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-caption">
          <span>01</span>
          <p>Modern menswear. Experienced leadership. Forward thinking.</p>
        </div>
      </section>

      <section id="story" className="intro-section">
        <div className="shell">
          <div className="section-topline">
            <span>01 / Company</span>
            <p>Built on apparel experience</p>
          </div>

          <div className="intro-grid">
            <div className="intro-heading">
              <p className="eyebrow">Since 2018</p>
              <h2>
                Experience,
                <em>reframed.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p className="intro-lead">
                Colombo Design House (Pvt) Ltd. was established in 2018 with the
                aim of introducing fast fashion to the menswear sector in Sri
                Lanka.
              </p>
              <p>
                The company&apos;s leadership brings more than 35 years of
                recognised apparel-industry experience. Today, CDH supplies
                readymade goods and manages a portfolio of recognised clients in
                the country.
              </p>
              <p>
                A qualified and talented workforce shares one clear ambition:
                making Colombo Design House a market leader in the clothing
                industry.
              </p>
            </div>
          </div>

          <div className="image-story-grid">
            <figure className="image-frame image-frame-large">
              <Image
                src={IMAGE_SUIT}
                alt="Editorial menswear in a tailored suit"
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
              />
              <figcaption>Tailored / Modern / Refined</figcaption>
            </figure>

            <div className="image-story-side">
              <div className="big-stat">
                <strong>35+</strong>
                <span>Years of apparel experience</span>
              </div>
              <figure className="image-frame image-frame-small">
                <Image
                  src={IMAGE_EDITORIAL}
                  alt="Black and white male fashion editorial"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="motion-section">
        <div className="motion-media">
          <video autoPlay muted loop playsInline preload="metadata" poster={IMAGE_STREET}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="motion-overlay" />
        </div>

        <div className="shell motion-copy">
          <div>
            <p className="micro-label">In motion</p>
            <h2>
              Menswear for a
              <em>moving world.</em>
            </h2>
          </div>

          <p>
            A visual language shaped by contemporary silhouettes, urban energy
            and the pace of modern fashion.
          </p>
        </div>
      </section>

      <section id="vision" className="vision-section">
        <div className="shell">
          <div className="section-topline section-topline-light">
            <span>02 / Direction</span>
            <p>Vision & mission</p>
          </div>

          <article className="vision-row">
            <span className="vision-tag">Vision</span>
            <h2>
              To be the most compelling global clothing &amp; lifestyle brand.
            </h2>
          </article>

          <article className="vision-row mission-row">
            <span className="vision-tag">Mission</span>
            <h2>
              To create value through rare and inimitable creativity, and
              quality efficient processes that enable human-centered sustainable
              growth.
            </h2>
          </article>
        </div>
      </section>

      <section className="editorial-break">
        <div className="editorial-panel editorial-panel-copy">
          <div>
            <p className="micro-label">Modern menswear</p>
            <h2>
              Built for
              <span>now.</span>
            </h2>
          </div>
          <p>
            A clothing company positioned around contemporary fashion,
            efficiency and long-term growth.
          </p>
        </div>

        <figure className="editorial-panel editorial-panel-image">
          <Image
            src={IMAGE_STREET}
            alt="Contemporary menswear street style"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </figure>
      </section>

      <section id="values" className="values-section">
        <div className="shell">
          <div className="values-head">
            <div>
              <div className="section-topline">
                <span>03 / Culture</span>
                <p>Core values</p>
              </div>
              <h2>
                Four principles.
                <span>One direction.</span>
              </h2>
            </div>

            <p>
              The company&apos;s values define the way people, quality and
              relationships are approached.
            </p>
          </div>

          <div className="value-cards">
            {values.map((value, index) => (
              <article key={value} className="value-card">
                <div className="value-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="value-icon">
                    <ValueIcon index={index} />
                  </div>
                </div>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lookbook-section" aria-label="Menswear visual gallery">
        <figure className="lookbook-image lookbook-tall">
          <Image
            src={IMAGE_URBAN}
            alt="Modern urban menswear"
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
          />
        </figure>

        <div className="lookbook-copy">
          <span>CDH / 2018 — Present</span>
          <h2>
            Clothing with a
            <em>point of view.</em>
          </h2>
          <p>
            A visual identity that balances tailoring, street influence and
            contemporary menswear.
          </p>
        </div>

        <figure className="lookbook-image lookbook-detail">
          <Image
            src={IMAGE_EDITORIAL}
            alt="Monochrome menswear editorial"
            fill
            sizes="(max-width: 800px) 100vw, 34vw"
          />
        </figure>
      </section>

      <section id="leadership" className="leadership-section">
        <div className="shell">
          <div className="leadership-head">
            <div className="section-topline">
              <span>04 / People</span>
              <p>Management team</p>
            </div>
            <h2>People behind the vision.</h2>
          </div>

          <div className="leadership-layout">
            <figure className="leadership-visual">
              <Image
                src={IMAGE_URBAN}
                alt="Contemporary menswear visual"
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
              />
              <figcaption>
                <span>CDH / People &amp; Purpose</span>
                <strong>Experience. Direction. Growth.</strong>
              </figcaption>
            </figure>

            <div className="leadership-cards">
              {leadership.map((person, index) => (
                <article className="leader-card" key={person.role}>
                  <div className="leader-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Image
                      src="/logo/cdh-monogram-dark.png"
                      alt=""
                      width={34}
                      height={34}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p>{person.role}</p>
                    <h3>{person.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-image">
          <Image
            src={IMAGE_SUIT}
            alt="Premium menswear editorial"
            fill
            sizes="100vw"
          />
          <div className="contact-image-shade" />
        </div>

        <div className="shell contact-content">
          <p className="micro-label">Colombo Design House</p>
          <h2>
            Let&apos;s create
            <span>what&apos;s next.</span>
          </h2>

          <div className="contact-grid">
            <div>
              <strong>Nuwan Samarakkody</strong>
              <p>Director: Sales and Operations</p>
            </div>

            <div className="contact-links">
              <a href="tel:+94112562018">+94 11 256 2018</a>
              <a href="tel:+94778875181">+94 77 887 5181</a>
              <a href="mailto:nuwan@ariyainternational.com">
                nuwan@ariyainternational.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <a className="footer-logo" href="#home" aria-label="Colombo Design House">
            <Image
              src="/logo/cdh-logo-white.png"
              alt="Colombo Design House"
              width={240}
              height={82}
            />
          </a>
          <p>Colombo Design House (Pvt) Ltd.</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
