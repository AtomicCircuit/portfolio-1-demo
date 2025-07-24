
export default function HeroSection({ title, subtitle, children, backgroundVariant = 'primary' }) {
  return (
    <section className={`hero-section hero-${backgroundVariant}`}>
      <div className="container">
        <div className="hero-content text-center fade-in">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {children && <div className="hero-actions">{children}</div>}
        </div>
      </div>
    </section>
  );
}
