
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

      <style jsx>{`
        .service-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          text-align: center;
          position: relative;
          transition: all var(--transition-normal);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .service-card-featured {
          border: 2px solid var(--primary);
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-primary));
        }

        .service-card-featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-lg);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: var(--space-md);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          margin: 0 auto var(--space-md);
        }

        .service-title {
          font-size: 1.5rem;
          margin-bottom: var(--space-sm);
          color: var(--text-primary);
        }

        .service-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          margin-bottom: var(--space-lg);
          flex-grow: 1;
        }

        .service-feature {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-sm);
          text-align: left;
        }

        .feature-check {
          color: var(--primary);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .service-price {
          margin-bottom: var(--space-lg);
        }

        .price-amount {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-accent);
        }

        .service-cta {
          width: 100%;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
}
