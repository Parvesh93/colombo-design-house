import type { Metadata } from "next";
import Image from "next/image";
import SiteEnhancements from "@/components/SiteEnhancements";

export const metadata: Metadata = {
  title: "Colombo Design House — Home Option 2",
  description:
    "A premium motion-led editorial homepage concept for Colombo Design House.",
};

const FASHION_VIDEO =
  "https://videos.pexels.com/video-files/6627028/6627028-uhd_4096_2160_25fps.mp4";

const values = [
  { no: "01", title: "Humility" },
  { no: "02", title: "Passion for Excellence" },
  { no: "03", title: "Trust" },
  { no: "04", title: "Mutual Respect" },
];

const leadership = [
  { role: "Chairman", name: "R.P Ariyarathna Samarakkody" },
  { role: "Director", name: "R.P Nuwan Samarakkody" },
  { role: "Head of Operations", name: "Jaanaka Perera" },
  { role: "Finance Manager", name: "Suraj Dasanayake" },
];

export default function HomeTwo() {
  return (
    <main className="h2b">
      <SiteEnhancements />

      <header className="h2b-header">
        <a href="/home-2" className="h2b-logo" aria-label="Colombo Design House">
          <Image
            src="/logo/cdh-logo-white.png"
            alt="Colombo Design House"
            width={320}
            height={110}
            priority
          />
        </a>

        <nav className="h2b-nav" aria-label="Homepage navigation">
          <a href="#h2b-about">About</a>
          <a href="#h2b-direction">Direction</a>
          <a href="#h2b-values">Values</a>
          <a href="#h2b-people">People</a>
        </nav>

        <a className="h2b-contact-link" href="#h2b-contact">
          Contact <span>↗</span>
        </a>
      </header>

      <section className="h2b-hero">
        <video
          className="h2b-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={FASHION_VIDEO} type="video/mp4" />
        </video>
        <div className="h2b-hero-overlay" />
        <div className="h2b-hero-grid" />

        <div className="h2b-hero-word h2b-hero-word-top" aria-hidden="true">
          COLOMBO
        </div>
        <div className="h2b-hero-word h2b-hero-word-bottom" aria-hidden="true">
          DESIGN HOUSE
        </div>

        <div className="h2b-hero-content">
          <p className="h2b-hero-kicker">Menswear / Fast Fashion / Apparel</p>

          <div className="h2b-hero-statement">
            <span>Established 2018</span>
            <p>
              A modern clothing company shaped by more than three decades of
              apparel-industry experience.
            </p>
          </div>

          <a className="h2b-scroll" href="#h2b-about">
            Scroll to discover
            <span>↓</span>
          </a>
        </div>
      </section>

      <section id="h2b-about" className="h2b-manifesto">
        <div className="h2b-shell">
          <div className="h2b-section-line" data-reveal>
            <span>01</span>
            <p>Colombo Design House</p>
            <small>Since 2018</small>
          </div>

          <div className="h2b-manifesto-grid">
            <div className="h2b-manifesto-title" data-reveal>
              <p>Company profile</p>
              <h1>
                Fast fashion,
                <em>built on experience.</em>
              </h1>
            </div>

            <div className="h2b-manifesto-copy" data-reveal data-reveal-delay="80">
              <p className="h2b-lead">
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
        </div>
      </section>

      <section className="h2b-archive">
        <div className="h2b-archive-video" data-reveal>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={FASHION_VIDEO} type="video/mp4" />
          </video>
          <div className="h2b-archive-video-overlay" />
          <span>Motion / Form / Menswear</span>
        </div>

        <div className="h2b-archive-stat" data-reveal data-reveal-delay="70">
          <span>Apparel experience</span>
          <strong>35+</strong>
          <p>Years of recognised industry experience</p>
        </div>

        <div className="h2b-archive-mark" data-reveal data-reveal-delay="140">
          <Image
            src="/logo/cdh-monogram-white.png"
            alt=""
            width={300}
            height={300}
            aria-hidden="true"
          />
          <p>Colombo / Sri Lanka</p>
        </div>
      </section>

      <section id="h2b-direction" className="h2b-direction">
        <div className="h2b-direction-heading h2b-shell" data-reveal>
          <div className="h2b-section-line h2b-section-line-light">
            <span>02</span>
            <p>Direction</p>
            <small>Vision &amp; Mission</small>
          </div>
        </div>

        <div className="h2b-direction-grid">
          <article className="h2b-vision" data-reveal>
            <span>Vision</span>
            <h2>
              To be the most compelling global clothing &amp; lifestyle brand.
            </h2>
            <i aria-hidden="true">01</i>
          </article>

          <article className="h2b-mission" data-reveal data-reveal-delay="100">
            <span>Mission</span>
            <p>
              To create value through rare and inimitable creativity, and
              quality efficient processes that enable human-centered sustainable
              growth.
            </p>
            <i aria-hidden="true">02</i>
          </article>
        </div>
      </section>

      <section className="h2b-film">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={FASHION_VIDEO} type="video/mp4" />
        </video>
        <div className="h2b-film-overlay" />

        <div className="h2b-film-copy" data-reveal>
          <span>CDH / Modern Menswear</span>
          <h2>
            Clothing that
            <em>moves with culture.</em>
          </h2>
        </div>
      </section>

      <section id="h2b-values" className="h2b-values">
        <div className="h2b-shell">
          <div className="h2b-values-head" data-reveal>
            <div className="h2b-section-line">
              <span>03</span>
              <p>Culture</p>
              <small>Core values</small>
            </div>

            <h2>
              Four principles.
              <em>One direction.</em>
            </h2>
          </div>

          <div className="h2b-value-grid">
            {values.map((value, index) => (
              <article
                key={value.title}
                data-reveal
                data-reveal-delay={String(index * 65)}
              >
                <div>
                  <span>{value.no}</span>
                  <i aria-hidden="true">↗</i>
                </div>
                <h3>{value.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="h2b-people" className="h2b-people">
        <div className="h2b-people-intro">
          <div className="h2b-section-line h2b-section-line-light" data-reveal>
            <span>04</span>
            <p>People</p>
            <small>Leadership</small>
          </div>

          <div className="h2b-people-copy" data-reveal>
            <Image
              src="/logo/cdh-monogram-white.png"
              alt=""
              width={170}
              height={170}
              aria-hidden="true"
            />
            <h2>
              Experience behind
              <em>the vision.</em>
            </h2>
          </div>
        </div>

        <div className="h2b-people-list">
          {leadership.map((person, index) => (
            <article
              key={person.role}
              data-reveal
              data-reveal-delay={String(index * 60)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{person.role}</p>
              <h3>{person.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="h2b-contact" className="h2b-contact">
        <div className="h2b-contact-video">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={FASHION_VIDEO} type="video/mp4" />
          </video>
          <div />
        </div>

        <div className="h2b-contact-content h2b-shell" data-reveal>
          <p>05 / Contact</p>
          <h2>
            Let&apos;s create
            <em>what&apos;s next.</em>
          </h2>

          <div className="h2b-contact-details">
            <div>
              <strong>Nuwan Samarakkody</strong>
              <span>Director: Sales and Operations</span>
            </div>

            <div>
              <a href="tel:+94112562018">+94 11 256 2018</a>
              <a href="tel:+94778875181">+94 77 887 5181</a>
              <a href="mailto:nuwan@ariyainternational.com">
                nuwan@ariyainternational.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="h2b-footer">
        <div className="h2b-shell">
          <Image
            src="/logo/cdh-logo-white.png"
            alt="Colombo Design House"
            width={240}
            height={84}
          />
          <p>Colombo Design House (Pvt) Ltd.</p>
          <p>© {new Date().getFullYear()}</p>
          <a href="/home-2">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
