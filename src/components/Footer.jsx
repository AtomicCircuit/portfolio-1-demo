
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Shubhmarg</h3>
            <p className="footer-text">
              Creating meaningful connections through professional services.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Email">📧</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Astrology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
