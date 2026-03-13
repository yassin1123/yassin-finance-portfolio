import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience', isNumeric: true },
  { value: 3, suffix: '+', label: 'Financial Models', isNumeric: true },
  { value: 3, suffix: '', label: 'Sectors Covered', isNumeric: true },
  { value: 'First Class', suffix: '', label: 'Predicted', isNumeric: false },
];

function StatBox({ stat, isVisible }) {
  const [displayValue, setDisplayValue] = useState(stat.isNumeric ? 0 : stat.value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!isVisible || !stat.isNumeric || hasAnimated) return;

    const target = stat.value;
    const duration = 1200;
    const steps = 30;
    const stepDuration = duration / steps;
    const increment = target / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(target);
        setHasAnimated(true);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.value, stat.isNumeric, hasAnimated]);

  return (
    <div className="bg-card border border-border rounded-sm p-5 text-center relative overflow-hidden">
      {/* Thin gold top border - Bloomberg terminal style */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
      <span className="font-mono text-gold text-xl sm:text-2xl font-medium block mb-1">
        {stat.isNumeric ? displayValue : stat.value}
        {stat.suffix}
      </span>
      <span className="text-secondary text-xs uppercase tracking-wider">{stat.label}</span>
    </div>
  );
}

function About({ isVisible }) {
  return (
    <section
      id="about"
      className={`py-24 px-6 sm:px-12 lg:px-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
      <h2
        className="text-[32px] sm:text-[40px] font-bold text-white mb-8"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        About
      </h2>

      <div className="space-y-6 text-secondary mb-16 text-base leading-[1.7]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <p>
          Second-year Electronic Engineering student at the University of Southampton with a
          predicted First Class. Finance background spanning leveraged buyout analysis, DCF
          valuation, unit economics modelling, investment banking, and management consulting.
        </p>
        <p>
          Experience includes an internship at American Express (ICS Business Risk), active
          consulting at Blackmont Consulting, and Head of Events at the University of Southampton
          Trading and Investment Society; where I run modelling workshops and have brought in
          professionals from JPMorgan, Schroders, and Barclays. All financial models on this site
          are built independently from public filings and market data.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatBox key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default About;
