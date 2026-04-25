/* global React, window */
const { useState, useEffect, useRef, useCallback } = React;

// ─── Primitives ───

function SBEyebrow({ children, style, light }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display-sans)', fontWeight: 500, fontSize: 11,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: light ? 'rgba(234,228,215,0.55)' : 'var(--fg-3)', ...style
    }}>{children}</span>
  );
}

function SBButton({ children, onClick, variant = 'primary', light, style: sx }) {
  const [hov, setHov] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: 'var(--font-display-sans)', fontWeight: 500, fontSize: 13,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    padding: variant === 'link' ? 0 : '15px 32px',
    borderRadius: 0, cursor: 'pointer', textDecoration: 'none',
    transition: 'all 240ms cubic-bezier(0.22,0.61,0.36,1)',
    border: 'none',
  };
  const variants = {
    primary: {
      background: light ? 'var(--sc-satin-linen)' : 'var(--sc-black)',
      color: light ? 'var(--sc-black)' : 'var(--sc-satin-linen)',
      opacity: hov ? 0.85 : 1,
    },
    outline: {
      background: 'transparent',
      color: light ? 'var(--sc-satin-linen)' : 'var(--sc-black)',
      border: `1px solid ${light ? 'rgba(234,228,215,0.3)' : 'rgba(27,27,27,0.2)'}`,
      opacity: hov ? 0.7 : 1,
    },
    link: {
      background: 'none',
      color: light ? 'var(--sc-satin-linen)' : 'var(--sc-black)',
      borderBottom: `1px solid ${light ? 'rgba(234,228,215,0.4)' : 'rgba(27,27,27,0.25)'}`,
      paddingBottom: 2,
    },
  };
  return (
    <button style={{ ...base, ...variants[variant], ...sx }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}>
      {children}
      {variant !== 'link' && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: hov ? 'translate(2px,-2px)' : 'none', transition: 'transform 240ms cubic-bezier(0.22,0.61,0.36,1)' }}>
          <path d="M7 17L17 7M9 7h8v8"/>
        </svg>
      )}
    </button>
  );
}

// ─── Nav ───

function SBNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = ['Portfolio', 'Services', 'About', 'Journal', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(27,27,27,0.08)' : '1px solid transparent',
      transition: 'all 420ms cubic-bezier(0.22,0.61,0.36,1)',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '20px 48px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      }}>
        <a href="#" style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 26,
          color: 'var(--sc-black)', textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}>
          {/* wordmark removed */}
        </a>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
          {items.map(it => (
            <a key={it} href={`#${it.toLowerCase()}`} style={{
              fontFamily: 'var(--font-display-sans)', fontSize: 12, fontWeight: 400,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--fg-2)', textDecoration: 'none',
              transition: 'color 240ms ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--sc-black)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-2)'}
            >{it}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── useScrollProgress hook ───

function useScrollProgress(ref, offset = { start: 0, end: 1 }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const rawStart = 1 - rect.top / vh;
      const rawEnd = 1 - (rect.bottom - vh) / vh;
      const raw = rect.top <= 0
        ? Math.min(1, -rect.top / (rect.height - vh))
        : rect.bottom >= vh ? 0 : 0;
      setProgress(Math.max(0, Math.min(1, raw)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);
  return progress;
}

Object.assign(window, { SBEyebrow, SBButton, SBNav, useScrollProgress });
