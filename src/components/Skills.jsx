const skillCategories = [
  {
    title: 'Financial Modelling',
    items: [
      'DCF',
      'LBO',
      'M&A Accretion/Dilution',
      'Trading Comps',
      'Precedent Transactions',
      'Unit Economics',
    ],
  },
  {
    title: 'Tools',
    items: ['Excel (Advanced)', 'Python', 'SQL', 'Bloomberg (basic)'],
  },
  {
    title: 'Languages',
    items: ['English (Native)', 'Arabic (Native)', 'Mandarin (Basic)'],
  },
  {
    title: 'Certifications',
    items: [
      'SEO London Finance Training',
      'Agentic AI for Risk Analysis',
      'McKinsey Skills for Success 2025',
    ],
  },
];

function Skills({ isVisible }) {
  return (
    <section
      id="skills"
      className={`py-24 px-6 sm:px-12 lg:px-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[32px] sm:text-[40px] font-bold text-white mb-12"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-sm p-6"
            >
              {/* Category header - gold, cursor-blink effect */}
              <h3 className="text-gold font-mono text-sm mb-4 flex items-center gap-1">
                <span>&gt;</span>
                <span>{category.title}</span>
                <span className="inline-block w-2 h-4 bg-gold animate-cursor-blink ml-0.5" />
              </h3>
              {/* Skill tags - terminal command input style, monospace */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1.5 bg-[#0A0E1A] border border-border rounded-sm text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
