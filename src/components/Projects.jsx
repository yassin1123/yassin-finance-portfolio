import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Jet2 PLC | DCF Valuation',
    ticker: 'LON:JET2 | Aviation & Leisure Travel',
    modelType: 'DCF',
    description:
      'Full 5-year FCFF discounted cash flow model on Jet2 PLC. Revenue built from operational drivers (seats flown × average revenue per seat). WACC constructed using CAPM. Sensitivity analysis across WACC and terminal growth rate. Includes scenario analysis, comparable company benchmarking, and a full investment memo.',
    metrics: [
      'WACC ~9.0%',
      'Terminal Growth 2.5%',
      '10-tab model',
      '284 formulas',
    ],
    downloadUrl: '/models/Jet2_DCF_JAN2026.xlsx',
    downloadFilename: 'Jet2_DCF_JAN2026.xlsx',
    memoUrl: null,
    isPlaceholder: false,
  },
  {
    id: 2,
    title: 'eVTOL Operator | Unit Economics Model',
    ticker: 'Advanced Air Mobility | Pre-Revenue Stage',
    modelType: 'Unit Economics',
    description:
      'Bottom-up unit economics model for a hypothetical eVTOL operator based on Joby S4 aircraft specifications. Built from cost per flight hour upwards: energy, pilot, maintenance, vertiport fees, insurance, ATC. Includes breakeven analysis, 5-year P&L with fleet ramp-up (2 to 40 aircraft), and a sensitivity matrix across fare and utilisation rate.',
    metrics: [
      'Breakeven utilisation modelled',
      'Fleet ramp 2→40 aircraft',
      '4-tab model',
    ],
    downloadUrl: '/models/eVTOL_Unit_Economics_MARCH2026.xlsx',
    downloadFilename: 'eVTOL_Unit_Economics_MARCH2026.xlsx',
    memoUrl: null,
    isPlaceholder: false,
  },
  {
    id: 3,
    title: 'Pets at Home Group PLC | LBO Analysis',
    ticker: 'LSE:PETS | UK Pet Care & Specialist Retail',
    modelType: 'LBO',
    description:
      'Full leveraged buyout model on Pets at Home Group PLC. Capital structure built with TLA (£680m, SONIA+400bps) and TLB (£453m, SONIA+500bps) at 4.5x entry leverage. Includes mandatory amortisation, 50% excess cash sweep, full debt schedule, and FCFE build. Sensitivity analysis across 7 entry multiples × 7 exit multiples. Includes comparable company analysis, investment memo, and deal dashboard.',
    metrics: [
      'Entry EV/EBITDA: 7.5x',
      'IRR: ~19.4%',
      'MoM: 2.43x',
      '4.5x entry leverage',
      '8-tab model',
    ],
    downloadUrl: '/models/Pets_at_Home_LBO_DEC2025.xlsx',
    downloadFilename: 'Pets_at_Home_LBO_DEC2025.xlsx',
    memoUrl: null,
    isPlaceholder: false,
  },
];

const placeholderProjects = [
  { modelType: 'Comps', label: 'Trading Comps' },
  { modelType: 'M&A', label: 'M&A Accretion/Dilution' },
];

function ProjectCard({ project, isVisible }) {
  const [memoExpanded, setMemoExpanded] = useState(false);

  if (project.isPlaceholder) {
    return (
      <div
        className={`bg-card border border-border border-l-4 border-l-gold rounded-sm p-8 flex flex-col items-center justify-center min-h-[280px] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="font-mono text-gold text-xs px-2 py-1 border border-gold/40 rounded-sm mb-4 bg-gold/5">
          {project.modelType}
        </span>
        <span className="text-secondary text-base">Coming Soon</span>
      </div>
    );
  }

  return (
    <div
      className={`group relative bg-card border border-border border-l-4 border-l-gold rounded-sm p-6 sm:p-8 transition-all duration-700 hover:bg-[#151d2e] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Chart/ financial symbol watermark - top right, very low opacity */}
      <div className="absolute top-4 right-4 font-mono text-4xl text-gold opacity-[0.06] pointer-events-none">
        $
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
          <span className="font-mono text-secondary text-xs">{project.ticker}</span>
        </div>
        {/* Bloomberg security type tag - rectangular, not pill */}
        <span className="font-mono text-gold text-[11px] px-2 py-1.5 border border-gold/40 rounded-sm shrink-0 bg-gold/5">
          {project.modelType}
        </span>
      </div>

      <p className="text-secondary text-sm leading-relaxed mb-6">{project.description}</p>

      {/* Data cells - monospace, subtle border, small */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.metrics.map((metric) => (
          <span
            key={metric}
            className="font-mono text-[11px] bg-[#0A0E1A] border border-border rounded-sm px-2.5 py-1.5 text-secondary"
          >
            {metric}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={project.downloadUrl}
          download={project.downloadFilename}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-[#0A0E1A] font-semibold text-xs rounded-sm hover:bg-gold/90 transition-colors"
        >
          Download Model
        </a>
        {project.memoUrl ? (
          <a
            href={project.memoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-white text-xs rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            Read Memo
          </a>
        ) : (
          <button
            onClick={() => setMemoExpanded(!memoExpanded)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-white text-xs rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            Read Memo
          </button>
        )}
      </div>

      {memoExpanded && !project.memoUrl && (
        <div className="mt-4 p-4 bg-[#0A0E1A] border border-border rounded-sm text-secondary text-xs font-mono">
          Full investment memo available upon request. Contact via email for access.
        </div>
      )}
    </div>
  );
}

function Projects({ isVisible }) {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-[32px] sm:text-[40px] font-bold text-white mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isVisible={isVisible} />
          ))}
          <div className="grid sm:grid-cols-2 gap-6">
            {placeholderProjects.map((p) => (
              <ProjectCard
                key={p.modelType}
                project={{
                  ...p,
                  isPlaceholder: true,
                }}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
