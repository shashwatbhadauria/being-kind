import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

// ============================================================
// BEING KIND INDIA — Main Homepage
// Structured in 4 chapters like fromfauna.org
// ============================================================

// Campaigns data
const CAMPAIGNS = [
  {
    tag: 'Ongoing Campaign',
    title: 'Daily Feeding Drive',
    desc: 'Every single day, our volunteers reach 500+ stray dogs across Mumbai with food, water, and care — because no dog should sleep hungry.',
    image: '/images/feeding-scene.jpg',
    imageFallback: '/images/hero-dog.png',
  },
  {
    tag: 'Monthly Program',
    title: 'Vaccination Camp',
    desc: 'We run systematic ABC (Animal Birth Control) and rabies vaccination drives across local communities, protecting both animals and people.',
    image: '/images/vaccination-camp.png',
    imageFallback: '/images/vaccination-camp.png',
  },
  {
    tag: 'Awareness Initiative',
    title: 'Paws for Awareness',
    desc: 'We take our message to schools, colleges, and housing societies — building a generation that chooses compassion over cruelty.',
    image: '/images/dogs-street.png',
    imageFallback: '/images/dogs-street.png',
  },
];

// Partners / supporters
const PARTNERS = [
  'PFA India',
  'Friendicoes',
  'PETA India',
  'Animal Aid India',
  'Welfare of Stray Dogs',
  'SPCA Mumbai',
  'HSI India',
];

// ============================================================
export default function Home() {
  const { setActiveChapter } = useOutletContext() || {};
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Section refs for IntersectionObserver
  const ch1Ref = useRef(null);
  const ch2Ref = useRef(null);
  const ch3Ref = useRef(null);
  const ch4Ref = useRef(null);

  // Track active chapter for frame label updates
  useEffect(() => {
    if (!setActiveChapter) return;

    const observers = [];
    const sections = [
      { ref: ch1Ref, id: 'ch1' },
      { ref: ch2Ref, id: 'ch2' },
      { ref: ch3Ref, id: 'ch3' },
      { ref: ch4Ref, id: 'ch4' },
    ];

    sections.forEach(({ ref, id }) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveChapter(id); },
        { threshold: 0.3 }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveChapter]);

  // Carousel navigation
  const prevSlide = () => setCarouselIdx((i) => (i - 1 + CAMPAIGNS.length) % CAMPAIGNS.length);
  const nextSlide = () => setCarouselIdx((i) => (i + 1) % CAMPAIGNS.length);

  return (
    <div className="home-page">

      {/* ====================================================
          CHAPTER 1: ABOUT BEING KIND (white background)
          ==================================================== */}
      <section id="ch1" className="chapter ch1" ref={ch1Ref}>

        {/* 1a — Hero */}
        <div className="hero-section">
          {/* Organic navy blob */}
          <div className="hero-blob" aria-hidden="true" />

          {/* Big headline — alternating navy / gold */}
          <div className="hero-content">
            <h1 className="hero-h1">
              Every Stray<br />
              <em>Deserves</em><br />
              a Life.
            </h1>
          </div>

          {/* Scroll hint */}
          <span className="scroll-hint">Scroll to explore</span>
        </div>

        {/* 1b — What is Being Kind */}
        <div className="section-intro">
          <span className="section-label">About Being Kind</span>
          <p className="section-statement">
            Being Kind India is a Mumbai-based animal welfare movement — feeding,
            healing, and advocating for India's strays one day at a time.
          </p>
        </div>

        {/* Right-side image with rounded top */}
        <div className="intro-image-block">
          <img
            src="/images/hero-dog.png"
            alt="A stray dog in warm sunlight — a symbol of every animal Being Kind helps"
            loading="lazy"
          />
        </div>

        {/* 1c — Dual CTA */}
        <div className="cta-split">
          <div className="cta-box">
            <p className="cta-box-heading">
              Help us feed<br />500+ dogs today.
            </p>
            <a
              href="https://www.instagram.com/beingkind_india/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              Donate Now →
            </a>
          </div>
          <div className="cta-box">
            <p className="cta-box-heading">
              Become a volunteer<br />or foster parent.
            </p>
            <button
              className="cta-link"
              onClick={() => document.getElementById('ch4')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Mission →
            </button>
          </div>
        </div>

        {/* 1d — Transition to Chapter 2 */}
        <div
          className="chapter-end-block"
          onClick={() => document.getElementById('ch2')?.scrollIntoView({ behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && document.getElementById('ch2')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="chapter-end-label">Chapter 2</span>
          <span className="chapter-end-title">Why Strays Suffer</span>
        </div>
      </section>

      {/* ====================================================
          CHAPTER 2: WHY STRAYS SUFFER (beige background)
          ==================================================== */}
      <section id="ch2" className="chapter ch2" ref={ch2Ref}>

        {/* 2a — Problem statement */}
        <div className="problem-intro">
          <span className="section-label">Why They Need Us</span>
          <h2>
            India has over 35 million stray animals.
            Most never know safety, care, or a gentle hand.
          </h2>
        </div>

        {/* 2b — Benefit: Animals */}
        <div className="benefit-section">
          <div className="benefit-text">
            <h2 className="benefit-heading">Animals</h2>
            <p className="benefit-desc">
              Every dog we reach gets{' '}
              <img
                src="/images/hero-dog.png"
                alt="dog inline"
                className="inline-img"
              />{' '}
              daily food, essential vaccinations, and the dignity they deserve —
              breaking the cycle of neglect and suffering.
            </p>
          </div>
          <div className="benefit-image-side">
            <div className="blob-image-wrapper">
              <div className="blob-image-shape">
                <img
                  src="/images/dogs-street.png"
                  alt="Stray dogs on a Mumbai street"
                  loading="lazy"
                />
                <div className="blob-overlay-text">
                  <strong className="blob-overlay-big">NO</strong>
                  <span className="blob-overlay-list">
                    neglect<br />cruelty<br />abandonment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2c — Benefit: People */}
        <div className="benefit-section" style={{ flexDirection: 'row-reverse' }}>
          <div className="benefit-text">
            <h2 className="benefit-heading">People</h2>
            <p className="benefit-desc">
              Communities where strays are cared for experience safer streets,
              fewer disease outbreaks, and a deeper bond between humans and animals.
              Kindness is contagious.
            </p>
          </div>
          <div className="benefit-image-side" style={{ padding: '40px 0 40px 40px' }}>
            <div className="blob-image-wrapper">
              <div className="blob-image-shape">
                <img
                  src="/images/vaccination-camp.png"
                  alt="Volunteers caring for stray dogs"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2d — Stats Banner */}
        <div className="stats-banner">
          <div>
            <span className="stat-number">500+</span>
            <span className="stat-label">Dogs Fed Daily</span>
          </div>
          <div>
            <span className="stat-number">200+</span>
            <span className="stat-label">Vaccinations Monthly</span>
          </div>
          <div>
            <span className="stat-number">50+</span>
            <span className="stat-label">Successful Adoptions</span>
          </div>
        </div>

        {/* 2e — Testimonial */}
        <div className="testimonial-section">
          <blockquote className="testimonial-quote">
            "Before Being Kind started feeding in our area, we were scared of the
            dogs. Now they know us, trust us — and so do we. It changed everything."
          </blockquote>
          <p className="testimonial-author">— Resident, Andheri West, Mumbai</p>
        </div>

        {/* 2f — Transition to Chapter 3 */}
        <div
          className="chapter-end-block"
          onClick={() => document.getElementById('ch3')?.scrollIntoView({ behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && document.getElementById('ch3')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="chapter-end-label">Chapter 3</span>
          <span className="chapter-end-title">How We Help</span>
        </div>
      </section>

      {/* ====================================================
          CHAPTER 3: HOW WE HELP (white background)
          ==================================================== */}
      <section id="ch3" className="chapter ch3" ref={ch3Ref}>

        {/* 3a — Intro */}
        <div className="how-intro">
          <span className="section-label">What We Do</span>
          <h2>
            Four programs creating lasting, measurable change for
            India's street animals.
          </h2>
        </div>

        {/* 3b — Full-width image */}
        <div className="steps-image">
          <img
            src="/images/vaccination-camp.png"
            alt="Being Kind volunteers at work"
            loading="lazy"
          />
        </div>

        {/* 3c — Steps 2×2 grid */}
        <div className="steps-grid">
          <div className="step-item">
            <span className="step-number">01 — Daily Feeding</span>
            <h3 className="step-title">We feed. Every day. No excuses.</h3>
            <p className="step-desc">
              Our volunteers run systematic feeding routes across Mumbai, reaching
              over 500 stray dogs with nutritious meals and clean water every single
              day — rain or shine, 365 days a year.
            </p>
          </div>

          <div className="step-item">
            <span className="step-number">02 — Vaccination Drives</span>
            <h3 className="step-title">Prevention through compassion.</h3>
            <p className="step-desc">
              We conduct monthly Animal Birth Control (ABC) and rabies vaccination
              camps in partnership with veterinarians, protecting communities and
              controlling the stray population humanely.
            </p>
          </div>

          <div className="step-item">
            <span className="step-number">03 — Anti-Cruelty Advocacy</span>
            <h3 className="step-title">Fighting cruelty at every level.</h3>
            <p className="step-desc">
              We document, report, and actively fight cases of animal cruelty — working
              with authorities to enforce animal protection laws and hold perpetrators
              accountable across Maharashtra.
            </p>
          </div>

          <div className="step-item">
            <span className="step-number">04 — Adoption &amp; Fostering</span>
            <h3 className="step-title">Every dog deserves a home.</h3>
            <p className="step-desc">
              We rehabilitate injured and abandoned dogs and connect them with
              loving foster and adoptive families across India — giving them a
              second chance at a life full of love.
            </p>
          </div>
        </div>

        {/* 3d — Transition to Chapter 4 */}
        <div
          className="chapter-end-block"
          onClick={() => document.getElementById('ch4')?.scrollIntoView({ behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && document.getElementById('ch4')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="chapter-end-label">Chapter 4</span>
          <span className="chapter-end-title">Get Involved</span>
        </div>
      </section>

      {/* ====================================================
          CHAPTER 4: GET INVOLVED (beige background)
          ==================================================== */}
      <section id="ch4" className="chapter ch4" ref={ch4Ref}>

        {/* 4a — Campaigns Carousel */}
        <div className="campaigns-section">
          <h2>Our latest campaigns</h2>

          <div className="campaign-carousel">
            {/* Prev button */}
            <button
              className="carousel-btn"
              onClick={prevSlide}
              aria-label="Previous campaign"
              id="carousel-prev"
            >
              ←
            </button>

            {/* Carousel track */}
            <div className="carousel-track">
              <div
                className="carousel-inner"
                style={{ transform: `translateX(-${carouselIdx * 100}%)` }}
              >
                {CAMPAIGNS.map((c, i) => (
                  <div className="campaign-card" key={i}>
                    <div className="campaign-card-image">
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        onError={(e) => { e.target.src = c.imageFallback; }}
                      />
                    </div>
                    <div className="campaign-card-info">
                      <span className="campaign-tag">{c.tag}</span>
                      <h3 className="campaign-title">{c.title}</h3>
                      <p className="campaign-desc">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              className="carousel-btn"
              onClick={nextSlide}
              aria-label="Next campaign"
              id="carousel-next"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {CAMPAIGNS.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${carouselIdx === i ? ' active' : ''}`}
                onClick={() => setCarouselIdx(i)}
                aria-label={`Go to campaign ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 4b — Partners / Supporters */}
        <div className="partners-section">
          <h3>Supported by &amp; working alongside</h3>
          <div className="partners-row">
            {PARTNERS.map((p) => (
              <span key={p} className="partner-name">{p}</span>
            ))}
          </div>
        </div>

        {/* 4c — Site Footer */}
        <footer className="site-footer" role="contentinfo">
          <span className="footer-continue">Continue reading</span>

          {/* Large navigation links */}
          <nav className="footer-nav-large" aria-label="Footer navigation">
            <a
              href="#ch1"
              onClick={(e) => { e.preventDefault(); document.getElementById('ch1')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              About
            </a>
            <a
              href="#ch2"
              onClick={(e) => { e.preventDefault(); document.getElementById('ch2')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Why
            </a>
            <a
              href="#ch3"
              onClick={(e) => { e.preventDefault(); document.getElementById('ch3')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              How
            </a>
            <a
              href="https://www.instagram.com/beingkind_india/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </nav>

          <span className="footer-chapter-hint">or choose a chapter on the sides</span>

          {/* Bottom row: logo + social + links */}
          <div className="footer-bottom">
            {/* Logo */}
            <a href="#ch1" aria-label="Being Kind India" onClick={(e) => { e.preventDefault(); document.getElementById('ch1')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="footer-logo">
                <svg width="46" height="46" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18.5" stroke="#1c1852" strokeWidth="1.2" strokeOpacity="0.5" />
                  <circle cx="20" cy="20" r="12" stroke="#1c1852" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>
            </a>

            {/* Social icons */}
            <div className="footer-social">
              <a
                href="https://www.instagram.com/beingkind_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="mailto:beingkind.india@gmail.com"
                className="footer-social-icon"
                aria-label="Email"
              >
                @
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="WhatsApp"
              >
                W
              </a>
            </div>

            {/* Footer nav links */}
            <nav className="footer-links" aria-label="Footer links">
              <a
                href="#ch1"
                onClick={(e) => { e.preventDefault(); document.getElementById('ch1')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                About
              </a>
              <a
                href="#ch3"
                onClick={(e) => { e.preventDefault(); document.getElementById('ch3')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Work
              </a>
              <a
                href="https://www.instagram.com/beingkind_india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
              <a
                href="https://www.instagram.com/beingkind_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-gold"
              >
                Donate
              </a>
              <a
                href="https://www.instagram.com/beingkind_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-gold"
              >
                Instagram
              </a>
            </nav>
          </div>

          <span className="footer-copyright">
            © 2024 Being Kind India. All Rights Reserved. | Made with ♥ for every stray
          </span>
        </footer>
      </section>
    </div>
  );
}
