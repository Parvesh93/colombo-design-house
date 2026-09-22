import type { Metadata } from "next";
import Image from "next/image";
import SiteEnhancements from "@/components/SiteEnhancements";

export const metadata: Metadata = {
  title: "Colombo Design House — Home Option 2",
  description:
    "Alternative editorial homepage concept for Colombo Design House.",
};

const IMAGE_ONE =
  "https://images.pexels.com/photos/15561776/pexels-photo-15561776.jpeg?auto=compress&cs=tinysrgb&w=1800";
const IMAGE_TWO =
  "https://images.pexels.com/photos/9431122/pexels-photo-9431122.png?auto=compress&cs=tinysrgb&w=1600";
const IMAGE_THREE =
  "https://images.pexels.com/photos/2773216/pexels-photo-2773216.jpeg?auto=compress&cs=tinysrgb&w=1600";
const IMAGE_FOUR =
  "https://images.pexels.com/photos/15529124/pexels-photo-15529124.jpeg?auto=compress&cs=tinysrgb&w=1600";
const FASHION_VIDEO =
  "https://videos.pexels.com/video-files/6627028/6627028-uhd_4096_2160_25fps.mp4";

const values = [
  {
    number: "01",
    title: "Humility",
    copy: "A grounded approach to people, partnerships and progress.",
  },
  {
    number: "02",
    title: "Passion for Excellence",
    copy: "A constant focus on quality, creativity and efficient processes.",
  },
  {
    number: "03",
    title: "Trust",
    copy: "Long-term relationships built through consistency and responsibility.",
  },
  {
    number: "04",
    title: "Mutual Respect",
    copy: "A people-centred culture where individuals contribute and grow.",
  },
];

const leadership = [
  { role: "Chairman", name: "R.P Ariyarathna Samarakkody" },
  { role: "Director", name: "R.P Nuwan Samarakkody" },
  { role: "Head of Operations", name: "Jaanaka Perera" },
  { role: "Finance Manager", name: "Suraj Dasanayake" },
];

export default function HomeTwo() {
  return (
    <main className="home2">
      <SiteEnhancements />

      <header className="home2-header">
        <a className="home2-logo" href="/home-2" aria-label="Colombo Design House">
          <Image
            src="/logo/cdh-logo-dark.png"
            alt="Colombo Design House"
            width={300}
            height={104}
            priority
          />
        </a>

        <nav className="home2-nav" aria-label="Alternative homepage navigation">
          <a href="#h2-about">Company</a>
          <a href="#h2-purpose">Purpose</a>
          <a href="#h2-values">Values</a>
          <a href="#h2-people">People</a>
        </nav>

        <a className="home2-contact-link" href="#h2-contact">
          Contact <span>↗</span>
        </a>
      </header>

      <section className="home2-hero">
        <div className="home2-hero-copy">
          <div className="home2-hero-index">
            <span>Colombo Design House</span>
            <span>Est. 2018</span>
          </div>

          <div className="home2-hero-title">
            <p>Menswear / Fast Fashion / Sri Lanka</p>
            <h1>
              Designed for
              <em>what moves next.</em>
            </h1>
          </div>

          <div className="home2-hero-foot">
            <p>
              A modern clothing company bringing decades of apparel experience
              into a fast-moving menswear business.
            </p>
            <a href="#h2-about">
              Discover CDH <span>↓</span>
            </a>
          </div>
        </div>

        <div className="home2-hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={IMAGE_TWO}
          >
            <source src={FASHION_VIDEO} type="video/mp4" />
          </video>
          <div className="home2-hero-media-shade" />
          <span className="home2-media-label">01 / Modern Menswear</span>
        </div>
      </section>

      <section id="h2-about" className="home2-about home2-section">
        <div className="home2-container">
          <div className="home2-kicker" data-reveal>
            <span>01</span>
            <p>Company</p>
          </div>

          <div className="home2-about-grid">
            <div className="home2-about-heading" data-reveal>
              <h2>
                From experience
                <em>to expression.</em>
              </h2>
            </div>

            <div className="home2-about-copy" data-reveal data-reveal-delay="80">
              <p className="home2-about-lead">
                Colombo Design House (Pvt) Ltd. was established in 2018 with the
                aim of introducing fast fashion to the menswear sector in Sri
                Lanka.
              </p>
              <p>
                The company&apos;s leadership brings more than 35 years of
                recognised apparel-industry experience. CDH supplies readymade
                goods and manages a portfolio of recognised clients in the
                country.
              </p>
              <p>
                A qualified and talented workforce shares one ambition: making
                Colombo Design House a market leader in the clothing industry.
              </p>
            </div>
          </div>

          <div className="home2-collage" data-reveal>
            <figure className="home2-collage-large">
              <Image
                src={IMAGE_ONE}
                alt="Tailored menswear editorial"
                fill
                sizes="(max-width: 900px) 100vw, 56vw"
              />
            </figure>

            <div className="home2-collage-side">
              <div className="home2-stat">
                <span>Experience</span>
                <strong>35+</strong>
                <p>Years in the apparel industry</p>
              </div>

              <figure>
                <Image
                  src={IMAGE_FOUR}
                  alt="Monochrome menswear editorial"
                  fill
                  sizes="(max-width: 900px) 100vw, 34vw"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="h2-purpose" className="home2-purpose">
        <div className="home2-purpose-image" data-reveal>
          <Image
            src={IMAGE_TWO}
            alt="Contemporary menswear"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>

        <div className="home2-purpose-copy">
          <div className="home2-kicker home2-kicker-light" data-reveal>
            <span>02</span>
            <p>Purpose</p>
          </div>

          <article data-reveal data-reveal-delay="50">
            <span>Vision</span>
            <h2>
              To be the most compelling global clothing &amp; lifestyle brand.
            </h2>
          </article>

          <article data-reveal data-reveal-delay="100">
            <span>Mission</span>
            <p>
              To create value through rare and inimitable creativity, and
              quality efficient processes that enable human-centered sustainable
              growth.
            </p>
          </article>
        </div>
      </section>

      <section id="h2-values" className="home2-values home2-section">
        <div className="home2-container">
          <div className="home2-values-head" data-reveal>
            <div>
              <div className="home2-kicker">
                <span>03</span>
                <p>Core values</p>
              </div>
              <h2>
                Principles that
                <em>shape the culture.</em>
              </h2>
            </div>
            <p>
              Four values guide how Colombo Design House works with people,
              quality and long-term partnerships.
            </p>
          </div>

          <div className="home2-value-grid">
            {values.map((value, index) => (
              <article
                key={value.title}
                data-reveal
                data-reveal-delay={String(index * 60)}
              >
                <div className="home2-value-top">
                  <span>{value.number}</span>
                  <i aria-hidden="true">↗</i>
                </div>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home2-statement">
        <div className="home2-statement-media">
          <Image
            src={IMAGE_THREE}
            alt="Urban menswear editorial"
            fill
            sizes="100vw"
          />
        </div>
        <div className="home2-statement-shade" />

        <div className="home2-statement-copy" data-reveal>
          <span>CDH / Colombo</span>
          <h2>
            Clothing with
            <em>a point of view.</em>
          </h2>
        </div>
      </section>

      <section id="h2-people" className="home2-people home2-section">
        <div className="home2-container">
          <div className="home2-people-head" data-reveal>
            <div className="home2-kicker">
              <span>04</span>
              <p>Our people</p>
            </div>
            <h2>
              Experience behind
              <em>the direction.</em>
            </h2>
          </div>

          <div className="home2-people-grid">
            <figure className="home2-people-image" data-reveal>
              <Image
                src={IMAGE_FOUR}
                alt="Editorial menswear portrait"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <figcaption>
                Leadership / Operations / Finance
              </figcaption>
            </figure>

            <div className="home2-person-list">
              {leadership.map((person, index) => (
                <article
                  key={person.role}
                  data-reveal
                  data-reveal-delay={String(index * 60)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
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

      <section id="h2-contact" className="home2-contact">
        <div className="home2-container home2-contact-inner" data-reveal>
          <div>
            <span>05 / Contact</span>
            <h2>
              Start a
              <em>conversation.</em>
            </h2>
          </div>

          <div className="home2-contact-details">
            <div>
              <strong>Nuwan Samarakkody</strong>
              <p>Director: Sales and Operations</p>
            </div>

            <a href="tel:+94112562018">+94 11 256 2018</a>
            <a href="tel:+94778875181">+94 77 887 5181</a>
            <a href="mailto:nuwan@ariyainternational.com">
              nuwan@ariyainternational.com
            </a>
          </div>
        </div>
      </section>

      <footer className="home2-footer">
        <div className="home2-container">
          <Image
            src="/logo/cdh-logo-white.png"
            alt="Colombo Design House"
            width={230}
            height={80}
          />
          <p>Colombo Design House (Pvt) Ltd.</p>
          <a href="/home-2">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
