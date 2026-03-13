function Contact({ isVisible }) {
  return (
    <section
      id="contact"
      className={`py-24 px-6 sm:px-12 lg:px-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-[32px] sm:text-[40px] font-bold text-white mb-8"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Contact
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <a
            href="mailto:Yassinalyassin771@gmail.com"
            className="text-gold hover:text-gold/80 transition-colors font-medium"
          >
            Yassinalyassin771@gmail.com
          </a>
          <a
            href="tel:+447751598333"
            className="text-secondary hover:text-gold transition-colors font-mono"
          >
            +44 7751 598333
          </a>
          <a
            href="https://linkedin.com/in/yassinalyassin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-gold transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-secondary text-sm mt-8">Southampton, UK</p>
      </div>
    </section>
  );
}

export default Contact;
