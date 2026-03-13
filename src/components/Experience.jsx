const experiences = [
  {
    company: 'American Express',
    role: 'ICS Business Risk Intern',
    location: 'Brighton',
    period: 'June to Aug 2025',
  },
  {
    company: 'Blackmont Consulting',
    role: 'Business Consultant',
    location: 'Cambridge',
    period: 'Feb 2026 to Present',
  },
  {
    company: '180 Degrees Consulting',
    role: 'Vice President',
    location: 'Southampton',
    period: 'Sep 2024 to Present',
  },
];

function Experience({ isVisible }) {
  return (
    <section
      id="experience"
      className={`py-24 px-6 sm:px-12 lg:px-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-[32px] sm:text-[40px] font-bold text-white mb-12"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
                {/* Timeline dot - pulse animation */}
                <div className="absolute left-2 sm:left-4 top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-[#0A0E1A] animate-dot-pulse" />

                <div className="bg-card border border-border border-l-4 border-l-gold rounded-sm p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{exp.company}</h3>
                    <span className="font-mono text-gold text-xs">{exp.period}</span>
                  </div>
                  <p className="text-gold font-medium text-sm mb-1">{exp.role}</p>
                  <p className="text-secondary text-sm">{exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
