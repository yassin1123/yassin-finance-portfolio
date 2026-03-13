import { useState, useEffect } from 'react';

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
  },
  {
    id: 4,
    title: 'Enterprise SaaS — Trading Comparables',
    ticker: 'Mixed Universe | Enterprise Software & SaaS',
    modelType: 'Comps',
    description:
      '10-company trading comps across US and UK enterprise software — Salesforce, ServiceNow, Workday, SAP, Sage, Kainos, Temenos, Veeva, HubSpot, and Aveva. NTM consensus multiples, Rule of 40 analysis, valuation bridge across 25th percentile to 75th percentile peer multiples, and an implied valuation section. Includes a sector memo with original views on the UK discount and the Salesforce in-between case.',
    metrics: [
      '10-company universe',
      'EV/NTM Rev & EBITDA',
      'Rule of 40',
      'Valuation bridge',
      '4-tab model',
    ],
    downloadUrl: '/models/SaaS_Trading_Comps-FEB2026.xlsx',
    downloadFilename: 'SaaS_Trading_Comps-FEB2026.xlsx',
    memoUrl: null,
  },
  {
    id: 5,
    title: 'Broadcom / VMware — M&A Analysis',
    ticker: 'NASDAQ:AVGO | Technology & Enterprise Software',
    modelType: 'M&A',
    description:
      "Reverse-engineered accretion/dilution model on Broadcom's $69bn acquisition of VMware. Full EPS bridge pre and post synergies across Year 1 to Year 3. Includes a synergy waterfall with Broadcom's $8.5bn cost-out target broken down by category, pro forma combined P&L, and financing structure analysis. Deal memo written with original views on the CA Technologies precedent and customer attrition risk.",
    metrics: [
      '$69bn deal',
      '50/50 cash & stock',
      '$8.5bn synergy target',
      'EPS accretive Yr2',
      '6-tab model',
    ],
    downloadUrl: '/models/Broadcom_VMware_MA-MARCH2026.xlsx',
    downloadFilename: 'Broadcom_VMware_MA-MARCH2026.xlsx',
    memoUrl: null,
  },
  {
    id: 6,
    title: 'Ocado Group PLC — Credit Analysis',
    ticker: 'LSE: OCDO | High Yield / Leveraged Credit',
    modelType: 'Credit',
    description:
      'Leveraged credit analysis on Ocado Group. Covers coverage and leverage ratios across FY2023–FY2027E, a full debt maturity waterfall across the £1.18bn drawn capital structure, and three stress scenarios testing whether Ocado can service its debt before the 2026–2027 refinancing wall hits. Includes a weighted credit scorecard, implied rating, and a deal memo with original views on the FCF inflection thesis and convertible bond risk.',
    metrics: [
      '£1.18bn drawn debt',
      'B / B- implied rating',
      '2026–27 refinancing wall',
      'EBITDA / Interest 1.8x',
      '7-tab model',
    ],
    downloadUrl: '/models/Ocado_Credit_Analysis-APRIL2026.xlsx',
    downloadFilename: 'Ocado_Credit_Analysis-APRIL2026.xlsx',
    memoUrl: null,
  },
];

function ProjectCard({ project, isVisible, onOpen }) {
  const [showMemoMessage, setShowMemoMessage] = useState(false);

  return (
    <div
      className={`group relative bg-card border border-border border-l-4 border-l-gold rounded-sm transition-all duration-300 overflow-hidden hover:bg-[#151d2e] hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        className="p-5 min-h-[220px] flex flex-col cursor-pointer"
        onClick={() => onOpen(project)}
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="font-mono text-gold text-xs px-2 py-1 border border-gold/40 rounded bg-gold/5 shrink-0">
            {project.modelType}
          </span>
        </div>
        <h3 className="text-white text-base font-semibold leading-tight mb-2 line-clamp-2 flex-1">
          {project.title}
        </h3>
        <span className="font-mono text-secondary text-xs block truncate mb-4">
          {project.ticker}
        </span>
        <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.downloadUrl}
            download={project.downloadFilename}
            className="flex-1 py-2 px-3 bg-gold text-[#0A0E1A] font-semibold text-xs rounded text-center hover:bg-gold/90 transition-colors"
          >
            Download
          </a>
          {project.memoUrl ? (
            <a
              href={project.memoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 border border-border text-white text-xs rounded text-center hover:border-gold hover:text-gold transition-colors"
            >
              Memo
            </a>
          ) : (
            <button
              onClick={() => setShowMemoMessage(!showMemoMessage)}
              className="flex-1 py-2 px-3 border border-border text-white text-xs rounded text-center hover:border-gold hover:text-gold transition-colors"
            >
              Memo
            </button>
          )}
        </div>
      </div>
      {showMemoMessage && !project.memoUrl && (
        <div
          className="px-5 pb-5 pt-0 border-t border-border/50"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-secondary text-[11px] font-mono">
            Full investment memo available upon request. Contact via email for access.
          </p>
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [showMemoMessage, setShowMemoMessage] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden overscroll-none ${
        isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop-in'
      }`}
      onClick={handleClose}
    >
      {/* Shaded backdrop - prevents background scroll */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm overflow-hidden overscroll-none" />

      {/* Modal widget - Mac window style scale animation */}
      <div
        className={`relative bg-card border border-border border-l-4 border-l-gold rounded-sm p-8 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl ${
          isClosing ? 'animate-modal-window-out' : 'animate-modal-window-in'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-secondary hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto overscroll-contain flex-1 min-h-0 pr-2 -mr-2" style={{ overscrollBehavior: 'contain' }}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="font-mono text-gold text-[11px] px-2 py-1 border border-gold/40 rounded bg-gold/5">
            {project.modelType}
          </span>
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
        <span className="font-mono text-secondary text-sm block mb-6">{project.ticker}</span>

        <p className="text-secondary text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="font-mono text-xs bg-[#0A0E1A] border border-border rounded px-2 py-1.5 text-secondary"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.downloadUrl}
            download={project.downloadFilename}
            className="flex-1 py-3 px-5 bg-gold text-[#0A0E1A] font-semibold text-sm rounded text-center hover:bg-gold/90 transition-colors"
          >
            Download
          </a>
          {project.memoUrl ? (
            <a
              href={project.memoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-5 border border-border text-white text-sm rounded text-center hover:border-gold hover:text-gold transition-colors"
            >
              Read Memo
            </a>
          ) : (
            <button
              onClick={() => setShowMemoMessage(!showMemoMessage)}
              className="flex-1 py-3 px-5 border border-border text-white text-sm rounded text-center hover:border-gold hover:text-gold transition-colors"
            >
              Request Memo
            </button>
          )}
        </div>

        {showMemoMessage && !project.memoUrl && (
          <p className="mt-4 p-4 bg-[#0A0E1A] border border-border rounded-sm text-secondary text-sm font-mono">
            Full investment memo available upon request. Contact via email for access.
          </p>
        )}
        </div>
      </div>
    </div>
  );
}

function Projects({ isVisible }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-[32px] sm:text-[40px] font-bold text-white mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={isVisible}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
