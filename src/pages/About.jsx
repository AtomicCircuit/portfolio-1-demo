
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
                  <span className="placeholder-icon">🌟</span>
                  <p className="placeholder-text">Professional Photo</p>
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
    </div>
  );
}
