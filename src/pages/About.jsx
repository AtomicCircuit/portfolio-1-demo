
import HeroSection from '../components/HeroSection';

export default function About() {
  return (
    <div className="page-about">
      <HeroSection
        title="About Me"
        subtitle="Passionate about helping others discover their path through the wisdom of the stars."
        backgroundVariant="secondary"
      />

      <section className="section">
        <div className="container">
          <div className="about-content grid grid-2">
            <div className="about-text">
              <h2 className="about-title">My Journey</h2>
              <p className="about-paragraph">
                With over 10 years of experience in astrological practice, I've dedicated my life 
                to understanding the cosmic influences that shape our experiences. My approach 
                combines traditional astrological wisdom with modern psychological insights.
              </p>
              <p className="about-paragraph">
                I believe that astrology is a powerful tool for self-discovery and personal growth. 
                Through our sessions, you'll gain valuable insights into your personality, 
                relationships, and life purpose.
              </p>
              
              <div className="credentials">
                <h3 className="credentials-title">Certifications & Training</h3>
                <ul className="credentials-list">
                  <li>Certified Professional Astrologer (CPA)</li>
                  <li>Advanced Diploma in Psychological Astrology</li>
                  <li>Specialized Training in Relationship Astrology</li>
                  <li>Continuing Education in Modern Astrological Techniques</li>
                </ul>
              </div>
            </div>

            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon"><img src="https://res.cloudinary.com/dcb5odeqa/image/upload/v1753386363/WhatsApp_Image_2025-07-08_at_14.37.58_jwz2za.png" alt="Image lading..." className='image-about-me'/></span>
                  {/* <p className="placeholder-text">Professional Photo</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">My Approach</h2>
          <div className="grid grid-3">
            <div className="value-card card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Personalized</h3>
              <p className="value-description">
                Every reading is tailored to your unique birth chart and personal circumstances.
              </p>
            </div>
            
            <div className="value-card card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Compassionate</h3>
              <p className="value-description">
                I provide guidance with empathy, understanding, and respect for your journey.
              </p>
            </div>
            
            <div className="value-card card">
              <div className="value-icon">✨</div>
              <h3 className="value-title">Empowering</h3>
              <p className="value-description">
                My goal is to help you make informed decisions and embrace your authentic self.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-content {
          align-items: start;
          gap: var(--space-2xl);
        }

        .about-title {
          font-size: 2rem;
          margin-bottom: var(--space-lg);
          color: var(--text-primary);
        }

        .about-paragraph {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: var(--space-lg);
        }

        .credentials {
          margin-top: var(--space-xl);
        }

        .credentials-title {
          font-size: 1.25rem;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }

        .credentials-list {
          list-style: none;
        }

        .credentials-list li {
          padding: var(--space-xs) 0;
          color: var(--text-secondary);
          position: relative;
          padding-left: var(--space-lg);
        }

        .credentials-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          background: var(--bg-secondary);
          border: 2px dashed var(--border);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-content {
          text-align: center;
          color: var(--text-muted);
        }

        .placeholder-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: var(--space-sm);
        }

        .values-section {
          background: var(--bg-secondary);
        }

        .value-card {
          text-align: center;
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: var(--space-md);
        }

        .value-title {
          font-size: 1.25rem;
          margin-bottom: var(--space-sm);
          color: var(--text-primary);
        }

        .value-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }
      `}</style>
    </div>
  );
}
