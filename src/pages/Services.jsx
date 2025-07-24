
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: '🔮',
      title: 'Personal Readings',
      description: 'Comprehensive one-on-one sessions to explore your birth chart and current cosmic influences.',
      features: [
        '60-minute consultation',
        'Personalized birth chart analysis',
        'Current transits and progressions',
        'Life guidance and recommendations',
        'Detailed written summary'
      ],
      price: '$150'
    },
    {
      icon: '⭐',
      title: 'Birth Chart Analysis',
      description: 'In-depth exploration of your natal chart revealing your core personality and life purpose.',
      features: [
        'Complete chart interpretation',
        'Personality traits analysis',
        'Career and relationship insights',
        '20-page detailed PDF report',
        'Follow-up Q&A session'
      ],
      price: '$200',
      featured: true
    },
    {
      icon: '💕',
      title: 'Relationship Compatibility',
      description: 'Understand relationship dynamics through synastry and composite chart analysis.',
      features: [
        'Couple\'s chart comparison',
        'Compatibility assessment',
        'Communication insights',
        'Relationship challenges & strengths',
        'Guidance for harmony'
      ],
      price: '$180'
    },
    {
      icon: '🌙',
      title: 'Monthly Forecasts',
      description: 'Stay prepared with personalized monthly astrological guidance and predictions.',
      features: [
        'Monthly predictions',
        'Key dates and events',
        'Lucky days and timing',
        'Email delivery',
        'Quick text support'
      ],
      price: '$75'
    },
    {
      icon: '🎯',
      title: 'Career Guidance',
      description: 'Discover your professional path and timing for career changes through astrology.',
      features: [
        'Career potential analysis',
        'Best timing for changes',
        'Professional strengths',
        'Industry recommendations',
        'Success strategies'
      ],
      price: '$120'
    },
    {
      icon: '🌟',
      title: 'Life Coaching Sessions',
      description: 'Ongoing astrological support for personal growth and major life decisions.',
      features: [
        'Monthly coaching calls',
        'Ongoing chart monitoring',
        'Decision timing guidance',
        'Personal growth roadmap',
        'Email support included'
      ],
      price: '$300/month'
    }
  ];

  return (
    <div className="page-services">
      <HeroSection
        title="Services & Readings"
        subtitle="Choose from a range of personalized astrological services designed to guide you on your journey."
        backgroundVariant="secondary"
      >
        <Link to="/contact" className="btn btn-primary">
          Book Consultation
        </Link>
      </HeroSection>

      <section className="section">
        <div className="container">
          <div className="services-grid grid grid-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid grid grid-2">
            <div className="faq-item card">
              <h3 className="faq-question">What information do you need for a reading?</h3>
              <p className="faq-answer">
                I need your exact birth date, time, and location. The more accurate your birth time, 
                the more precise your reading will be.
              </p>
            </div>
            
            <div className="faq-item card">
              <h3 className="faq-question">How long does a session typically last?</h3>
              <p className="faq-answer">
                Most sessions are 60 minutes, which allows plenty of time for discussion and questions. 
                Some specialized readings may be longer.
              </p>
            </div>
            
            <div className="faq-item card">
              <h3 className="faq-question">Do you offer online consultations?</h3>
              <p className="faq-answer">
                Yes! I offer sessions via video call, phone, or in-person if you're in the local area. 
                Online sessions are just as effective as in-person meetings.
              </p>
            </div>
            
            <div className="faq-item card">
              <h3 className="faq-question">What's your cancellation policy?</h3>
              <p className="faq-answer">
                Please provide at least 24 hours notice for cancellations. Sessions cancelled with 
                less notice may be subject to a partial fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-grid {
          margin-bottom: var(--space-2xl);
        }

        .faq-section {
          background: var(--bg-secondary);
        }

        .faq-grid {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          height: fit-content;
        }

        .faq-question {
          font-size: 1.1rem;
          margin-bottom: var(--space-sm);
          color: var(--text-primary);
        }

        .faq-answer {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
