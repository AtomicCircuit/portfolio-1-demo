
export default function ServiceCard({ icon, title, description, features, price, featured = false }) {
  return (
    <div className={`service-card ${featured ? 'service-card-featured' : ''}`}>
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      
      {features && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index} className="service-feature">
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {price && (
        <div className="service-price">
          <span className="price-amount">{price}</span>
        </div>
      )}
      
      <button className={`btn ${featured ? 'btn-primary' : 'btn-secondary'} service-cta`}>
        Book Session
      </button>
    </div>
  );
}
