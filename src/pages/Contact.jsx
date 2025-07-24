
import { useState } from 'react';
import HeroSection from '../components/HeroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    birthDate: '',
    birthTime: '',
    birthLocation: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      birthDate: '',
      birthTime: '',
      birthLocation: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="page-contact">
      <HeroSection
        title="Get In Touch"
        subtitle="Ready to begin your cosmic journey? Book a consultation or ask any questions you may have."
        backgroundVariant="secondary"
      />

      <section className="section">
        <div className="container">
          <div className="contact-content grid grid-2">
            <div className="contact-info">
              <h2 className="contact-title">Let's Connect</h2>
              <p className="contact-description">
                I'm here to guide you through your astrological journey. Whether you're seeking 
                clarity on your life path, relationship insights, or timing for important decisions, 
                I'm ready to help.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>hello@astrologer.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+1 656268585</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-details">
                    <h3>Response Time</h3>
                    <p>Within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🌍</div>
                  <div className="contact-details">
                    <h3>Availability</h3>
                    <p>Online & In-Person Sessions</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title">Book a Consultation</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  <option value="personal-reading">Personal Reading</option>
                  <option value="birth-chart">Birth Chart Analysis</option>
                  <option value="relationship">Relationship Compatibility</option>
                  <option value="monthly-forecast">Monthly Forecast</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="life-coaching">Life Coaching</option>
                </select>
              </div>

              <div className="birth-info">
                <h4 className="birth-info-title">Birth Information (for accurate readings)</h4>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="birthDate" className="form-label">Birth Date</label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="birthTime" className="form-label">Birth Time</label>
                    <input
                      type="time"
                      id="birthTime"
                      name="birthTime"
                      value={formData.birthTime}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="birthLocation" className="form-label">Birth Location</label>
                  <input
                    type="text"
                    id="birthLocation"
                    name="birthLocation"
                    value={formData.birthLocation}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="City, State/Province, Country"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  placeholder="Tell me about what you're seeking guidance on..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
