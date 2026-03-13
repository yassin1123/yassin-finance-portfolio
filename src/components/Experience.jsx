import { useState } from 'react';

function ChevronIcon({ expanded }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`transition-transform duration-300 ease-out ${expanded ? 'rotate-180' : ''}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const experiences = [
  {
    company: 'Blackmont Consulting',
    role: 'Business Consultant',
    location: 'Cambridge',
    period: 'Feb 2026 – Present',
    bullets: [
      'Leading competitive analysis workstream for Gononet Technologies (Bangladesh) on their cloud retail ERP product Retailerbook, benchmarking against seven enterprise software competitors across UK and global markets.',
      'Delivering structured findings and strategic recommendations to client leadership, applying consulting frameworks to a live commercial brief.',
      'Coordinating directly with the client and project manager across a multi-week engagement, managing deadlines and output quality independently.',
    ],
  },
  {
    company: 'University of Southampton Trading & Investment Society',
    role: 'Head of Events',
    location: 'Southampton',
    period: 'Oct 2025 – Present',
    bullets: [
      "Lead all events for the university's sole finance and investment society, serving a 100+ member community of students pursuing careers in finance.",
      'Organised and hosted DCF and LBO modelling workshops, personally teaching students the fundamentals of discounted cash flow and leveraged buyout analysis.',
      'Sourced and brought in finance professionals from JPMorgan, Schroders Asset Management, and Barclays Eagle Labs as guest speakers.',
      'Partnered with Careers26 to deliver a free structured finance career course to members, coordinating the collaboration end-to-end.',
      'Actively mentor members on CV writing, internship applications, and breaking into investment banking and asset management.',
    ],
  },
  {
    company: 'SEO London',
    role: 'Finance Pre-Internship Training Programme',
    location: 'London',
    period: 'Nov 2025 – Present',
    bullets: [
      "Completed SEO London's highly selective finance training programme, one of the UK's most recognised diversity pipelines into investment banking and financial services.",
      'Gained structured training in financial modelling, valuation, and investment banking technical skills ahead of summer internship season.',
      'Built network of finance professionals and peers now placed at major investment banks and asset managers across London.',
    ],
  },
  {
    company: 'American Express',
    role: 'ICS Business Risk Intern',
    location: 'Brighton',
    period: 'June 2025 – Aug 2025',
    bullets: [
      'Supported the ICS Business Risk team in identifying, assessing, and monitoring operational and compliance risks across international card services.',
      'Conducted data analysis using Excel and internal risk tools to surface trends and flag anomalies for senior review.',
      'Contributed to risk reporting frameworks and presented findings to team leads, developing structured thinking around financial controls and regulatory exposure.',
    ],
  },
  {
    company: '180 Degrees Consulting',
    role: 'Vice President',
    location: 'Southampton',
    period: 'Sep 2024 – Present',
    bullets: [
      "Serve as Vice President of the University of Southampton chapter of 180 Degrees Consulting, the world's largest consultancy for non-profits and social enterprises.",
      'Oversee project delivery and team performance across live client engagements, supporting junior consultants with research, analysis, and presentation quality.',
      'Act as primary liaison between project teams and chapter leadership, ensuring consistency of output and client satisfaction.',
    ],
  },
];

function Experience({ isVisible }) {
  const [expandedIndices, setExpandedIndices] = useState(new Set());

  const toggleCard = (index) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

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
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndices.has(index);
              return (
                <div key={index} className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
                  {/* Timeline dot - pulse animation */}
                  <div className="absolute left-2 sm:left-4 top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-[#0A0E1A] animate-dot-pulse" />

                  <div
                    className="bg-card border border-border border-l-4 border-l-gold rounded-sm p-6 pr-10 relative transition-colors duration-200 hover:bg-[#151d2e] cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-white font-semibold">{exp.company}</h3>
                      <span className="font-mono text-gold text-xs">{exp.period}</span>
                    </div>
                    <p className="text-gold font-medium text-sm mb-1">{exp.role}</p>
                    <p className="text-secondary text-sm">{exp.location}</p>

                    {exp.bullets && (
                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <ul
                            className={`mt-3 space-y-2 list-disc list-inside text-secondary text-sm transition-opacity duration-200 ${
                              isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ transitionDelay: isExpanded ? '100ms' : '0ms' }}
                          >
                            {exp.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {exp.bullets && (
                      <div
                        className="absolute bottom-4 right-4 w-4 h-4 flex items-center justify-center text-gold pointer-events-none"
                        aria-hidden
                      >
                        <ChevronIcon expanded={isExpanded} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
