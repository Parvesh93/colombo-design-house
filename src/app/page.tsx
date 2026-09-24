import Image from "next/image";
import SiteEnhancements from "@/components/SiteEnhancements";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/6627028/6627028-uhd_4096_2160_25fps.mp4";
const IMAGE_FACTORY =
  "https://images.pexels.com/photos/6766301/pexels-photo-6766301.jpeg?auto=compress&cs=tinysrgb&w=1800";
const IMAGE_CRAFT =
  "https://images.pexels.com/photos/5526370/pexels-photo-5526370.jpeg?auto=compress&cs=tinysrgb&w=1800";
const IMAGE_MENSWEAR =
  "https://images.pexels.com/photos/30148716/pexels-photo-30148716.jpeg?auto=compress&cs=tinysrgb&w=1800";

const capabilities = [
  {
    title: "Formal Shirts",
    description: "Precision-made for a polished finish.",
    icon: "shirt",
  },
  {
    title: "Casual Shirts",
    description: "Designed for everyday versatility.",
    icon: "casual",
  },
  {
    title: "Ladies' Shirts",
    description: "Quality garments with contemporary appeal.",
    icon: "ladies",
  },
  {
    title: "Undergarments",
    description: "Reliable everyday essentials.",
    icon: "essentials",
  },
];

const responsible = [
  {
    title: "Solar Power",
    text: "With the aim of reaching 100% solar energy within five years of operations.",
    icon: "sun",
  },
  {
    title: "Water Efficiency",
    text: "Rainwater harvesting and recycling targeting around 30% less water use than a conventional factory.",
    icon: "water",
  },
  {
    title: "Smarter Production",
    text: "Automation and efficient machinery designed to improve safety and reduce physical strain.",
    icon: "gear",
  },
  {
    title: "Ethical Standards",
    text: "Working towards SMETA / Sedex requirements and ISO 14001 environmental certification.",
    icon: "shield",
  },
];

const factoryFeatures = [
  "Dedicated production lines",
  "Modern shirt-making machinery",
  "Warehousing and logistics facilities",
  "Training centre",
  "Cafeteria and employee spaces",
  "Automation for safer, more efficient production",
];

function LineIcon({
  type,
}: {
  type:
    | "shirt"
    | "casual"
    | "ladies"
    | "essentials"
    | "sun"
    | "water"
    | "gear"
    | "shield";
}) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (type === "sun") {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "water") {
    return (
      <svg {...common}>
        <path d="M16 3.5S9 12.2 9 18a7 7 0 0 0 14 0c0-5.8-7-14.5-7-14.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12.3 19.3c.5 2 1.8 3.2 3.7 3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "gear") {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="4.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 3.5v3M16 25.5v3M3.5 16h3M25.5 16h3M7.2 7.2l2.1 2.1M22.7 22.7l2.1 2.1M24.8 7.2l-2.1 2.1M9.3 22.7l-2.1 2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16" cy="16" r="9.2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg {...common}>
        <path d="M16 3.8 25 7v7c0 6-3.8 10.8-9 13.2C10.8 24.8 7 20 7 14V7l9-3.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="m11.8 15.7 2.7 2.7 5.8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "essentials") {
    return (
      <svg {...common}>
        <path d="M9 6.5h14l-1.2 19H10.2L9 6.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M11.5 10.5h9M16 10.5v15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  const female = type === "ladies";

  return (
    <svg {...common}>
      <path d={female ? "M11 7.2 16 5l5 2.2 4 5.3-3.3 2.4-.9-1.6V27H11.2V13.3l-.9 1.6L7 12.5l4-5.3Z" : "M10.5 7.3 16 5l5.5 2.3 4.2 5.4-3.6 2.5-1.2-1.9V27H11.1V13.3L9.9 15.2l-3.6-2.5 4.2-5.4Z"} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d={type === "casual" ? "M12 8.2c1 1.2 2.3 1.8 4 1.8s3-.6 4-1.8M16 10v17" : "M13 8.1c.7 1.2 1.7 1.8 3 1.8s2.3-.6 3-1.8M16 10v17"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="final-home">
      <SiteEnhancements />

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
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#facilities">Facilities</a>
            <a href="#responsibility">Responsibility</a>
            <a href="#brands">Brands</a>
          </nav>

          <a className="nav-contact" href="#contact">
            Partner with us <span>↗</span>
          </a>
        </div>
      </header>

      <section id="home" className="final-hero">
        <video className="final-hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="final-hero-shade" />
        <div className="final-hero-mark" aria-hidden="true">
          <Image
            src="/logo/cdh-monogram-white.png"
            alt=""
            fill
            sizes="45vw"
            priority
          />
        </div>

        <div className="shell final-hero-content">
          <div className="final-hero-copy hero-animate hero-animate-1">
            <p className="micro-label">Sri Lankan Garment Manufacturing</p>
            <h1>
              40+ years of
              <span>apparel expertise.</span>
              <em>Built for what&apos;s next.</em>
            </h1>

            <p className="final-hero-intro">
              Modern garment manufacturing from Sri Lanka — combining skilled
              craftsmanship, flexible production and responsible innovation.
            </p>

            <div className="final-hero-actions">
              <a href="#capabilities">Explore Our Capabilities <span>↓</span></a>
              <a href="#contact">Partner With Us <span>↗</span></a>
            </div>
          </div>

          <div className="final-hero-stats hero-animate hero-animate-2">
            <div><strong>60,000+</strong><span>garments / month</span></div>
            <div><strong>500+</strong><span>people</span></div>
            <div><strong>40+</strong><span>years of expertise</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="final-section final-about">
        <div className="shell">
          <div className="final-section-label" data-reveal>
            <span>01</span>
            <p>Who we are</p>
          </div>

          <div className="final-about-grid">
            <div data-reveal>
              <h2>Built on experience.<em>Driven by possibility.</em></h2>
            </div>

            <div className="final-copy" data-reveal data-reveal-delay="80">
              <p className="final-lead">
                Colombo Design House is a Sri Lankan garment manufacturer and
                brand owner built on more than four decades of apparel expertise.
              </p>
              <p>
                From our facilities in Malabe and Dehiattakandiya, our teams
                produce 60,000+ garments every month for our own brands and
                recognised local retailers.
              </p>
              <p>
                Our strength lies in combining experience with agility —
                producing quality garments in quantities that allow us to respond
                to changing markets and emerging trends.
              </p>
              <a className="final-text-link" href="#difference">Discover CDH <span>↗</span></a>
            </div>
          </div>

          <figure className="final-about-media" data-reveal>
            <Image
              src={IMAGE_FACTORY}
              alt="Bespoke menswear tailoring and suit fitting"
              fill
              sizes="100vw"
            />
            <figcaption>Menswear / Craftsmanship / Precision</figcaption>
          </figure>
        </div>
      </section>

      <section id="capabilities" className="final-section final-capabilities">
        <div className="shell">
          <div className="final-capabilities-head" data-reveal>
            <div>
              <div className="final-section-label">
                <span>02</span>
                <p>Our capabilities</p>
              </div>
              <h2>From shirts to<em>everyday essentials.</em></h2>
            </div>
            <p>
              Shirts are at the heart of what we do. Today, our capabilities
              extend across a growing range of everyday apparel.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="capability-card"
                data-reveal
                data-reveal-delay={String(index * 60)}
              >
                <div className="capability-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="capability-icon">
                    <LineIcon type={item.icon as "shirt" | "casual" | "ladies" | "essentials"} />
                  </div>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="final-section-cta" href="#facilities" data-reveal>
            Explore Our Capabilities <span>↗</span>
          </a>
        </div>
      </section>

      <section id="difference" className="final-difference">
        <div className="shell">
          <div className="final-section-label final-section-label-light" data-reveal>
            <span>03</span>
            <p>The CDH difference</p>
          </div>

          <div className="final-difference-head" data-reveal>
            <h2>Flexible by design.<em>Skilled by experience.</em></h2>
            <p>
              What makes us different isn&apos;t simply how much we produce.
              It&apos;s how we produce it.
            </p>
          </div>

          <div className="difference-stats">
            <article data-reveal>
              <strong>40+</strong>
              <span>Years</span>
              <p>of apparel industry experience</p>
            </article>
            <article data-reveal data-reveal-delay="60">
              <strong>60,000+</strong>
              <span>Monthly</span>
              <p>garments produced every month</p>
            </article>
            <article data-reveal data-reveal-delay="120">
              <strong>500+</strong>
              <span>People</span>
              <p>employed directly</p>
            </article>
            <article data-reveal data-reveal-delay="180">
              <strong>Low</strong>
              <span>MOQs</span>
              <p>for greater flexibility and faster response</p>
            </article>
          </div>

          <p className="difference-note" data-reveal>
            Our ability to work with smaller quantities allows us to serve niche
            markets and respond to trends faster than traditional large-scale
            production models.
          </p>
        </div>
      </section>

      <section id="facilities" className="final-section final-facilities">
        <div className="shell">
          <div className="final-facilities-head" data-reveal>
            <div className="final-section-label">
              <span>04</span>
              <p>Our facilities</p>
            </div>
            <h2>Two factories.<em>One growing capability.</em></h2>
            <p>
              Our production network spans Malabe, Colombo and
              Dehiattakandiya, supported by two additional sub-plants.
            </p>
          </div>

          <div className="facility-grid">
            <article data-reveal>
              <span>01 / Malabe</span>
              <h3>Malabe, Colombo</h3>
              <p>Our head office, warehouse and first factory.</p>
            </article>

            <article data-reveal data-reveal-delay="80">
              <span>02 / Dehiattakandiya</span>
              <h3>Dehiattakandiya</h3>
              <p>
                Our second factory, established in 2022, with a growing skilled
                workforce.
              </p>
            </article>

            <article className="facility-stat" data-reveal data-reveal-delay="140">
              <strong>4</strong>
              <h3>Production sites</h3>
              <p>2 factories + 2 supporting sub-plants</p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-new-factory">
        <div className="final-new-factory-media">
          <Image
            src={IMAGE_CRAFT}
            alt="Skilled garment craftsmanship and sewing production"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <div />
        </div>

        <div className="final-new-factory-copy" data-reveal>
          <div className="final-section-label final-section-label-light">
            <span>05</span>
            <p>Our new factory</p>
          </div>
          <h2>Building the future of<em>Sri Lankan apparel.</em></h2>
          <p>
            Our next chapter is taking shape in Lihiniyagama,
            Dehiattakandiya — a purpose-built facility designed to bring our
            people, technology and production capabilities together under one
            roof.
          </p>

          <div className="factory-feature-grid">
            {factoryFeatures.map((feature, index) => (
              <div key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <a className="final-light-link" href="#responsibility">
            Discover Our Next Chapter <span>↗</span>
          </a>
        </div>
      </section>

      <section id="responsibility" className="final-section final-responsibility">
        <div className="shell">
          <div className="final-responsibility-head" data-reveal>
            <div>
              <div className="final-section-label">
                <span>06</span>
                <p>Responsible manufacturing</p>
              </div>
              <h2>Built to perform.<em>Designed to last.</em></h2>
            </div>
            <p>
              We believe responsible manufacturing should be built into the
              process — not added afterwards.
            </p>
          </div>

          <div className="responsibility-grid">
            {responsible.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                data-reveal-delay={String(index * 60)}
              >
                <div className="responsibility-icon">
                  <LineIcon type={item.icon as "sun" | "water" | "gear" | "shield"} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-people">
        <div className="shell final-people-inner">
          <div className="final-people-heading" data-reveal>
            <div className="final-section-label">
              <span>07</span>
              <p>Our people</p>
            </div>
            <h2>People make<em>the product.</em></h2>
          </div>

          <div className="final-people-copy" data-reveal data-reveal-delay="80">
            <p className="final-lead">Behind every garment is a skilled person.</p>
            <p>
              We invest in training, create pathways for new recruits and aim to
              build a workplace where people can grow alongside the business.
            </p>
            <p>
              Our new factory will include a dedicated training centre, giving
              local people the skills and opportunity to build careers in apparel
              manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="final-global">
        <div className="shell">
          <div className="final-section-label final-section-label-light" data-reveal>
            <span>08</span>
            <p>From manufacturer to global brand</p>
          </div>

          <div className="final-global-grid">
            <div data-reveal>
              <h2>Smaller runs.<em>Bigger possibilities.</em></h2>
            </div>

            <div className="final-global-copy" data-reveal data-reveal-delay="80">
              <p>
                The global apparel market is changing. Buyers want quality,
                flexibility, responsible production and the ability to move with
                changing tastes.
              </p>
              <p>That&apos;s where we see our opportunity.</p>
              <p>
                Our new facility will strengthen our design capabilities, trend
                forecasting and production capacity — enabling us to serve more
                international buyers while continuing to build our own brands.
              </p>
            </div>
          </div>

          <div className="global-ambition" data-reveal>
            <span>Our 2035 ambition</span>
            <strong>50%</strong>
            <p>of revenue from exports</p>
          </div>
        </div>
      </section>

      <section id="brands" className="final-section final-brands">
        <div className="shell">
          <div className="final-brands-head" data-reveal>
            <div className="final-section-label">
              <span>09</span>
              <p>Our brands</p>
            </div>
            <h2>Brands built<em>by us.</em></h2>
            <p>
              Alongside manufacturing for retailers, we build and operate our
              own apparel brands.
            </p>
          </div>

          <div className="final-brands-layout">
            <figure className="brand-media" data-reveal>
              <Image
                src={IMAGE_MENSWEAR}
                alt="Premium monochrome menswear editorial in formal tailoring"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <figcaption>Brand building / Premium menswear</figcaption>
            </figure>

            <div className="brand-grid">
            <article data-reveal>
              <span>01</span>
              <h3>Bluefort</h3>
              <p>Our flagship premium men&apos;s shirt brand.</p>
            </article>
            <article data-reveal data-reveal-delay="80">
              <span>02</span>
              <h3>Summer Island</h3>
              <p>Our second in-house brand.</p>
            </article>
            </div>
          </div>

          <a className="final-section-cta" href="#vision">
            Explore Our Brands <span>↗</span>
          </a>
        </div>
      </section>

      <section id="vision" className="final-vision">
        <div className="shell">
          <div className="final-section-label final-section-label-light" data-reveal>
            <span>10</span>
            <p>Our vision</p>
          </div>

          <div className="final-vision-head" data-reveal>
            <h2>A global clothing &amp;<em>lifestyle brand.</em></h2>
            <p>
              Our ambition is to build a name that represents creativity,
              quality and responsible growth — from Sri Lanka to markets around
              the world.
            </p>
          </div>

          <div className="vision-grid">
            <article data-reveal>
              <span>Vision</span>
              <p>To be the most compelling global clothing and lifestyle brand.</p>
            </article>
            <article data-reveal data-reveal-delay="70">
              <span>Mission</span>
              <p>
                To create value through rare and inimitable creativity, and
                quality efficient processes that enable human-centred
                sustainable growth.
              </p>
            </article>
            <article data-reveal data-reveal-delay="140">
              <span>Values</span>
              <p>Humility. Passion for excellence. Trust. Mutual respect.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-closing">
        <div className="shell final-closing-inner" data-reveal>
          <p className="micro-label">The future</p>
          <h2>The next chapter<em>starts here.</em></h2>
          <p>
            From a family legacy of apparel expertise to a growing Sri Lankan
            manufacturing business, Colombo Design House is building for the
            next generation of clothing.
          </p>

          <div className="closing-points">
            <span>More capacity.</span>
            <span>More markets.</span>
            <span>More possibilities.</span>
          </div>

          <a className="final-closing-link" href="#contact">
            Partner With CDH <span>↗</span>
          </a>
        </div>
      </section>

      <section id="contact" className="final-contact">
        <div className="shell final-contact-grid" data-reveal>
          <div>
            <p className="micro-label">Let&apos;s make something great.</p>
            <h2>Looking for a flexible apparel manufacturing partner?</h2>
            <p>Let&apos;s talk.</p>
          </div>

          <div className="final-contact-details">
            <div>
              <strong>Nuwan Samarakkody</strong>
              <span>Director – Sales &amp; Operations</span>
              <span>Colombo Design House (Pvt) Ltd.</span>
              <span>Malabe, Sri Lanka</span>
            </div>
            <a href="tel:+94112562018">+94 11 256 2018</a>
            <a href="tel:+94778875181">+94 77 887 5181</a>
            <a href="mailto:nuwan@ariyainternational.com">
              nuwan@ariyainternational.com
            </a>
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
