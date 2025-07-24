
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredServices = [
    {
      icon: '🔮',
      title: 'Personal Readings',
      description: 'Gain insight into your life path and discover your true potential.',
      features: ['60-minute session', 'Personalized report', 'Follow-up guidance'],
      price: '$150'
    },
    {
      icon: '⭐',
      title: 'Birth Chart Analysis',
      description: 'Deep dive into your natal chart for comprehensive understanding.',
      features: ['Complete chart analysis', 'Detailed PDF report', 'Life guidance'],
      price: '$200',
      featured: true
    },
    {
      icon: '🌙',
      title: 'Monthly Forecasts',
      description: 'Stay prepared with personalized monthly astrological guidance.',
      features: ['Monthly predictions', 'Key dates highlighted', 'Email delivery'],
      price: '$75'
    }
  ];

  return (
    <div className="page-home">
      <HeroSection
        title="Discover Your Cosmic Journey"
        subtitle="Professional astrological guidance to help you navigate life's mysteries and unlock your true potential."
      >
        <Link to="/services" className="btn btn-primary">
          Explore Services
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Book Consultation
        </Link>
      </HeroSection>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Services</h2>
          <div className="grid grid-3">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="grid grid-2">
            <div className="testimonial-card card">
              <p className="testimonial-text">
                "The reading was incredibly accurate and provided me with the clarity I needed. 
                Highly recommend for anyone seeking guidance."
              </p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span className="text-muted">Verified Client</span>
              </div>
            </div>
            
            <div className="testimonial-card card">
              <p className="testimonial-text">
                "Professional, insightful, and truly transformative. The birth chart analysis 
                helped me understand myself on a deeper level."
              </p>
              <div className="testimonial-author">
                <strong>Michael R.</strong>
                <span className="text-muted">Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
