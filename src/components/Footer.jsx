
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
          <p>&copy; {currentYear} Zenokai. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-lg);
          padding: var(--space-2xl) 0 var(--space-lg);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .footer-title {
          font-size: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-subtitle {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: var(--space-xs);
        }

        .footer-text {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .footer-links a {
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .social-links {
          display: flex;
          gap: var(--space-sm);
        }

        .social-links a {
          font-size: 1.5rem;
          padding: var(--space-xs);
          border-radius: var(--radius-sm);
          transition: transform var(--transition-fast);
        }

        .social-links a:hover {
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: var(--space-lg) 0;
          text-align: center;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: var(--space-xl);
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
