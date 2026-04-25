/* global React, window, SBEyebrow, SBButton */
const { useState, useEffect, useRef, useCallback } = React;

// ─── Hero ───

function SBHero({ tweaks }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{ background: '#fff', paddingTop: 120, overflow: 'hidden' }}>
      {/* Centered name + est. */}
      <div style={{
        textAlign: 'center', padding: '0 48px 48px',
        opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(16px)',
        transition: 'all 0.8s cubic-bezier(0.22,0.61,0.36,1) 0.1s',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display-sans)', fontWeight: 400,
          fontSize: 'clamp(18px, 2.2vw, 28px)', letterSpacing: '0.35em',
          textTransform: 'uppercase', color: 'var(--sc-black)', margin: 0,
        }}>Serena Bolton</h1>
        <p style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300,
          fontSize: 14, color: 'var(--fg-3)', margin: '6px 0 0',
        }}>Est. 2002</p>
      </div>

      {/* Two hero images side by side — near edge-to-edge */}
      <div style={{
        padding: '0 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
        opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(20px)',
        transition: 'all 1s cubic-bezier(0.22,0.61,0.36,1) 0.25s',
      }}>
        <div style={{
          aspectRatio: '3/4', overflow: 'hidden',
          backgroundImage: 'url(uploads/London-portrait-photography-11-0210e99b.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}></div>
        <div style={{
          aspectRatio: '3/4', overflow: 'hidden',
          backgroundImage: 'url(uploads/london-personal-branding-photography-02-b85a7e93.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}></div>
      </div>

      {/* Big headline */}
      <div style={{
        textAlign: 'center', padding: '160px 48px 24px',
        opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(20px)',
        transition: 'all 1s cubic-bezier(0.22,0.61,0.36,1) 0.5s',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300,
          fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.15,
          letterSpacing: '0em', textTransform: 'uppercase',
          color: 'var(--sc-black)', margin: 0,
        }}>
          THE <em style={{ fontStyle: 'italic', letterSpacing: '0.02em', textTransform: 'none' }}>finest</em> LONDON<br />
          PORTRAIT PHOTOGRAPHY
        </h2>
      </div>

      {/* Body copy */}
      <div style={{
        textAlign: 'center', maxWidth: 520, margin: '0 auto',
        padding: '16px 48px 160px',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s cubic-bezier(0.22,0.61,0.36,1) 0.7s',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 14,
          lineHeight: 1.7, color: 'var(--fg-2)',
        }}>
          Serena Bolton Photography is a premier London-based photography studio founded in 2002 by principal photographer Serena Bolton.
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 14,
          lineHeight: 1.7, color: 'var(--fg-2)', margin: '12px 0 0',
        }}>
          We create portrait photography for individuals, families and organisations who value authenticity, quality and exceptional craftsmanship.
        </p>
      </div>

      {/* Scattered photo collage with parallax — two pairs */}
      <div id="collage-container" style={{
        position: 'relative', width: '85%', margin: '0 auto',
        padding: '0 0 48px', height: 520,
        marginBottom: 380,
      }}>
        {/* Left pair */}
        <div className="parallax-img" data-speed="0.03" style={{
          position: 'absolute', left: '0%', top: 0, width: '24%', aspectRatio: '3/4',
          backgroundImage: 'url(uploads/London-portrait-photography-11.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          zIndex: 1,
        }}></div>
        <div className="parallax-img" data-speed="-0.04" style={{
          position: 'absolute', left: '14%', top: '25%', width: '26%', aspectRatio: '4/5',
          backgroundImage: 'url(uploads/women-photography-london-39.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          zIndex: 2,
        }}></div>

        {/* Right pair */}
        <div className="parallax-img" data-speed="0.035" style={{
          position: 'absolute', left: '50%', top: 0, width: '28%', aspectRatio: '4/3',
          backgroundImage: 'url(uploads/teen-photography_-26.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center top',
          zIndex: 1,
        }}></div>
        <div className="parallax-img" data-speed="-0.03" style={{
          position: 'absolute', right: '0%', top: '15%', width: '26%', aspectRatio: '3/4',
          backgroundImage: 'url(uploads/Lifestyle-Family-Photography-London-Serena-Bolton-Photography-3.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          zIndex: 2,
        }}></div>
      </div>
    </section>
  );
}

// ─── Pinned / Sticky Reveal Sections ───

function SBPinnedSections({ tweaks }) {
  const panels = [
  {
    eyebrow: 'Approach',
    heading: 'See clearly.',
    body: 'Every session begins with understanding — your story, your ambition, the image you want the world to see. No templates. No shortcuts.',
    image: 'uploads/womens-photography-london-72.webp'
  },
  {
    eyebrow: 'Craft',
    heading: 'Feel everything.',
    body: 'Light, composition, the space between moments — I work with the raw material of presence to create images that carry weight long after the shutter closes.',
    image: 'uploads/Corporate-Headshots-London-Serena-Bolton-Photography-035-1.webp'
  },
  {
    eyebrow: 'Result',
    heading: 'Own the room.',
    body: 'A portrait should do more than capture a face. It should stop a conversation, open a door, close a deal. That is what I deliver.',
    image: 'uploads/london-personal-branding-photography-02.webp'
  }];


  return (
    <section style={{ position: 'relative' }}>
      {panels.map((panel, i) =>
      <div key={i} style={{
        position: 'sticky', top: 0, minHeight: '100vh',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: i % 2 === 0 ? 'var(--sc-satin-linen)' : 'var(--sc-eggshell)',
        borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none',
        zIndex: i + 1
      }}>
          {/* Text side */}
          <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '96px 80px',
          order: i % 2 === 0 ? 0 : 1, color: "rgb(0, 0, 0)"
        }}>
            <SBEyebrow>{panel.eyebrow}</SBEyebrow>
            <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05,
            letterSpacing: '-0.02em', color: 'var(--fg-1)',
            margin: '20px 0 0'
          }}>{panel.heading}</h2>
            <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 17,
            lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 420,
            margin: '24px 0 0'
          }}>{panel.body}</p>
            <div style={{ marginTop: 40 }}>
              <SBButton variant="link">Learn more</SBButton>
            </div>
          </div>
          {/* Image side */}
          <div style={{
          position: 'relative', overflow: 'hidden',
          order: i % 2 === 0 ? 1 : 0
        }}>
            <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${panel.image})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transition: 'transform 800ms cubic-bezier(0.22,0.61,0.36,1)'
          }}></div>
          </div>
        </div>
      )}
    </section>);

}

// ─── Stacking Cards on Scroll ───

function SBStackingCards({ tweaks }) {
  const services = [
  { title: 'Portrait Sessions', desc: 'Headshots and editorial portraits for founders, executives and public figures. Studio or location.', images: ['uploads/Corporate-Headshots-London-Serena-Bolton-Photography-035-1.webp', 'uploads/London-portrait-photography-11.webp', 'uploads/teen-photography_-26.webp', 'uploads/london-personal-branding-photography-02.webp'] },
  { title: 'Brand Campaigns', desc: 'Full-day shoots for brands that need a library of images — product, lifestyle, team, spaces.', images: ['uploads/london-personal-branding-photography-02-b85a7e93.webp', 'uploads/womens-photography-london-49.webp', 'uploads/women-photography-london-39.webp', 'uploads/womens-photography-london-72.webp'] },
  { title: 'Creative Direction', desc: 'End-to-end visual strategy for launches, rebrands, and campaigns. Concept through final delivery.', images: ['uploads/teen-photography_-26.webp', 'uploads/teen-photography_-31.webp', 'uploads/women-photography-london-39.webp', 'uploads/London-portrait-photography-11-0210e99b.webp'] },
  { title: 'Retainer Packages', desc: 'Ongoing photography for brands that publish regularly. Quarterly or monthly commitments.', images: ['uploads/Lifestyle-Family-Photography-London-Serena-Bolton-Photography-3.webp', 'uploads/family-photography-london-5.webp', 'uploads/womens-photography-london-72.webp', 'uploads/teen-photography_-31.webp'] }];


  return (
    <section id="services" style={{
      background: '#F5F0E8', color: 'var(--sc-black)',
      padding: '128px 0 64px'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px' }}>
        <SBEyebrow>Services</SBEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300,
          fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1.1,
          letterSpacing: '-0.02em', color: 'var(--sc-black)',
          margin: '16px 0 0', maxWidth: 600
        }}>
          What I offer
        </h2>
      </div>

      {/* Sticky stacking cards container */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '64px 48px 0', position: 'relative' }}>
        {services.map((svc, i) =>
        <div key={i} style={{
          position: 'sticky',
          top: `${100 + i * 96}px`,
          marginBottom: 0,
          zIndex: i + 1,
          height: '60vh',
          minHeight: 360,
        }}>
            <div style={{
            background: '#F5F0E8',
            borderTop: '1px solid rgba(27,27,27,0.18)',
            padding: '32px 0 0',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            alignItems: 'start', gap: 48,
            height: '100%',
            position: 'relative',
          }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontWeight: 300,
                fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em',
                color: 'var(--sc-black)', margin: 0,
              }}>{svc.title}</h3>
              <div>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 15,
                  lineHeight: 1.6, color: 'var(--fg-2)',
                  maxWidth: 420, margin: 0,
                }}>{svc.desc}</p>
              </div>
              <div style={{
                position: 'absolute', right: 0, top: 32,
              }}>
                <SBButton variant="link">View →</SBButton>
              </div>
              {/* Image row — sits below title, hidden when next card stacks on top */}
              <div style={{
                position: 'absolute', left: 0, right: 0, top: 140,
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
              }}>
                {svc.images.map((src, j) =>
                  <div key={j} style={{
                    aspectRatio: '3/4', overflow: 'hidden',
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                  }}></div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}

// ─── Portfolio Grid ───

function SBPortfolio({ tweaks }) {
  const [hovIdx, setHovIdx] = useState(-1);
  const works = [
  { title: 'Editorial Portrait', cat: 'Portrait', img: 'uploads/womans-photography-london-031 (1).webp', aspect: '3/4' },
  { title: 'Corporate Headshots', cat: 'Brand', img: 'uploads/London-portrait-photography-11.webp', aspect: '4/5' },
  { title: 'Teen Portrait', cat: 'Portrait', img: 'uploads/teen-photography_-26.webp', aspect: '3/4' },
  { title: 'Equestrian Series', cat: 'Editorial', img: 'uploads/womens-photography-london-72.webp', aspect: '4/5' },
  { title: 'Fashion Editorial', cat: 'Editorial', img: 'uploads/women-photography-london-39.webp', aspect: '4/5' },
  { title: 'Personal Branding', cat: 'Brand', img: 'uploads/london-personal-branding-photography-02.webp', aspect: '3/4' }];


  return (
    <section id="portfolio" style={{
      background: 'var(--sc-satin-linen)', padding: '128px 0'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <SBEyebrow>Selected work</SBEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1.1,
              letterSpacing: '-0.02em', margin: '16px 0 0'
            }}>Portfolio</h2>
          </div>
          <SBButton variant="link">View all work</SBButton>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24
        }}>
          {works.map((w, i) =>
          <div key={i}
          onMouseEnter={() => setHovIdx(i)}
          onMouseLeave={() => setHovIdx(-1)}
          style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 6, cursor: 'pointer',
            marginTop: i % 2 === 1 ? 48 : 0
          }}>
              <div style={{
              aspectRatio: w.aspect, overflow: 'hidden', borderRadius: 6
            }}>
                <div style={{
                width: '100%', height: '100%',
                backgroundImage: `url(${w.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                transform: hovIdx === i ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 700ms cubic-bezier(0.22,0.61,0.36,1)'
              }}></div>
              </div>
              {/* Overlay */}
              <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '48px 24px 24px',
              background: 'linear-gradient(to top, rgba(27,27,27,0.6) 0%, transparent 100%)',
              opacity: hovIdx === i ? 1 : 0,
              transition: 'opacity 400ms ease'
            }}>
                <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'rgba(234,228,215,0.6)'
              }}>{w.cat}</span>
                <div style={{
                fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 22,
                color: 'var(--sc-satin-linen)', marginTop: 4
              }}>{w.title}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ─── About ───

function SBAbout({ tweaks }) {
  return (
    <section id="about" style={{
      background: 'var(--sc-eggshell)',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '128px 48px',
        display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 96, alignItems: 'center'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5', borderRadius: 8, overflow: 'hidden',
            backgroundImage: 'url(uploads/Serena.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}></div>
        </div>
        <div>
          <SBEyebrow>About</SBEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', margin: '16px 0 0'
          }}>
            Hello, I'm <em style={{ fontWeight: 400, fontStyle: 'italic' }}>Serena</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 17,
            lineHeight: 1.75, color: 'var(--fg-2)', margin: '28px 0 0', maxWidth: 520
          }}>
            For fifteen years, I've photographed the people who shape London's cultural and commercial landscape — founders, creatives, leaders and the brands they build.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 17,
            lineHeight: 1.75, color: 'var(--fg-2)', margin: '20px 0 0', maxWidth: 520
          }}>
            My work has appeared in British Vogue, the Financial Times, Tatler, and across campaigns for some of the UK's most recognised brands. I believe a great portrait is the shortest distance between you and the room you want to be in.
          </p>
          <blockquote style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic',
            fontSize: 24, lineHeight: 1.35, color: 'var(--fg-1)',
            margin: '40px 0 0', padding: 0, borderLeft: 'none'
          }}>
            "A portrait should be a door, not a mirror."
          </blockquote>
          <div style={{ marginTop: 40 }}>
            <SBButton>Read my story</SBButton>
          </div>
        </div>
      </div>
    </section>);

}

// ─── Journal / Blog ───

function SBJournal({ tweaks }) {
  const [hovIdx, setHovIdx] = useState(-1);
  const posts = [
  { title: 'On light, and learning to wait for it', cat: 'Process', img: 'uploads/teen-photography_-31.webp' },
  { title: 'What your headshot says before you speak', cat: 'Brand', img: 'uploads/Corporate-Headshots-London-Serena-Bolton-Photography-035-1.webp' },
  { title: 'A family session in South Kensington', cat: 'Behind the Scenes', img: 'uploads/Lifestyle-Family-Photography-London-Serena-Bolton-Photography-3.webp' }];


  return (
    <section id="journal" style={{
      background: 'var(--sc-satin-linen)', padding: '128px 0',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <SBEyebrow>Journal</SBEyebrow>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 1.1,
              letterSpacing: '-0.02em', margin: '16px 0 0'
            }}>From the studio</h2>
          </div>
          <SBButton variant="link">All posts</SBButton>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {posts.map((p, i) =>
          <article key={i}
          onMouseEnter={() => setHovIdx(i)}
          onMouseLeave={() => setHovIdx(-1)}
          style={{ cursor: 'pointer' }}>
              <div style={{
              aspectRatio: '16/10', borderRadius: 8, overflow: 'hidden',
              marginBottom: 20
            }}>
                <div style={{
                width: '100%', height: '100%',
                backgroundImage: `url(${p.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                transform: hovIdx === i ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 700ms cubic-bezier(0.22,0.61,0.36,1)'
              }}></div>
              </div>
              <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)'
            }}>{p.cat}</span>
              <h3 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 24,
              lineHeight: 1.25, letterSpacing: '-0.01em', margin: '10px 0 0',
              color: 'var(--fg-1)'
            }}>{p.title}</h3>
            </article>
          )}
        </div>
      </div>
    </section>);

}

// ─── CTA Footer ───

function SBFooter({ tweaks }) {
  return (
    <footer id="contact" style={{
      background: '#F5F0E8', color: 'var(--sc-black)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Main CTA area */}
      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '160px 48px 96px',
        position: 'relative', zIndex: 2
      }}>
        <div style={{ maxWidth: 700 }}>
          <SBEyebrow>Let's work together</SBEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05,
            letterSpacing: '-0.02em', margin: '20px 0 0',
            color: 'var(--sc-black)'
          }}>
            Ready to be <em style={{ fontWeight: 400, fontStyle: 'italic' }}>seen?</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 17,
            lineHeight: 1.7, color: 'var(--fg-2)',
            maxWidth: 480, margin: '28px 0 0'
          }}>
            I take on a limited number of clients each quarter.
            If you're ready for portraits that do justice to the work you've built — let's talk.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 48 }}>
            <SBButton>Start a conversation</SBButton>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '0 48px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgba(27,27,27,0.12)', paddingTop: 32
      }}>
        <div style={{ display: 'flex', gap: 28 }}>
          {['Instagram', 'LinkedIn', 'Vimeo'].map((s) =>
          <a key={s} href="#" style={{
            fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--fg-2)',
            textDecoration: 'none'
          }}>{s}</a>
          )}
        </div>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)'
        }}>© 2026 Serena Bolton Photography</span>
      </div>
    </footer>);

}

Object.assign(window, { SBHero, SBPinnedSections, SBStackingCards, SBPortfolio, SBAbout, SBJournal, SBFooter });