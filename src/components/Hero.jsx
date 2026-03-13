import { useState, useEffect } from 'react';

const TICKER_ITEMS = ['DCF Valuation', 'LBO Analysis', 'Unit Economics', 'M&A Advisory'];

function Hero() {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((i) => (i + 1) % TICKER_ITEMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center w-full overflow-hidden">
      {/* Very faint diagonal line pattern (graph paper at 5% opacity) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 24px,
              #C9A84C 24px,
              #C9A84C 25px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 24px,
              #C9A84C 24px,
              #C9A84C 25px
            )
          `,
        }}
      />

      {/* Market data ticker - top right, very low opacity */}
      <div className="absolute top-8 right-6 sm:right-12 lg:right-24 font-mono text-[10px] sm:text-xs text-secondary opacity-20">
        <span className="text-gold/80">FTSE 100:</span> 8,432{' '}
        <span className="text-emerald-500/80">▲ 0.3%</span>
        <span className="mx-3 opacity-50">|</span>
        <span className="text-gold/80">GBP/USD:</span> 1.2641
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col">
          {/* Name - center-left, 72px+, bold, tight tracking */}
          <h1
            className="text-[56px] sm:text-[64px] lg:text-[80px] xl:text-[88px] font-extrabold tracking-[-0.04em] text-white mb-3"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Yassin Al-Yassin
          </h1>

          {/* Animated ticker - monospace, Bloomberg-style */}
          <div className="font-mono text-lg sm:text-xl text-gold mb-2 min-h-[1.5em] flex items-center">
            <span key={tickerIndex} className="inline-block animate-fade-in">
              {TICKER_ITEMS[tickerIndex]}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-secondary mb-10 max-w-2xl">
            Electronic Engineering student at the University of Southampton | Finance & Investment
          </p>

          {/* CTAs - inline */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-gold text-[#0A0E1A] font-semibold text-sm rounded-sm border border-gold hover:bg-gold/90 transition-colors"
            >
              View Projects
            </button>
            <a
              href="/cv.pdf"
              download="Yassin_Al-Yassin_CV.pdf"
              className="px-6 py-3 border border-gold text-gold font-semibold text-sm rounded-sm hover:bg-gold/10 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
