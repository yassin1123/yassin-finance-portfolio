function Contact({ isVisible }) {
  return (
    <section
      id="contact"
      className={`py-24 px-6 sm:px-12 lg:px-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[32px] sm:text-[40px] font-bold text-white mb-8"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Contact
        </h2>

        <div className="bg-card border border-border border-l-4 border-l-gold rounded-sm p-6 sm:p-8 max-w-xl mx-auto">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-mono text-secondary text-xs w-16 shrink-0">Email</span>
              <a
                href="mailto:Yassinalyassin771@gmail.com"
                className="text-gold hover:text-gold/80 transition-colors font-medium text-sm"
              >
                Yassinalyassin771@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-mono text-secondary text-xs w-16 shrink-0">Phone</span>
              <a
                href="tel:+447751598333"
                className="text-white hover:text-gold transition-colors font-mono text-sm"
              >
                +44 7751 598333
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-mono text-secondary text-xs w-16 shrink-0">LinkedIn</span>
              <a
                href="https://linkedin.com/in/yassinalyassin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors font-medium text-sm"
              >
                linkedin.com/in/yassinalyassin
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 pt-2 border-t border-border">
              <span className="font-mono text-secondary text-xs w-16 shrink-0">Location</span>
              <span className="text-secondary text-sm">Surrey, UK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
